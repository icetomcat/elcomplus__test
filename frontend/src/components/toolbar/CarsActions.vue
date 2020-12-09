<template>
  <div class="q-gutter-sm">
    <q-btn color="secondary" icon="fa fa-plus" @click="onAddCar"></q-btn>
  </div>
</template>

<script lang="ts">
import Component, { mixins } from 'vue-class-component'
import { CarMixin } from 'src/mixins/crud'

@Component
export default class CarActions extends mixins(CarMixin) {
  async onAddCar () {
    try {
      await this.addCar()
    } catch (error) {
      if (error instanceof Error) { console.error(error) }
    }
  }
}
</script>
