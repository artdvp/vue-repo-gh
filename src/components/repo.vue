<template lang="html">
  <router-link v-if="data" :to="{ name: 'repoDetail', params: { username: data.full_name }}" class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img v-if="data.owner" :src="data.owner.avatar_url" alt="image">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ data.full_name }}</strong>
            <small>{{ data.language }}</small>
            <small v-if="data.created_at">{{ data.created_at }}</small>
            <br>
            {{ data.description }}
            </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a href="" class="level-item">
              <span class="icon is-small"></span><i class="fa fa-reply"></i>
            </a>
            <a href="" class="level-item">
              <span class="icon is-small"></span><i class="fa fa-retweet"></i>
            </a>
            <a href="" class="level-item">
              <span class="icon is-small"></span><i class="fa fa-heart"></i>
            </a>
        </div>
        </nav>
      </div>
    </article>
    <nav class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Stars</p>
          <p class="title">{{ data.stargazers_count }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Open Issue</p>
          <p class="title">{{ data.open_issues }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Forks</p>
          <p class="title">{{ data.forks_count }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Subscribers</p>
          <p class="title">{{ data.subscribers_count }}</p>
        </div>
      </div>
    </nav>
  </router-link>
</template>

<script>
import { fetchGithubRepo } from '@/api/'
export default {
  props: ['repoName'],
  data () {
    return {
      data: {}
    }
  },

  created () {
    fetchGithubRepo(this.repoName).then((res) => {
      console.log(res)
      this.data = res.data
    })
  }
}
</script>

<style lang="css">
</style>
