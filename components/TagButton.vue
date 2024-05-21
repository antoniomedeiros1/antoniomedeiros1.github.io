<script setup>

const props = defineProps({
  tag: String,
  isSelected: Boolean
})

</script>

<template>
  <button class="bg-transparent text-gray-400 border-gray-400 mr-2 mt-1
                py-1 px-4 border hover:text-purple-600 hover:border-purple-600
                dark:text-gray-500 dark:border-gray-500 dark:hover:text-purple-500 dark:hover:border-purple-500
                rounded-full transition ease-in-out" :class="{ 'text-purple-500 border-purple-500': isSelected }"
    @click.prevent="$emit('select-tag')">
    {{ tag }}
  </button>
</template>