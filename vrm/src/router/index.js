import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/login",
    name: "login",
    meta: {
      needsUser: false,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LogIn.vue"),
  },
  {
    path: "/registracija",
    name: "registracija",
    meta: {
      needsUser: false,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Registracija.vue"),
  },
  {
    path: "/dodaj_objekt",
    name: "dodaj_objekt",
    meta: {
      needsUser: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dodavanje objekta.vue"),
  },
  {
    path: "/dodaj_pers",
    name: "dodaj_pers",
    meta: {
      needsUser: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Dodavanje personala.vue"
      ),
  },
  {
    path: "/nova_rez",
    name: "nova_rez",
    meta: {
      needsUser: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Nova rezervacija.vue"),
  },
  {
    path: "/moji_objekti",
    name: "moji_objekti",
    meta: {
      needsUser: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Moji objekti.vue"),
  },
  {
    path: "/personal",
    name: "perosnal",
    meta: {
      needsUser: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Personal.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const nemaKorisnika = store.korisnik === null;

  if (nemaKorisnika && to.meta.needsUser) {
    next("login");
  } else {
    next();
  }
});

export default router;
