import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home";
import DetailImage from "@/pages/DetailImage";
import ListImageUser from "@/pages/ListImageUser";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/photos/:id",
      name: "detailimage",
      component: DetailImage
    },
    {
      path: "/users/:username",
      name: "listimageuser",
      component: ListImageUser
    }
  ]
});
