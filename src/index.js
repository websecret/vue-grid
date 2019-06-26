import GridRow from "./components/GridRow";
import GridCol from "./components/GridCol";

export default {
  install(Vue) {
    Vue.component("v-grid-row", GridRow);
    Vue.component("v-grid-col", GridCol);
  }
};

export { GridRow, GridCol };
