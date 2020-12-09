import Vue from 'vue'
import Component from 'vue-class-component'
import { State, Mutation } from 'vuex-class'
import { SettingsMutations } from 'src/store/settings/mutations'
import { TranslateResult } from 'vue-i18n'
import { Dark } from 'quasar'

@Component
export class DarkModeMixin extends Vue {
  @Mutation(SettingsMutations.SET_DARK_MODE, { namespace: 'settings' }) setDarkMode!: (mode: boolean) => void;

  get darkMode () { return Dark.isActive }
  set darkMode (mode: boolean) { this.setDarkMode(mode) }
}

@Component
export class LeftDrawerOpenMixin extends Vue {
  @State('leftDrawerOpen', { namespace: 'settings' }) leftDrawerOpenState!: boolean;
  @Mutation(SettingsMutations.SET_LEFT_DRAWER_OPEN, { namespace: 'settings' }) setLeftDrawer!: (mode: boolean) => void;

  get leftDrawerOpen () { return this.leftDrawerOpenState }
  set leftDrawerOpen (value: boolean) { this.setLeftDrawer(value) }
}

@Component
export class LocaleMixin extends Vue {
  @State('locale', { namespace: 'settings' }) localeState!: string;
  locales!: { label: TranslateResult, value: string }[]

  created () {
    this.locales = this.$i18n.availableLocales.map(locale => {
      return { label: this.$t(locale), value: locale }
    })
  }

  @Mutation(SettingsMutations.SET_LOCALE, { namespace: 'settings' }) setLocale!: (locale: string) => void;

  get locale () { return this.localeState }
  set locale (value: string) { this.setLocale(value) }
}
