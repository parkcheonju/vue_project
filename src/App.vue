<template>
  <div class="inner">
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/Header.vue";
import AppMain from "./components/Main.vue";
import AppFooter from "./components/Footer.vue";
export default {
  name: "App",
  components: { AppHeader, AppMain, AppFooter },
};
</script>

<style>
body {
  background-color: rgb(240, 240, 240);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.inner {
  width: 768px;
  margin: 0 auto;
}
</style>
