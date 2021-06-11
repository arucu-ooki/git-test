<template>
  <div class="container">
    <h1>a-ooki develop</h1>
    <ul>
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/${content.id}`">
          {{ content.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      'https://ooki-develop.microcms.io/api/v1/blog',
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-API-KEY': 'c33e8e02-3e64-4aaf-913d-8750ad64f0e6' }
      }
    )
    console.log(data)
    return data
  }
}
// export default {
//   async fetch({store}) {
//     let { data } = await axios.get(
//       // your-service-id部分は自分のサービスidに置き換えてください
//       'https://ooki-develop.microcms.io/api/v1/blog',
//       {
//         // your-api-key部分は自分のapi-keyに置き換えてください
//         headers: { 'X-API-KEY': 'c33e8e02-3e64-4aaf-913d-8750ad64f0e6' }
//       }
//     )
//     store.commit('setBlog', data)
//   },
//   computed: mapState(['blog']),
// }
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}


</style>
