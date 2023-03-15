import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueCookies from "vue-cookies";
import MoreProducts from "./components/MoreProducts.vue";
import Ads from "./components/Ads.vue";
import axios from "axios";

import "./assets/styles/main.scss";

axios.defaults.baseURL = "http://localhost:3000/"; //todo: change to production url
// axios.defaults.headers.common["Authorization"] = **token**;

const app = createApp(App);
app.component("MoreProducts", MoreProducts);
app.component("Ads", Ads);
app.use(router);
app.use(VueCookies);
app.config.globalProperties.$cookies = VueCookies;

app.mount("#app");
