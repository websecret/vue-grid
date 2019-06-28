<template>
  <div id="app">
    <h2>1</h2>
    <GridRow :gutter-x="15">
      <GridCol :span="1">
        <div style="background-color: #ff9ff3">1</div>
      </GridCol>
      <GridCol :span="1">
        <div style="background-color: #feca57">1</div>
      </GridCol>
      <GridCol :span="1">
        <div style="background-color: #ff6b6b">1</div>
      </GridCol>
      <GridCol :span="1">
        <div style="background-color: #48dbfb">1</div>
      </GridCol>
      <GridCol :span="1">
        <div style="background-color: #1dd1a1">1</div>
      </GridCol>
      <GridCol :span="1">
        <div style="background-color: #f368e0">1</div>
      </GridCol>
      <GridCol :span="1">
        <div style="background-color: #54a0ff">1</div>
      </GridCol>
      <GridCol :span="1">
        <div style="background-color: #5f27cd">1</div>
      </GridCol>
      <GridCol :span="1">
        <div style="background-color: #ff9ff3">1</div>
      </GridCol>
      <GridCol :span="1">
        <div style="background-color: #feca57">1</div>
      </GridCol>
      <GridCol :span="1">
        <div style="background-color: #ff6b6b">1</div>
      </GridCol>
      <GridCol :span="1">
        <div style="background-color: #ff9ff3">1</div>
      </GridCol>
    </GridRow>
    <h2>2</h2>
    <GridRow :gutter-x="15">
      <GridCol :span="3">
        <div style="background-color: #ff9ff3">3</div>
      </GridCol>
      <GridCol :span="3" :offset="3">
        <div style="background-color: #feca57">3 offset-3</div>
      </GridCol>
    </GridRow>
    <h2>3</h2>
    <GridRow :gutter-x="15">
      <GridCol :span="3">
        <div style="background-color: #ff9ff3">3</div>
      </GridCol>
      <GridCol :span="3" :pull="1">
        <div style="background-color: #feca57">3 pull-1</div>
      </GridCol>
    </GridRow>
    <h2>4</h2>
    <GridRow :gutter-x="15">
      <GridCol :span="3">
        <div style="background-color: #ff9ff3">3</div>
      </GridCol>
      <GridCol :span="3" :push="1">
        <div style="background-color: #feca57">3 push-1</div>
      </GridCol>
    </GridRow>
    <h2>5</h2>
    <GridRow :gutter-x="15">
      <GridCol :span="3">
        <div style="background-color: #ff9ff3">3</div>
      </GridCol>
      <GridCol :span="3" :order="6">
        <div style="background-color: #feca57">3 order-6</div>
      </GridCol>
    </GridRow>
  </div>
</template>

<script>
import { GridRow, GridCol } from "../lib";
export default {
  name: "app",
  components: { GridRow, GridCol }
};
</script>

<style>
@import "../dist/styles.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
