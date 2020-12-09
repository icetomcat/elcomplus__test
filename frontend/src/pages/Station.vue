<template>
  <div>
    <div v-if="station">
      <div class="q-mx-sm q-mb-sm">
        <span class="text-h3">{{station.name}} — {{station.address}}</span>
      </div>
      <q-table
        :pagination="{
          rowsPerPage: 25,
        }"
        :title="$t('page.station.refill')"
        :data="station.refills"
        :columns="[
          {name: 'id', align: 'left', label: $t('model.refill.id'), field: 'id'},
          {name: 'date', align: 'left',label: $t('model.refill.date'), field: 'createdAt'},
          {name: 'quantity', align: 'left',label: $t('model.refill.quantity'), field: 'quantity'},
          {name: 'brand', align: 'left', label: $t('model.car.brand'), field: ''},
          {name: 'number', align: 'left',label: $t('model.car.number'), field: row => getCar(row.carId).number},
          {name: 'actions', align: 'right',label: '', field: ''},
        ]"
        row-key="id"
      >
        <template v-slot:body-cell-brand="props">
          <q-td :props="props">
            <router-link class="text-primary" :to="{ name: 'car', params: { id: props.row.carId }}">
              {{getCar(props.row.carId).brand}}
            </router-link>
          </q-td>
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn dense round flat color="grey" @click="onEditRefill(props.row)">
              <q-icon name="fa fa-pen" size="xs"></q-icon>
            </q-btn>
            <q-btn dense round flat color="grey" @click="onDeleteRefill(props.row)">
              <q-icon name="fa fa-trash" size="xs"></q-icon>
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script lang='ts'>
import Component, { mixins } from 'vue-class-component'
import { GasStationMixin, RefillMixin } from 'src/mixins/crud'
import GasStation from 'src/store/models/GasStation'
import Car from 'src/store/models/Car'
import Refill from 'src/store/models/Refill'

@Component
export default class Station extends mixins(GasStationMixin, RefillMixin) {
  get station () {
    return GasStation.query().whereId(this.$route.params.id).withAll().first()
  }

  getCar (carId: string) {
    return Car.query().whereId(carId).first() ?? { brand: '', number: '' }
  }

  async onEditRefill (refill: Refill) {
    try {
      await this.editRefill(refill)
    } catch (error) {
      if (error instanceof Error) { console.error(error) }
    }
  }

  async onDeleteRefill (refill: Refill) {
    try {
      await this.deleteRefill(refill)
    } catch (error) {
      if (error instanceof Error) { console.error(error) }
    }
  }
}
</script>
