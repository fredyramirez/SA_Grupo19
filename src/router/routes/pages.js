export default [
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/error/Error404.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      action: 'read',
    },
  },
  {
    path: '/login',
    name: 'auth-login',
    component: () => import('@/views/pages/authentication/Login.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      redirectIfLoggedIn: true,
    },
  },
  {
    path: '/registro',
    name: 'auth-register',
    component: () => import('@/views/pages/authentication/Register.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      redirectIfLoggedIn: true,
    },
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/pages/user/users-list/UsersList.vue'),
    meta: {
      pageTitle: 'Usuarios',
      resource: 'ADMIN',
      action: 'manage',
      breadcrumb: [
        {
          text: 'Usuarios',
          active: true,
        },
      ],
    },
  },
  {
    path: '/user/edit/:id',
    name: 'apps-users-edit',
    component: () => import('@/views/pages/user/users-edit/UsersEdit.vue'),
    meta: {
      pageTitle: 'Editar Usuario',
      resource: 'ADMIN',
      action: 'manage',
      breadcrumb: [
        {
          text: 'Editar Usuario',
          active: true,
        },
      ],
    },
  },
  {
    path: '/ForgotPassword',
    name: 'auth-forgot-password-v1',
    component: () => import('@/views/ForgotPassword-v2.vue'),
  },
  {
    path: '/libro',
    name: 'book',
    component: () => import('@/views/pages/libros/Books.vue'),
    meta: {
      pageTitle: 'Libros',
      resource: 'EDITORIAL',
      action: 'manage',
      breadcrumb: [
        {
          text: 'Libros',
          active: true,
        },
      ],
    },
  },
  {
    path: '/book/edit/:id',
    name: 'apps-books-edit',
    component: () => import('@/views/pages/libros/libros-edit/BooksEdit.vue'),
    meta: {
      pageTitle: 'Editar Libro',
      resource: 'EDITORIAL',
      breadcrumb: [
        {
          text: 'Editar Libro',
          active: true,
        },
      ],
    },
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('@/views/pages/shop/ECommerceShop.vue'),
    meta: {
      contentRenderer: 'sidebar-left-detached',
      contentClass: 'ecommerce-application',
      pageTitle: 'Compras',
      resource: 'CLIENTE',
      breadcrumb: [
        {
          text: 'Compras',
        },
        {
          text: 'Tienda',
          active: true,
        },
      ],
    },
  },
  {
    path: '/shop/details/:slug',
    name: 'apps-e-commerce-product-details',
    component: () => import('@/views/pages/shop/e-commerce-product-details/ECommerceProductDetails.vue'),
    meta: {
      pageTitle: 'Detalles del Libro',
      contentClass: 'ecommerce-application',
      resource: 'CLIENTE',
      breadcrumb: [
        {
          text: 'Tienda',
          active: true,
          name: 'shop',
        },
        {
          text: 'Detalles del Libro',
          active: true,
        },
      ],
    },
  },
  {
    path: '/checkout',
    name: 'apps-e-commerce-checkout',
    component: () => import('@/views/pages/shop/e-commerce-checkout/ECommerceCheckout.vue'),
    meta: {
      pageTitle: 'Checkout',
      contentClass: 'ecommerce-application',
      resource: 'CLIENTE',
      breadcrumb: [
        {
          text: 'ECommerce',
        },
        {
          text: 'Checkout',
          active: true,
        },
      ],
    },
  },
  {
    path: '/not-authorized',
    name: 'misc-not-authorized',
    component: () => import('@/views/NotAutorized.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
    },
  },
];
