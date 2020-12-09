<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin" style="width: 500px; max-width: 80vw;">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">{{ $t("dialogs.edit-station.title") }}</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
      <q-card-section>
        <EditStation ref="form" :station="station"></EditStation>
      </q-card-section>
      <q-card-actions align="right" class="text-primary">
        <q-btn :label="$t('dialogs.edit-station.button.cancel')" flat class="text-amber" v-close-popup />
        <q-btn :label="$t('dialogs.edit-station.button.save')" flat class="text-amber" @click="save()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { Vue, Component, Ref, Prop } from 'vue-property-decorator'
import { QDialog } from 'quasar'
import EditStation from 'src/pages/EditStation.vue'
import GasStation from 'src/store/models/GasStation'

@Component({
  components: {
    EditStation
  }
})
export default class EditStationDialog extends Vue {
  @Prop() station!: GasStation
  @Ref('dialog') readonly dialog!: QDialog
  @Ref('form') readonly form!: EditStation

  show () {
    this.dialog.show()
  }

  hide () {
    this.dialog.hide()
  }

  save () {
    const station = this.form.station as GasStation
    this.$emit('ok', station.$push().then(() => {
      this.hide()
    }))
  }

  onDialogHide () {
    this.$emit('hide')
  }
}
</script>
