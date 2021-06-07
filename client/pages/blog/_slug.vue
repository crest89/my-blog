<template>
  <section class="slug">
    <h1 class="slug-title">
      {{ article.fields.title }}
    </h1>
    <p class="slug_date">{{ article.sys.date }}</p>
    <div>{{ article.fields.body.content[0].content[0].value }}</div>
  </section>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  transition: 'slide-right',
  async asynsData({ env, parms }) {
    return await client
      .getEntry(parms.sys)
      .then(entrie => {
        return {
          article: entrie
        }
      })
      .catch(console.error)
  }
}
</script>
