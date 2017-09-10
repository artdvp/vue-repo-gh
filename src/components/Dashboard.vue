<template>
    <section class="section">
        <h1 class="title is-1">List Poppular Repo</h1>
        <h2 class="subtitle is-3">Find some Repo</h2>

        <div class="column is-multilline is-tablet">
          <div class="column is-12-tablet">
            <repo repoName="vuejs/vue"></repo>
          </div>
        </div>
        <div class="column is-multilline is-tablet">
          <div class="column is-12-tablet">
            <repo repoName="facebook/react"></repo>
          </div>
        </div>
        <div class="column is-multilline is-tablet">
          <div class="column is-12-tablet">
            <repo repoName="angular/angular"></repo>
          </div>
        </div>
    </section>
</template>

<script>
import Repo from '@/components/repo'

export default {
  components: {
    Repo
  }
}
</script>

<style lang="css">

</style>
