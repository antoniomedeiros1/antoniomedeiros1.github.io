<script setup>

const props = defineProps({
  lang: Number,
})

</script>

<template>
  <div v-if="lang === 0" class=" mx-4 my-5 lg:mr-64 lg:ml-10 lg:my-10">
    <h1 class=" text-xl text-gray-700 dark:text-gray-100 font-bold">Em breve 🛠️</h1>
  </div>
  <div v-else class=" mx-4 my-5 lg:mr-64 lg:ml-10 lg:my-10">
    <h1 class=" text-xl text-gray-700 dark:text-gray-100 font-bold">Coming soon 🛠️</h1>
  </div>
</template>