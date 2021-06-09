<template>
  <article class="card">
    <nuxt-link v-bind:to="{ name: 'blog-slug', params: { slug: slug }}" class="wrapper">
      <img class="card_image" v-bind:src="headerimage.fields.file.url"/>
      <h1 class="card_title">{{ title }}</h1>
      <p class="card_date">{{ (new Date(create_at)).toLocaleDateString() }}</p>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: ['title', 'slug', 'headerimage', 'create_at']
}
</script>
