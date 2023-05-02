<template>
  <!-- head -->
  <nav class="navbar navbar-expand-lg flex-column bg-light">
    <div class="inner">
      <div class="container-fluid d-flex justify-content-between">
        <router-link to="/"><h5>춘복식당</h5></router-link>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">로그인</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="inner">
    <router-view :recipe="recipe"></router-view>
    <!-- <Main :recipe="recipe" /> -->
  </div>
  <!-- footer -->
  <footer class="bg-dark text-light">
    <div class="container py-3 inner">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <p>춘복식당 프로젝트</p>
        </div>
        <div class="col-12 text-center">
          <p>&copy; 2023 by My Site. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
// import Main from "./components/Main.vue";
import recipe from "./assets/recipe.js";
export default {
  name: "App",
  data() {
    return {
      recipe: recipe,
    };
  },
  // components: {
  //   Main: Main,
  // },
};
</script>

<style>
.inner {
  width: 768px;
  margin: 0 auto;
}
</style>
