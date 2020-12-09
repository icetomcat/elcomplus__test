<template>
  <q-table
      :title="$t('page.overview')"
      :data="overview"
      :columns="[
        {name: 'title', align: 'left', label: $t('page.overview.title'), field: 'title'},
        {name: 'total', align: 'left',label: $t('page.overview.total'), field: 'total'},
        {name: 'fill', align: 'left',label: $t('page.overview.fill'), field: 'fill'}
      ]"
      row-key="title"
      hide-pagination
    />
</template>

<script lang="ts">
import Car from 'src/store/models/Car'
import GasStation from 'src/store/models/GasStation'
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Overview extends Vue {
  get cars () {
    return Car.query().withAll().all()
  }

  get stations () {
    return GasStation.query().withAll().all()
  }

  get overview () {
    return [
      {
        title: this.$t('page.overview.cars'),
        total: this.cars.length,
        fill: this.cars.reduce((sum, car) => sum + car.totalFill, 0)
      },
      {
        title: this.$t('page.overview.gas-stations'),
        total: this.stations.length,
        fill: this.stations.reduce((sum, car) => sum + car.totalFill, 0)
      }
    ]
  }
}
</script>
