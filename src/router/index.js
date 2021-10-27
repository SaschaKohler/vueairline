import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/airlines",
    name: "airlines",
    component: () =>
        import("../views/Airlines.vue"),
  },
  {
    path: "/create-airline",
    name: "createAirline",
    component: () =>
        import("../views/createAirline.vue"),
  },
  {
    path:"/airlines/:id",
    name: "editAirline",
    component: () => import('../components/editAirline.vue'),
  },
  {
    path:"/passengers/:id",
    name: "passengerList",
    component: () => import('../views/Passengers.vue'),
  }


];

const router = new VueRouter({
  mode:'history',
  routes,
});

export default router;
