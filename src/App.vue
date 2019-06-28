<template>
  <div id="app">
    <h2>Simple</h2>
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
    <h2>Row Reverse</h2>
    <GridRow :gutter-x="15" :reverse="true">
      <GridCol :span="3">
        <div style="background-color: #ff9ff3">1</div>
      </GridCol>
      <GridCol :span="3">
        <div style="background-color: #feca57">2</div>
      </GridCol>
      <GridCol :span="3">
        <div style="background-color: #ff6b6b">3</div>
      </GridCol>
      <GridCol :span="3">
        <div style="background-color: #48dbfb">4</div>
      </GridCol>
    </GridRow>
    <h2>Col</h2>
    <GridRow :gutter-x="15" direction="column" style="width: 300px; height: 200px">
      <GridCol :span="3">
        <div style="background-color: #ff9ff3">1</div>
      </GridCol>
      <GridCol :span="3">
        <div style="background-color: #feca57">2</div>
      </GridCol>
      <GridCol :span="3">
        <div style="background-color: #ff6b6b">3</div>
      </GridCol>
      <GridCol :span="3">
        <div style="background-color: #48dbfb">4</div>
      </GridCol>
    </GridRow>
    <h2>Offset</h2>
    <GridRow :gutter-x="15">
      <GridCol :span="3">
        <div style="background-color: #ff9ff3">3</div>
      </GridCol>
      <GridCol :span="3" :offset="3">
        <div style="background-color: #feca57">3 offset-3</div>
      </GridCol>
      <GridCol :span="3">
        <div style="background-color: #ff6b6b">3</div>
      </GridCol>
    </GridRow>
    <h2>Pull</h2>
    <GridRow :gutter-x="15">
      <GridCol :span="3">
        <div style="background-color: #ff9ff3">3</div>
      </GridCol>
      <GridCol :span="3" :pull="1">
        <div style="background-color: #feca57">3 pull-1</div>
      </GridCol>
      <GridCol :span="3">
        <div style="background-color: #ff6b6b">3</div>
      </GridCol>
    </GridRow>
    <h2>Push</h2>
    <GridRow :gutter-x="15">
      <GridCol :span="3">
        <div style="background-color: #ff9ff3">3</div>
      </GridCol>
      <GridCol :span="3" :push="1">
        <div style="background-color: #feca57">3 push-1</div>
      </GridCol>
      <GridCol :span="3">
        <div style="background-color: #ff6b6b">3</div>
      </GridCol>
    </GridRow>
    <h2>Order</h2>
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
}
</style>
