<template>
  <div class="q-gutter-sm">
    <q-btn color="secondary" icon="fa fa-plus" @click="onAddStation"></q-btn>
  </div>
</template>

<script lang="ts">
import Component, { mixins } from 'vue-class-component'
import { GasStationMixin } from 'src/mixins/crud'

@Component
export default class StationsActions extends mixins(GasStationMixin) {
  async onAddStation () {
    try {
      await this.addStation()
    } catch (error) {
      if (error instanceof Error) { console.error(error) }
    }
  }
}
</script>
