<template>
  <div class="v-grid-row" :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GridRow",
  props: {
    gutterX: {
      type: Number
    },
    gutterY: {
      type: Number
    },
    justify: {
      type: String,
      default: "left",
      validator: function(value) {
        return (
          ["left", "right", "center", "around", "between"].indexOf(value) !== -1
        );
      }
    },
    align: {
      type: String,
      default: "top",
      validator: function(value) {
        return ["top", "middle", "bottom"].indexOf(value) !== -1;
      }
    },
    stretch: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {};
  },

  computed: {
    classes() {
      return {
        [`v-grid-row--justify-${this.justify}`]: this.justify,
        [`v-grid-row--align-${this.align}`]: this.align,
        ["v-grid-row--stretch"]: this.stretch
      };
    },

    styles() {
      let result = {};

      if (this.gutterX !== 0) {
        result["margin-left"] = `${-this.gutterX / 2}px`;
        result["margin-right"] = `${-this.gutterX / 2}px`;
      }

      if (this.gutterY !== 0) {
        result["margin-top"] = `${-this.gutterY / 2}px`;
        result["margin-bottom"] = `${-this.gutterY / 2}px`;
      }

      return result;
    }
  },
  watch: {
    gutterX() {
      this.updateGutter();
    },
    gutterY() {
      this.updateGutter();
    }
  },
  methods: {
    updateGutter() {
      this.$children.forEach(children => {
        let componentName = children.$options.name;
        if (componentName === "GridCol") {
          children.gutterX = this.gutterX;
          children.gutterY = this.gutterY;
        }
      });
    }
  }
};
</script>
