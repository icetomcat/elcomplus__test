<template>
  <div>
    <q-select
      :options="cars" v-model="refill.carId" emit-value
      :label="$t('page.edit-refill.car-select.label')"
      :option-value="(item) => item === null ? null : item.id"
      :option-label="carLabel"
    >
    </q-select>
    <q-select
      :options="stations" v-model="refill.stationId" emit-value
      :label="$t('page.edit-refill.station-select.label')"
      :option-value="(item) => item === null ? null : item.id"
      :option-label="stationLabel"
    >
    </q-select>
    <q-input outlined v-model.number="refill.quantity" :label="$t('page.edit-refill.quantity.label')" type="number" min="0" max="100"></q-input>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import Car from 'src/store/models/Car'
import { Prop } from 'vue-property-decorator'
import GasStation from 'src/store/models/GasStation'
import Refill from 'src/store/models/Refill'
import { v4 as uuid } from 'uuid'

@Component
export default class EditRefill extends Vue {
  @Prop({ default: () => new Refill({ quantity: 0, id: uuid() }) }) refill!: Refill

  get cars () {
    return Car.query().all()
  }

  get stations () {
    return GasStation.query().all()
  }

  carLabel (car: Car | string | null): string {
    if (car instanceof Car) {
      return `${car.brand} — ${car.number}`
    } else if (typeof car === 'string') {
      return this.carLabel(Car.query().whereId(car).first())
    }
    return ''
  }

  stationLabel (station: GasStation | string | null): string {
    if (station instanceof GasStation) {
      return `${station.name} — ${station.address}`
    } else if (typeof station === 'string') {
      return this.stationLabel(GasStation.query().whereId(station).first())
    }
    return ''
  }
}
</script>
