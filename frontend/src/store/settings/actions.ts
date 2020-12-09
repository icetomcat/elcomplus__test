import { ActionTree, Commit } from 'vuex'
import { StoreInterface } from '../index'
import { SettingsState } from './state'

export enum SettingsActions {
  DISPATCH_VALUE = 'DISPATCH_VALUE'
}

const actions: ActionTree<SettingsState, StoreInterface> = {
  [SettingsActions.DISPATCH_VALUE] ({ commit }, payload: Parameters<Commit>) {
    commit(...payload)
  }
}

export default actions
