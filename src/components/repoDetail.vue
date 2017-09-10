<template lang="html">
  <section class="section">
    <h1 class="title is-1 has-text-centered">
      {{repoName}}
    </h1>
    <div class="columns is-multiline">
      <div class="column is-3" v-if="listSubscribers" v-for="user in listSubscribers">
        <repoList :user="user" :key="user.id"></repoList>
      </div>
    </div>
  </section>
</template>

<script>
import { fetchGithubSubscribers } from '@/api/'
import repoList from './repoList'
export default {
  components: {
    repoList
  },
  data () {
    return {
      repoName: this.$route.params.username,
      listSubscribers: null
    }
  },
  created () {
    fetchGithubSubscribers(this.repoName).then((response) => {
      console.log(response)
      this.listSubscribers = response.data
    })
  }
}
</script>

<style lang="css">
</style>
