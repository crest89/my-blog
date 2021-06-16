<template>
  <section class="slug">
    <h1 class="slug_title">{{ post.fields.title }}</h1>
    <p class="slug_date">
      {{ (new Date(post.fields.createAt)).toLocaleDateString() }}
    </p>
    <vue-markdown class="blog">{{post.fields.body}}</vue-markdown>
  </section>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import {createClient} from '~/plugins/contentful.js'

const client = createClient()
export default {
  transition: 'slide-left',
  components: {
    VueMarkdown
  },
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.slug': params.slug,
      order: '-sys.updatedAt'
    }).then(entries => {
      return {
        post: entries.items[0],
      }
    })
    .catch(console.error)
  }
}
</script>

<style  scoped>
  .slug {
    width: 80%;
    height: 100vh;
    margin: 0 auto;
  }
  h1 {
    font-size: 300%;
    margin: 10px;
  }
  p{
    display: flex;
    justify-content: flex-end;
  }
  .blog {
    padding-top: 5vh;
    width: 80%;
    margin: 0 auto;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 200%;
    -webkit-font-smoothing: antialiased;
  }
</style>
