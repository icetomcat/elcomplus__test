<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin" style="width: 500px; max-width: 80vw;">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">{{ $t("dialogs.edit-refill.title") }}</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
      <q-card-section>
        <EditRefill ref="form" :refill="refill"></EditRefill>
      </q-card-section>
      <q-card-actions align="right" class="text-primary">
        <q-btn :label="$t('dialogs.edit-refill.button.cancel')" flat class="text-amber" v-close-popup />
        <q-btn :label="$t('dialogs.edit-refill.button.save')" flat class="text-amber" @click="save()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { Vue, Component, Ref, Prop } from 'vue-property-decorator'
import { QDialog } from 'quasar'
import EditRefill from 'src/pages/EditRefill.vue'
import Refill from 'src/store/models/Refill'

@Component({
  components: {
    EditRefill
  }
})
export default class EditRefillDialog extends Vue {
  @Prop() refill!: Refill
  @Ref('dialog') readonly dialog!: QDialog
  @Ref('form') readonly form!: EditRefill

  show () {
    this.dialog.show()
  }

  hide () {
    this.dialog.hide()
  }

  save () {
    const refill = this.form.refill as Refill
    this.$emit('ok', refill.$push().then(() => {
      this.hide()
    }))
  }

  onDialogHide () {
    this.$emit('hide')
  }
}
</script>
