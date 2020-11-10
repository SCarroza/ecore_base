//TODO: Mejorar lógica para usar rutas Child.
const paths = [
  {
    path: '*',
    name: 'not-found',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    view: 'Login'
  },
  {
    path: '/',
    name: 'Dahboard',
    view: 'Dashboard',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/caja',
    name: 'Caja',
    view: 'Caja',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/comandas',
    name: 'Comandas',
    view: 'Comandas',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/cuadrar-caja',
    name: 'CuadrarCaja',
    view: 'CuadrarCaja',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/test',
    name: 'Test',
    view: 'Test'
  }
]

export default paths