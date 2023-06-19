import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard, authSettled } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/profile/:profileId',
    name: 'Profile',
    component: loadPage('ProfilePage'),
    beforeEnter: authSettled
  },
  {
    path: '/trailer',
    name: 'Trailer',
    component: loadPage('TrailerArrayPage'),
    // beforeEnter: authSettled 
  },
  {
    path: '/trailer/:trailerId',
    name: 'ActiveTrailer',
    component: loadPage('ActiveTrailerPage'),
    beforeEnter: authSettled
  }, 
  {
    path: '/mytrailers',
    name: 'MyTrailers',
    component: loadPage('MyTrailersPage'),
    beforeEnter: authGuard
  },
  {
    path: '/terms',
    name: 'Terms',
    component: loadPage('TermsPage'),
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
