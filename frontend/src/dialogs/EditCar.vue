<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin" style="width: 500px; max-width: 80vw;">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">{{ $t("dialogs.edit-car.title") }}</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
      <q-card-section>
        <EditCar ref="form" :car="car"></EditCar>
      </q-card-section>
      <q-card-actions align="right" class="text-primary">
        <q-btn :label="$t('dialogs.edit-car.button.cancel')" flat class="text-amber" v-close-popup />
        <q-btn :label="$t('dialogs.edit-car.button.save')" flat class="text-amber" @click="save()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { Vue, Component, Ref, Prop } from 'vue-property-decorator'
import { QDialog } from 'quasar'
import EditCar from 'src/pages/EditCar.vue'
import Car from 'src/store/models/Car'

@Component({
  components: {
    EditCar
  }
})
export default class EditCarDialog extends Vue {
  @Prop() car!: Car
  @Ref('dialog') readonly dialog!: QDialog
  @Ref('form') readonly form!: EditCar

  show () {
    this.dialog.show()
  }

  hide () {
    this.dialog.hide()
  }

  save () {
    const car = this.form.car as Car
    this.$emit('ok', car.$push().then(() => {
      this.hide()
    }))
  }

  onDialogHide () {
    this.$emit('hide')
  }
}
</script>
