// vuex-shim.d.ts
import { Item } from '@vuex-orm/core'
import { Store } from 'vuex'
import { StoreInterface } from '.'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<StoreInterface>;
  }
}

declare module '@vuex-orm/core' {
  namespace Model {
    export function fetch<T>(this: T, params?: unknown):Promise<unknown>
  }

  interface Model {
    $destroy<T extends Model>(this: T):Promise<Item<this>>
    $deleteAndDestroy<T extends Model>(this: T):Promise<Item<this>>
    $push<T extends Model>(this: T):Promise<Item<this>>
  }
}
