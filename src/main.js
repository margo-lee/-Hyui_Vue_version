import { createApp } from "vue";
import App from "./Appcopy.vue";
//import App from "./AppComponent.vue";
import router from "./router";

createApp(App)
  .use(router)
  .mount("#app");
