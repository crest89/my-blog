<template>
    <section class="index">
      <card
        v-for="post in posts"
         v-bind:key="post.fields.slug"
        :title="post.fields.title"
        :slug="post.fields.slug"
        :createAt="post.fields.createAt"
      />
    </section>
</template>

<script>
import Card from '~/components/card.vue'
import {createClient} from '~/plugins/contentful.js'

const client = createClient()
export default {
  transition: 'slide-left',
  components: {
    Card
  },
  async asyncData ({ env, params }) {
    return await client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.createAt'
    }).then(entries => {
      return {
        posts: entries.items
      }
    })
    .catch(console.error)
  }
}
</script>
