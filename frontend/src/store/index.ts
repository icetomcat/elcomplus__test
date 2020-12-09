import { store } from 'quasar/wrappers'
import Vuex, { Store } from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMGraphQL, { ConnectionMode, DefaultAdapter } from '@vuex-orm/plugin-graphql'
import VuexPersistence from 'vuex-persist'

import settings from './settings'
import { SettingsState } from './settings/state'

import { i18n } from 'src/boot/i18n'
import { Dark } from 'quasar'
import Car from './models/Car'
import GasStation from './models/GasStation'
import Refill from './models/Refill'

const database = new VuexORM.Database()
database.register(Car)
database.register(GasStation)
database.register(Refill)

DefaultAdapter.prototype.getConnectionMode = function () {
  return ConnectionMode.PLAIN
}

const VuexORMGraphQLOptions = {
  url: 'http://localhost:4000',
  database: database,
  headers: {}
}

VuexORM.use(VuexORMGraphQL, VuexORMGraphQLOptions)

export interface StoreInterface {
  settings: SettingsState,
}

export default store(function ({ Vue }) {
  Vue.use(Vuex)

  const vuexLocal = new VuexPersistence<StoreInterface>({
    storage: window.localStorage,
    modules: ['settings']
  })

  const store = new Store<StoreInterface>({
    plugins: [vuexLocal.plugin, VuexORM.install(database)],

    modules: {
      settings
    },

    strict: !!process.env.DEV
  })

  i18n.locale = store.state.settings.locale
  if (store.state.settings.darkMode !== 'auto') {
    Dark.set(store.state.settings.darkMode)
  }

  return store
})
