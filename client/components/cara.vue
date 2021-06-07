<template>
  <nuxt-link :to="{ name: 'blog-slug', params: {sys: id}}" class="wrapper">
    <article class="card">
      <h1 class="card-title">{{ title }}</h1>
      <p class="card-text">{{ id }}</p>
      <p class="card-date">{{ date }}</p>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  porps: {
    title: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  }
}
</script>
