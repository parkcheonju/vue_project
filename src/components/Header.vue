<template>
  <nav class="navbar navbar-expand-lg flex-column bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" href="#">춘복식당</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">로그인</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      activeTab: "",
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style>
</style>
