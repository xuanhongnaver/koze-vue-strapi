import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import Toaster from "@meforma/vue-toaster";
import AOS from "aos";
import "aos/dist/aos.css";

import "./assets/custom.scss";

const app = createApp(App).use(router).use(Toaster).use(store);
app.use(VueAxios, axios);
app.use(AOS.init).mount("#app");
