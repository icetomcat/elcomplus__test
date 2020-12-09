<template>
  <div v-if="station" class="q-gutter-sm">
    <q-btn color="secondary" icon="fa fa-plus" @click="onAddRefill()"></q-btn>
    <q-btn color="secondary" icon="fa fa-pen" @click="onEditStation()"></q-btn>
    <q-btn color="primary" icon="fa fa-trash" @click="onDeleteStation()"></q-btn>
  </div>
</template>

<script lang="ts">
import Component, { mixins } from 'vue-class-component'
import { GasStationMixin, RefillMixin } from 'src/mixins/crud'
import Refill from 'src/store/models/Refill'
import { v4 as uuid } from 'uuid'
import GasStation from 'src/store/models/GasStation'

@Component
export default class StationActions extends mixins(GasStationMixin, RefillMixin) {
  get station () {
    return GasStation.query().whereId(this.$route.params.id).withAll().first()
  }

  async onEditStation () {
    try {
      await this.editStation(this.station)
    } catch (error) {
      if (error instanceof Error) { console.error(error) }
    }
  }

  async onDeleteStation () {
    try {
      await this.deleteStation(this.station)
      this.$router.push({ name: 'gas-stations' }).catch((e: Error) => console.error(e))
    } catch (error) {
      if (error instanceof Error) { console.error(error) }
    }
  }

  async onAddRefill () {
    try {
      await this.addRefill(new Refill({ quantity: 0, id: uuid(), stationId: this.station?.id }))
    } catch (error) {
      if (error instanceof Error) { console.error(error) }
    }
  }
}
</script>
