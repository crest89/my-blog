<template>
  <article class="card">
    <nuxt-link v-bind:to="{ name: 'blog-slug', params: { slug: slug }}" class="wrapper">
      <h1 class="card_title">{{ title }}</h1>
      <p class="card_date">{{ (new Date(createAt)).toLocaleDateString() }}</p>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: ['title', 'slug', 'createAt']
}
</script>

<style scoped>
  .card{
    width: 100%;
    height: 30vh;
    margin: 0 auto;
  }
  h1 {
    font-size: 40px;
    padding-bottom: 10px;
  }
</style>
