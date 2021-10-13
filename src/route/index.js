import { createRouter, createWebHistory } from "vue-router";
import Members from "../components/home/Members.vue";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "Members",
    component: Members,
  },
  {
    path: "/",
    name: "Members",
    component: Members,
  },
  {
    path: "/Memberdetails/:id",
    name: "Memberdetails",
    component: () =>
      import(
        /*webpackChunkName="Details"*/ "@/components/home/Memberdetails.vue"
      ),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
