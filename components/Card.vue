<script setup>

const props = defineProps({
  title: String,
  descricao: String,
  url: String,
  tags: Array,
})

</script>

<template>
    <div class=" my-4 rounded-lg border w-full border-gray-300 dark:border-gray-600">
        <div class=" p-4">
            <h1 class=" text-lg text-gray-600 dark:text-gray-100 font-bold">{{title}}</h1>
            <p class=" py-2 text-gray-600 dark:text-gray-400">
                {{descricao}}
            </p>
            <a :href=url class=" text-blue-500">{{url}}</a>
            <div class=" flex flex-wrap mt-2">
                <button 
                    class="bg-transparent text-purple-500 mr-2 mt-1
                            py-1 px-4 border border-purple-500 rounded-full"
                    v-for="tag in tags"
                >
                    {{tag}}
                </button>
            </div>
        </div>
    </div>
</template>