import { i18n } from 'src/boot/i18n'
import { Dark } from 'quasar'

export interface SettingsState {
  darkMode: typeof Dark.mode;
  leftDrawerOpen: boolean;
  locale: string;
}

const state: SettingsState = {
  darkMode: 'auto',
  leftDrawerOpen: true,
  locale: i18n.locale
}

export default state
