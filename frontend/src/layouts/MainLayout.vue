<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          @click="leftDrawerOpen = !leftDrawerOpen"
          :aria-label="$t($route.meta.title)"
          icon="menu"
        ></q-btn>
        <q-toolbar-title>{{ $t($route.meta.title) }}</q-toolbar-title>
        <router-view name="toolbar"></router-view>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" :width="300">
      <q-list style="height: calc(100% - 150px); margin-top: 150px;">
        <q-item clickable tag="a" exact to="/overview">
          <q-item-section avatar>
            <q-icon name="fa fa-list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t("page.overview") }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" exact to="/cars">
          <q-item-section avatar>
            <q-icon name="fa fa-car" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t("page.cars") }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" exact to="/gas-stations">
          <q-item-section avatar>
            <q-icon name="fa fa-gas-pump" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t("page.gas-stations") }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" exact @click="openSettings">
          <q-item-section avatar>
            <q-icon name="fa fa-cog" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t("page.settings") }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px"></q-img>
    </q-drawer>

    <q-page-container v-if="!pending">
      <div class="q-pa-md">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { LeftDrawerOpenMixin } from '../mixins/settings'
import Settings from '../dialogs/Settings.vue'
import Component, { mixins } from 'vue-class-component'
import Car from 'src/store/models/Car'
import GasStation from 'src/store/models/GasStation'
import Refill from 'src/store/models/Refill'

@Component
export default class MainLayout extends mixins(LeftDrawerOpenMixin) {
  pending = true

  mounted () {
    const fetch = [Car.fetch(), GasStation.fetch(), Refill.fetch()]
    Promise.all(fetch).finally(() => {
      this.pending = false
    })
  }

  openSettings () {
    this.$q.dialog({
      component: Settings,
      parent: this
    })
  }
}
</script>
