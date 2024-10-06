import { createRouter, createWebHistory } from 'vue-router'
import AdminSignIn from '@/views/AdminSignIn.vue'
import ViewReviewers from '@/views/ViewReviewers.vue'
import ViewApplicants from '@/views/ViewApplicants.vue'
import AdminMessages from '@/views/AdminMessages.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'adminSignIn',
      component: AdminSignIn,
      meta: {
        authenticated: false
      }
    },
    {
      path: '/reviewers',
      name: 'reviewers',
      component: ViewReviewers,
      meta: {
        authenticated: true
      }
    },
    {
      path: '/applicants',
      name: 'applicants',
      component: ViewApplicants
    },
    {
      path: '/messages/:id-:first-:last',
      name: 'adminMessages',
      component: AdminMessages,
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'pageNotFound',
      component: PageNotFound
    }
  ]
})

router.beforeEach((to) => {
  // if (to.meta.authenticated && !authenticated) {
  //   return { name: 'adminSignIn'}
  // }
  // if (!to.meta.authenticated && authenticated()) {
  //   return { name: 'adminHome'}
  // }
})

export default router
