import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n.js";
import VueApexCharts from "vue3-apexcharts";
import { registerPlugins } from "@/plugins";

const app = createApp(App);

app.use(i18n);
app.use(router);
registerPlugins(app);

app.component("apexchart", VueApexCharts); // ここを修正
app.mount("#app");
