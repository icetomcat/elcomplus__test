<template>
  <div>
    <q-select
      :options="['Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Bugatti', 'Buick']"
      :label="$t('page.edit-car.brand-select.label')"
      v-model="car.brand"
      emit-value
    >
    </q-select>
    <q-input outlined v-model="car.number" :label="$t('page.edit-car.number.label')"></q-input>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import Car from 'src/store/models/Car'
import { Prop } from 'vue-property-decorator'
import { v4 as uuid } from 'uuid'

@Component
export default class EditCar extends Vue {
  @Prop({ default: () => new Car({ id: uuid() }) }) car!: Car
}
</script>
