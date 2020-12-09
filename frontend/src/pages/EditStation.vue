<template>
  <div>
    <q-input outlined v-model="station.name" :label="$t('page.edit-station.name.label')"></q-input>
    <q-input outlined v-model="station.address" :label="$t('page.edit-station.address.label')"></q-input>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import { Prop } from 'vue-property-decorator'
import { v4 as uuid } from 'uuid'
import GasStation from 'src/store/models/GasStation'

@Component
export default class EditStation extends Vue {
  @Prop({ default: () => new GasStation({ id: uuid() }) }) station!: GasStation
}
</script>
