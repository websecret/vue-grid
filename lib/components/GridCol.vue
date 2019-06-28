<template>
  <div class="v-grid-col" :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
import _upperFirst from "lodash/upperFirst";

const values = ["span", "order", "offset", "push", "pull"];
const sizes = ["s", "m", "l", "xl", "xxl"];
const props = {};

values.forEach(value => {
  sizes.forEach(size => {
    props[`${value}-${size}`] = { type: Number };
  });
});

export default {
  name: "GridCol",

  props: {
    span: { type: Number },
    order: { type: Number },
    offset: { type: Number },
    push: { type: Number },
    pull: { type: Number },
    ...props
  },

  data() {
    return {
      gutterX: 0,
      gutterY: 0
    };
  },

  computed: {
    classes() {
      const list = {};
      values.forEach(value => {
        list[`v-grid-col--${value}-${this[value]}`] = this[value];
        sizes.forEach(size => {
          const sizeValue = this[`${value}${_upperFirst(size)}`];
          list[`v-grid-col--${value}-${size}-${sizeValue}`] = sizeValue;
        });
      });
      return list;
    },

    styles() {
      let colStyle = {};

      if (this.gutterX !== 0) {
        colStyle["padding-left"] = `${this.gutterX / 2}px`;
        colStyle["padding-right"] = `${this.gutterX / 2}px`;
      }

      if (this.gutterY !== 0) {
        colStyle["padding-top"] = `${this.gutterY / 2}px`;
        colStyle["padding-bottom"] = `${this.gutterY / 2}px`;
      }

      return this.order ? { ...colStyle, order: this.order } : colStyle;
    }
  },

  mounted() {
    if (this.$parent.$options.name === "GridRow") {
      this.$parent.updateGutter();
    }
  }
};
</script>
