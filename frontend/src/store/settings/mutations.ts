import { MutationTree } from 'vuex'
import { SettingsState } from './state'
import { i18n } from 'src/boot/i18n'
import { Dark } from 'quasar'

export enum SettingsMutations {
  SET_DARK_MODE = 'SET_DARK_MODE',
  SET_LEFT_DRAWER_OPEN = 'SET_LEFT_DRAWER_OPEN',
  SET_LOCALE = 'SET_LOCALE'
}

const mutation: MutationTree<SettingsState> = {
  [SettingsMutations.SET_DARK_MODE] (state: SettingsState, value: boolean) {
    state.darkMode = value
    Dark.set(value)
  },
  [SettingsMutations.SET_LEFT_DRAWER_OPEN] (state: SettingsState, value: boolean) {
    state.leftDrawerOpen = value
  },
  [SettingsMutations.SET_LOCALE] (state: SettingsState, value: string) {
    state.locale = value
    i18n.locale = value
  }
}

export default mutation
