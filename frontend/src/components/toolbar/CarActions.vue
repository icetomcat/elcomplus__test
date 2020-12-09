<template>
  <div v-if="car" class="q-gutter-sm">
    <q-btn color="secondary" icon="fa fa-plus" @click="onAddRefill()"></q-btn>
    <q-btn color="secondary" icon="fa fa-pen" @click="onEditCar()"></q-btn>
    <q-btn color="primary" icon="fa fa-trash" @click="onDeleteCar()"></q-btn>
  </div>
</template>

<script lang="ts">
import Component, { mixins } from 'vue-class-component'
import Car from 'src/store/models/Car'
import { CarMixin, RefillMixin } from 'src/mixins/crud'
import Refill from 'src/store/models/Refill'
import { v4 as uuid } from 'uuid'

@Component
export default class CarActions extends mixins(CarMixin, RefillMixin) {
  get car () {
    return Car.query().whereId(this.$route.params.id).withAll().first()
  }

  async onDeleteCar () {
    try {
      await this.deleteCar(this.car)
      this.$router.push({ name: 'cars' }).catch((e: Error) => console.error(e))
    } catch (error) {
      if (error instanceof Error) { console.error(error) }
    }
  }

  async onAddRefill () {
    try {
      await this.addRefill(new Refill({ quantity: 0, id: uuid(), carId: this.car?.id }))
    } catch (error) {
      if (error instanceof Error) { console.error(error) }
    }
  }

  async onEditCar () {
    try {
      await this.editCar(this.car)
    } catch (error) {
      if (error instanceof Error) { console.error(error) }
    }
  }
}
</script>
