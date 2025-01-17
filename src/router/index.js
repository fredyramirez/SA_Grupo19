import Vue from 'vue';
import VueRouter from 'vue-router';
import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils';
import { canNavigate } from '@/libs/acl/routeProtection';
import pages from './routes/pages';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Inicio',
        resource: 'ANY',
        action: 'manage',
        breadcrumb: [
          {
            text: 'Inicio',
            active: true,
          },
        ],
      },
    },
    ...pages,
    {
      path: '*',
      redirect: 'error-404',
    },
    {
      path: '/cuenta',
      name: 'pages-account-setting',
      component: () => import('@/views/pages/account-setting/AccountSetting.vue'),
      meta: {
        pageTitle: 'Account Settings',
        breadcrumb: [
          {
            text: 'Pages',
          },
          {
            text: 'Perfil de Usuario',
            active: true,
          },
        ],
      },
    },
  ],
});

router.beforeEach((to, _, next) => {
  const isLoggedIn = isUserLoggedIn();

  if (!canNavigate(to)) {
    // Redirect to login if not logged in
    if (!isLoggedIn) return next({ name: 'auth-login' });

    // If logged in => not authorized
    return next({ name: 'misc-not-authorized' });
  }

  // Redirect if logged in
  if (to.meta.redirectIfLoggedIn && isLoggedIn) {
    const userData = getUserData();
    next(getHomeRouteForLoggedInUser(userData ? userData.role : null));
  }

  return next();
});

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg');
  if (appLoading) {
    appLoading.style.display = 'none';
  }
});

export default router;
