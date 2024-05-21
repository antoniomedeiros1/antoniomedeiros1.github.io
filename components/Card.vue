<script setup>

const props = defineProps({
  title: String,
  descricao: String,
  url: String,
  tags: Array,
  allTags: Object,
})

</script>

<template>
  <a :href=url target="_blank" class="group">
    <div class=" my-4 rounded-lg border w-full border-gray-200 dark:border-gray-600 
                  group-hover:shadow-lg group-hover:border-gray-300 dark:group-hover:border-gray-500 
                  transition ease-in-out bg-gray-50 bg-opacity-10 group-hover:bg-opacity-40
                  dark:bg-gray-900 dark:bg-opacity-10">
      <div class=" p-4">
        <h1 class=" text-lg text-gray-500 group-hover:text-gray-600 
                          dark:text-gray-400 dark:group-hover:text-gray-100 font-bold transition ease-in-out">
          {{ title }}
        </h1>
        <p class=" py-2 text-gray-500 group-hover:text-gray-600 
                      dark:text-gray-400 dark:group-hover:text-gray-300 transition ease-in-out">
          {{ descricao }}
        </p>
        <div class=" flex flex-wrap mt-2">
          <TagButton v-for="tag in tags" :tag="tag" :isSelected="allTags[tag]"
            @select-tag="$emit('select-tag', tag)" />
        </div>
      </div>
    </div>
  </a>
</template>