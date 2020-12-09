<template>
  <div>
    <div v-if="car">
      <div class="q-mx-sm q-mb-sm">
        <span class="text-h3">{{car.brand}} — {{car.number}}</span>
      </div>
      <q-table
        :pagination="{
          rowsPerPage: 25,
        }"
        :title="$t('page.car.refill')"
        :data="car.refills"
        :columns="[
          {name: 'id', align: 'left', label: $t('model.refill.id'), field: 'id'},
          {name: 'date', align: 'left',label: $t('model.refill.date'), field: 'createdAt'},
          {name: 'quantity', align: 'left',label: $t('model.refill.quantity'), field: 'quantity'},
          {name: 'address', align: 'left', label: $t('model.gas-station.address'), field: ''},
          {name: 'name', align: 'left',label: $t('model.gas-station.name'), field: row => getStation(row.stationId).name},
          {name: 'actions', align: 'right',label: '', field: ''},
        ]"
        row-key="id"
      >
        <template v-slot:body-cell-address="props">
          <q-td :props="props">
            <router-link class="text-primary" :to="{ name: 'gas-station', params: { id: props.row.stationId }}">
              {{getStation(props.row.stationId).address}}
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

<script lang="ts">
import Component, { mixins } from 'vue-class-component'
import Car from 'src/store/models/Car'
import GasStation from 'src/store/models/GasStation'
import { CarMixin, RefillMixin } from 'src/mixins/crud'
import Refill from 'src/store/models/Refill'

@Component
export default class CarPage extends mixins(CarMixin, RefillMixin) {
  get car () {
    return Car.query().whereId(this.$route.params.id).withAll().first()
  }

  getStation (stationId: string) {
    return GasStation.query().whereId(stationId).first() ?? { address: '', name: '' }
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
