import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: 'overview',
    children: [
      {
        name: 'overview',
        path: 'overview',
        component: () => import('pages/Overview.vue'),
        meta: {
          title: 'page.overview'
        }
      },
      {
        name: 'cars',
        path: 'cars',
        components: {
          default: () => import('pages/Cars.vue'),
          toolbar: () => import('components/toolbar/CarsActions.vue')
        },
        meta: {
          title: 'page.cars'
        }
      },
      {
        name: 'car',
        path: 'car/:id',
        components: {
          default: () => import('pages/Car.vue'),
          toolbar: () => import('components/toolbar/CarActions.vue')
        },
        meta: {
          title: 'page.cars'
        }
      },
      {
        name: 'gas-stations',
        path: 'gas-stations',
        components: {
          default: () => import('pages/Stations.vue'),
          toolbar: () => import('components/toolbar/StationsActions.vue')
        },
        meta: {
          title: 'page.gas-stations'
        }
      },
      {
        name: 'gas-station',
        path: 'gas-station/:id',
        components: {
          default: () => import('pages/Station.vue'),
          toolbar: () => import('components/toolbar/StationActions.vue')
        },
        meta: {
          title: 'page.gas-stations'
        }
      }
    ]
  },
  {
    name: '404',
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
