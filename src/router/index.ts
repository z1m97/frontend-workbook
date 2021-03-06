import pageRoutes from 'pages-generated'
import type { RouterScrollBehavior, RouteRecordRaw } from 'vue-router'
import type { RouterOptions } from 'vite-ssg'

const setAlias = (route: RouteRecordRaw) => ({
  ...route,
  // alias: route.path.endsWith('/') ? `${route.path}index.html` : `${route.path}.html`,
})

const PAGE_NOT_FOUND: RouteRecordRaw = {
  name: 'NotFound',
  path: '/:pathMatch(.*)*',
  component: () => import('~/components/error.vue'),
}

const routes: RouteRecordRaw[] = [...pageRoutes.map(setAlias), PAGE_NOT_FOUND]

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) return savedPosition
  else return { top: 0 }
}

export const routerOptions: RouterOptions = {
  routes,
  scrollBehavior,
}
