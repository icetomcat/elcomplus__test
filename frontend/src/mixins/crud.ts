import Car from 'src/store/models/Car'
import Refill from 'src/store/models/Refill'
import Vue from 'vue'
import Component from 'vue-class-component'
import EditRefillDialog from 'src/dialogs/EditRefill.vue'
import EditCarDialog from 'src/dialogs/EditCar.vue'
import EditStationDialog from 'src/dialogs/EditStation.vue'
import GasStation from 'src/store/models/GasStation'

@Component
export class CarMixin extends Vue {
  deleteCar (car: Car | null) {
    if (!car) {
      return Promise.reject(new Error(this.$t('notify.model.car.deleted.message.error').toString()))
    }
    return new Promise<Car | null>((resolve, reject) => {
      this.$q.dialog({
        title: this.$t('dialogs.confirm.delete.title').toString(),
        message: this.$t('dialogs.confirm.delete.message').toString(),
        cancel: true
      }).onOk(() => {
        car.$deleteAndDestroy().then((value) => {
          this.$q.notify({
            type: 'positive',
            message: this.$t('notify.model.car.deleted.message').toString()
          })
          resolve(value)
        }).catch((reason) => {
          this.$q.notify({
            type: 'negative',
            message: this.$t('notify.model.car.deleted.message.error').toString()
          })
          reject(reason)
        })
      }).onCancel(() => {
        reject()
      })
    })
  }

  editCar (car?: Car | null) {
    return new Promise<Car | null>((resolve, reject) => {
      this.$q.dialog({
        component: EditCarDialog,
        parent: this,
        ...(car ? { car } : {})
      }).onOk((refill: Promise<Car>) => {
        refill.then((value) => {
          this.$q.notify({
            type: 'positive',
            message: this.$t('notify.model.car.saved.message').toString()
          })
          resolve(value)
        }).catch((reason) => {
          this.$q.notify({
            type: 'negative',
            message: this.$t('notify.model.car.saved.message.error').toString()
          })
          reject(reason)
        })
      }).onCancel(() => {
        reject()
      })
    })
  }

  addCar (car?: Car | null) {
    return this.editCar(car)
  }
}

@Component
export class RefillMixin extends Vue {
  deleteRefill (refill: Refill | null) {
    if (!refill) {
      return Promise.reject(new Error(this.$t('notify.model.refill.deleted.message.error').toString()))
    }
    return new Promise<Refill | null>((resolve, reject) => {
      this.$q.dialog({
        title: this.$t('dialogs.confirm.delete.title').toString(),
        message: this.$t('dialogs.confirm.delete.message').toString(),
        cancel: true
      }).onOk(() => {
        refill.$deleteAndDestroy().then((value) => {
          this.$q.notify({
            type: 'positive',
            message: this.$t('notify.model.refill.deleted.message').toString()
          })
          resolve(value)
        }).catch((reason) => {
          this.$q.notify({
            type: 'negative',
            message: this.$t('notify.model.refill.deleted.message.error').toString()
          })
          reject(reason)
        })
      }).onCancel(() => {
        reject()
      })
    })
  }

  editRefill (refill?: Refill | null) {
    return new Promise<Refill | null>((resolve, reject) => {
      this.$q.dialog({
        component: EditRefillDialog,
        parent: this,
        ...(refill ? { refill } : {})
      }).onOk((refill: Promise<Refill>) => {
        refill.then((value) => {
          this.$q.notify({
            type: 'positive',
            message: this.$t('notify.model.refill.saved.message').toString()
          })
          resolve(value)
        }).catch((reason) => {
          this.$q.notify({
            type: 'negative',
            message: this.$t('notify.model.refill.saved.message.error').toString()
          })
          reject(reason)
        })
      }).onCancel(() => {
        reject()
      })
    })
  }

  addRefill (refill?: Refill | null) {
    return this.editRefill(refill)
  }
}

@Component
export class GasStationMixin extends Vue {
  deleteStation (station: GasStation | null) {
    if (!station) {
      return Promise.reject(new Error(this.$t('notify.model.station.deleted.message.error').toString()))
    }
    return new Promise<GasStation | null>((resolve, reject) => {
      this.$q.dialog({
        title: this.$t('dialogs.confirm.delete.title').toString(),
        message: this.$t('dialogs.confirm.delete.message').toString(),
        cancel: true
      }).onOk(() => {
        station.$deleteAndDestroy().then((value) => {
          this.$q.notify({
            type: 'positive',
            message: this.$t('notify.model.station.deleted.message').toString()
          })
          resolve(value)
        }).catch((reason) => {
          this.$q.notify({
            type: 'negative',
            message: this.$t('notify.model.station.deleted.message.error').toString()
          })
          reject(reason)
        })
      }).onCancel(() => {
        reject()
      })
    })
  }

  editStation (station?: GasStation | null) {
    return new Promise<GasStation | null>((resolve, reject) => {
      this.$q.dialog({
        component: EditStationDialog,
        parent: this,
        ...(station ? { station } : {})
      }).onOk((station: Promise<GasStation>) => {
        station.then((value) => {
          this.$q.notify({
            type: 'positive',
            message: this.$t('notify.model.station.saved.message').toString()
          })
          resolve(value)
        }).catch((reason) => {
          this.$q.notify({
            type: 'negative',
            message: this.$t('notify.model.station.saved.message.error').toString()
          })
          reject(reason)
        })
      }).onCancel(() => {
        reject()
      })
    })
  }

  addStation (station?: GasStation | null) {
    return this.editStation(station)
  }
}
