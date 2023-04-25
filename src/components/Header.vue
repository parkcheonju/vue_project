<template>
  <nav class="navbar navbar-expand-lg flex-column bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">춘복식당</a>
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
    <div class="container-fluid mt-3">
      <ul class="nav nav-pills nav-fill w-100">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">최신순</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">한식</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">양식</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">일식</a>
        </li>
      </ul>
    </div>
    <div class="container-fluid mt-3">
      <form class="d-flex w-100">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style></style>
