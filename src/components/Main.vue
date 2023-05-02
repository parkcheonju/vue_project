<template>
<router-link to="/detail">
<div class="card mt-3 mb-3" v-for="(card, index) in recipe" :key="index">
    <div class="row g-0">
      <div class="col-4">
        <img :src="card.image" class="img-fluid rounded-start" alt="..." />
      </div>
      <div class="col-8">
        <div class="card-body">
          <h5 class="card-title">{{ card.title }}</h5>
          <p class="card-text">{{ card.description }}</p>
          <p class="card-text">
            <small class="text-muted">{{ card.date }}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</router-link>
</template>

<script>
export default {
  name: "AppMain",
  props : {
    recipe : Array,
  }
};
</script>

<style></style>
