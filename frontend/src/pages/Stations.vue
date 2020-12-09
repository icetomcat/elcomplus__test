<template>
  <q-table
      :pagination="{
        rowsPerPage: 25,
      }"
      :title="$t('page.gas-stations')"
      :data="stations"
      :columns="[
        {name: 'id', align: 'left', label: $t('model.gas-station.id'), field: ''},
        {name: 'brand', align: 'left',label: $t('model.gas-station.name'), field: 'name'},
        {name: 'number', align: 'left',label: $t('model.gas-station.address'), field: 'address'},
        {name: 'totalFill', align: 'left',label: $t('model.gas-station.totalFill'), field: 'totalFill'},
        {name: 'actions', align: 'right',label: '', field: ''},
      ]"
      row-key="id"
    >
      <template v-slot:body-cell-id="props">
        <q-td :props="props">
          <router-link class="text-primary" :to="{ name: 'gas-station', params: { id: props.row.id }}">
            {{props.row.id}}
          </router-link>
        </q-td>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn dense round flat color="grey" @click="onAddRefill(props.row)">
            <q-icon name="fa fa-plus" size="xs"></q-icon>
          </q-btn>
          <q-btn dense round flat color="grey" @click="onEditStation(props.row)">
            <q-icon name="fa fa-pen" size="xs"></q-icon>
          </q-btn>
          <q-btn dense round flat color="grey" @click="onDeleteStation(props.row)">
            <q-icon name="fa fa-trash" size="xs"></q-icon>
          </q-btn>
        </q-td>
      </template>
    </q-table>
</template>

<script lang='ts'>
import Component, { mixins } from 'vue-class-component'
import GasStation from 'src/store/models/GasStation'
import { GasStationMixin, RefillMixin } from 'src/mixins/crud'
import Refill from 'src/store/models/Refill'
import { v4 as uuid } from 'uuid'

@Component
export default class Stations extends mixins(GasStationMixin, RefillMixin) {
  get stations () {
    return GasStation.query().withAll().all()
  }

  async onAddRefill (station?: GasStation) {
    try {
      await this.addRefill(new Refill({ quantity: 0, id: uuid(), stationId: station?.id }))
    } catch (error) {
      if (error instanceof Error) { console.error(error) }
    }
  }

  async onEditStation (station: GasStation) {
    try {
      await this.editStation(station)
    } catch (error) {
      if (error instanceof Error) { console.error(error) }
    }
  }

  async onDeleteStation (station: GasStation) {
    try {
      await this.deleteStation(station)
    } catch (error) {
      if (error instanceof Error) { console.error(error) }
    }
  }
}
</script>
