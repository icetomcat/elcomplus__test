<template>
  <q-table
      :pagination="{
        rowsPerPage: 25,
      }"
      :title="$t('page.cars')"
      :data="cars"
      :columns="[
        {name: 'id', align: 'left', label: $t('model.car.id'), field: ''},
        {name: 'brand', align: 'left',label: $t('model.car.brand'), field: 'brand'},
        {name: 'number', align: 'left',label: $t('model.car.number'), field: 'number'},
        {name: 'totalFill', align: 'left',label: $t('model.car.totalFill'), field: 'totalFill'},
        {name: 'countFills', align: 'left',label: $t('model.car.countFills'), field: 'countFills'},
        {name: 'actions', align: 'right',label: '', field: ''},
      ]"
      row-key="id"
    >
      <template v-slot:body-cell-id="props">
        <q-td :props="props">
          <router-link class="text-primary" :to="{ name: 'car', params: { id: props.row.id }}">
            {{props.row.id}}
          </router-link>
        </q-td>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn dense round flat color="grey" @click="onAddRefill(props.row)">
            <q-icon name="fa fa-plus" size="xs"></q-icon>
          </q-btn>
          <q-btn dense round flat color="grey" @click="onEditCar(props.row)">
            <q-icon name="fa fa-pen" size="xs"></q-icon>
          </q-btn>
          <q-btn dense round flat color="grey" @click="onDeleteCar(props.row)">
            <q-icon name="fa fa-trash" size="xs"></q-icon>
          </q-btn>
        </q-td>
      </template>
  </q-table>
</template>

<script lang='ts'>
import Car from 'src/store/models/Car'
import Component, { mixins } from 'vue-class-component'
import { CarMixin, RefillMixin } from 'src/mixins/crud'
import { v4 as uuid } from 'uuid'
import Refill from 'src/store/models/Refill'

@Component
export default class Cars extends mixins(CarMixin, RefillMixin) {
  get cars () {
    return Car.query().withAll().all()
  }

  async onAddRefill (car?: Car) {
    try {
      await this.addRefill(new Refill({ quantity: 0, id: uuid(), carId: car?.id }))
    } catch (error) {
      if (error instanceof Error) { console.error(error) }
    }
  }

  async onEditCar (car: Car) {
    try {
      await this.editCar(car)
    } catch (error) {
      if (error instanceof Error) { console.error(error) }
    }
  }

  async onDeleteCar (car: Car) {
    try {
      await this.deleteCar(car)
    } catch (error) {
      if (error instanceof Error) { console.error(error) }
    }
  }
}
</script>
