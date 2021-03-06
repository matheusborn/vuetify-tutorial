import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  iconfont: "mdi",

  theme: {
    themes: {
      light: {
        primary: "#9952ff",
        success: "#3cd1c2",
        info: "#ffaa2c",
        error: "#f83e70",
      },
      dark: {
        primary: "#9952ff",
        success: "#3cd1c2",
        info: "#ffaa2c",
        error: "#f83e70",
      },
    },
  },
});
