<template>
  {{$route.params.id}}
 <div class="container my-5">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <img :src="recipe[$route.params.id].image" class="card-img-top" alt="Recipe Image">
          <div class="card-body">
            <h5 class="card-title">{{ recipe[$route.params.id].title }}</h5>
            <p class="card-text">{{ recipe[$route.params.id].description }}</p>
            <p class="card-text"><small class="text-muted">{{ recipe[$route.params.id].date }}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "AppDetail",
  props: {
    recipe: Array,
  },
};
</script>

<style></style>
