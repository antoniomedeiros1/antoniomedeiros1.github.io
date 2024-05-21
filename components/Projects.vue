<script setup>

const props = defineProps({
  lang: Number,
  repos: Array,
  repo_data: Array
})


</script>

<template>
  <div class=" mx-4 my-5 lg:mr-16 lg:ml-10 lg:my-10">
    <h1 v-if="lang === 0" class=" text-2xl text-gray-700 dark:text-gray-100 font-bold">Projetos 🛠️</h1>
    <h1 v-else class=" text-2xl text-gray-700 dark:text-gray-100 font-bold">Projects 🛠️</h1>
    <Card
      v-for="repo in repo_data"
      :title="repo.name"
      :descricao="repo.description"
      :url="repo.html_url"
      :tags="repo.topics" 
      class=" transition-transform transform"
    />
  </div>
</template>