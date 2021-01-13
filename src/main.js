import Vue from "vue";
import App from "./App.vue";
import router from "@/router/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBell,
  faSearch,
  faSortDown,
  faPlay,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

library.add(faBell, faSearch, faSortDown, faPlay, faPlus);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");

//  <font-awesome-icon class="icons" icon="search" />;
