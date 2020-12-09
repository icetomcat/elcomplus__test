<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin" style="width: 500px; max-width: 80vw;">
      <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ $t("page.settings") }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
          <Settings></Settings>
        </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import Settings from '../pages/Settings.vue'
import { Vue, Component, Ref } from 'vue-property-decorator'
import { QDialog } from 'quasar'

@Component({
  components: {
    Settings
  }
})
export default class SettingsDialog extends Vue {
  @Ref('dialog') readonly dialog!: QDialog

  show () {
    this.dialog.show()
  }

  hide () {
    this.dialog.hide()
  }

  onDialogHide () {
    this.$emit('hide')
  }
}
</script>
