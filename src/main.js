import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import MoreProducts from "./components/MoreProducts.vue";
import Ads from "./components/Ads.vue";

import "./assets/styles/main.scss";

const app = createApp(App);
app.component("MoreProducts", MoreProducts);
app.component("Ads", Ads);
app.use(router);

app.mount("#app");
