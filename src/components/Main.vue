<template>
  <div>
    <div class="card mt-3 mb-3" v-for="(card, index) in cards" :key="index">
      <div class="row g-0">
        <div class="col-4">
          <img :src="card.image" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-8">
          <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text">{{ card.description }}</p>
            <p class="card-text"><small class="text-muted">{{ card.date }}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppMain",
  data() {
    return {
      cards: [
        {
          image: 'http://placeimg.com/200/200/any',
          title: 'Card 1',
          description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          date: 'Last updated 3 mins ago',
        },
        {
          image: 'http://placeimg.com/200/200/nature',
          title: 'Card 2',
          description: 'This card has different image and description.',
          date: 'Last updated 5 mins ago',
        },
      ],
    };
  },
};
</script>

<style></style>
