# Vue Simple Grid system
Simplified, customizable grid system

## NPM/YARN
```
npm install --save vue-grid
yarn add vue-grid
```

## Component registration
```js
//global registration
import VueGrid from 'vue-grid'
import 'vue-grid/dist/styles.css'
Vue.use(VueGrid)

//local registration
import {GridRow, GridCol} from 'vue-grid'
//you can also import this in your style tag
import 'vue-grid/dist/styles.css'
//component code
components: {
  'grid-row': GridRow,
  'grid-col': GridCol
}
```
```html
<grid-row :gutter-x="15">
    <grid-col :span="3">First 3</grid-col>
    <grid-col :span="9">Second 9</grid-col>
</grid-row>
```

## Props

### GridRow
```js
props: {
  /**
   * Space between cols horizontally
   */
  gutterX: {
    type: Number
  },
  /**
   * Space between cols vertically
   */
  gutterY: {
    type: Number
  },
  /**
   * Align cols horizontally
   */
  justify: {
    type: String,
    default: "left",
    validator: function(value) {
      return (
        ["left", "right", "center", "around", "between"].indexOf(value) !== -1
      );
    }
  },
  /**
   * Align cols vertically
   */
  align: {
    type: String,
    default: "top",
    validator: function(value) {
      return ["top", "middle", "bottom"].indexOf(value) !== -1;
    }
  },
  /**
   * Stretch items in a row
   */
  stretch: {
    type: Boolean,
    default: false
  }
}
```

### GridCol

```js
props: {
  /**
   * Col size
   */
  span["", "-s", "-m", "-l", "-xl", "-xxl"]: {
    type: Number
  },
  /**
   * Col order
   */
  order["", "-s", "-m", "-l", "-xl", "-xxl"]: {
    type: Number
  },
  /**
   * Coll offset
   */
  offset["", "-s", "-m", "-l", "-xl", "-xxl"]: {
    type: Number
  },
  /**
   * Move right to the distance
   */
  push["", "-s", "-m", "-l", "-xl", "-xxl"]: {
    type: Number
  },
  /**
   * Move left to the distance
   */
  pull["", "-s", "-m", "-l", "-xl", "-xxl"]: {
    type: Number
  },
}
```
