import Vue from "vue";
import Router from "vue-router";

import Home from "./../views/AppHome";
import Login from "./../views/AppLogin";
import Cadastro from "./../views/AppCadastro";
import Inicio from "./../views/AppPageInit";
import Error from "./../views/App404";
Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home,
    },
    {
      name: "Login",
      path: "/login",
      component: Login,
    },
    {
      name: "Cadastro",
      path: "/Cadastro",
      component: Cadastro,
    },
    {
      name: "Page-Inicial",
      path: "/Inicio",
      component: Inicio,
    },
    {
      path: "*",
      component: Error,
    },
  ],
});
