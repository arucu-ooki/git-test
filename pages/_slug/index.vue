<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
    <p class="publishedAt">{{ publishedAt }}</p>
    <div class="post" v-html="body.replace(/\n/g,'<br/>')"></div>
    <!-- <p>test　投稿{{ json }}</p> -->
  </main>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  // computed: {
  //   ...mapState(['blog']),
  //   json(){
  //     // console.log(this.blog.contents, this.$route.params.slug)
  //     const result = this.blog.contents.filter(x => x.id === this.$route.params.slug)
  //     return result[0]
  //   }
  // },
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://ooki-develop.microcms.io/api/v1/blog/${params.slug}`,
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-API-KEY': 'c33e8e02-3e64-4aaf-913d-8750ad64f0e6' }
      }
    )
    return data
  }
}
</script>