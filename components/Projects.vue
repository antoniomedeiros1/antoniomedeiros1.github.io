<script setup>

const props = defineProps({
  lang: Number,
  repoData: Array,
  allTags: Object
})

const selectTag = (tag) => {
  props.allTags[tag] = !props.allTags[tag]
}

const clearSelectedTags = () => {
  for (const tag in props.allTags) {
    props.allTags[tag] = false
  }
}

</script>

<template>
  <div class=" mx-4 my-5 lg:mr-16 lg:ml-10 lg:my-10">
    <h1 v-if="lang === 0" class=" text-2xl text-gray-700 dark:text-gray-100 font-bold">Projetos 🛠️</h1>
    <h1 v-else class=" text-2xl text-gray-700 dark:text-gray-100 font-bold">Projects 🛠️</h1>
    <div class=" my-2 flex flex-wrap gap-2">
      <button class="bg-transparent mr-2 mt-1 py-1 px-3 
                border text-red-600 border-red-600 dark:text-red-400 dark:border-red-400
                rounded-full transition ease-in-out"
        @click.prevent="clearSelectedTags">
        x
      </button>
      <TagButton
        v-for="(value, key) in allTags"
        :tag="key"
        :isSelected="value"
        @select-tag="selectTag(key)"
      />
    </div>
    <div 
      v-if="Object.values(allTags).every(value => !value)" 
      class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <Card
        v-for="repo in repoData"
        :title="repo.name"
        :descricao="repo.description"
        :url="repo.html_url"
        :tags="repo.topics"
        :allTags="allTags"
        @select-tag="selectTag"
      />
    </div>
    <div 
      v-else 
      class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <Card
        v-for="repo in repoData.filter(repo => repo.topics.some(tag => allTags[tag]))"
        :key="repo.name"
        :title="repo.name"
        :descricao="repo.description"
        :url="repo.html_url"
        :tags="repo.topics"
        :allTags="allTags"
        @select-tag="selectTag"
      />
    </div>
    <!-- <Card
      v-for="repo in repoData"
      :title="repo.name"
      :descricao="repo.description"
      :url="repo.html_url"
      :tags="repo.topics"
      :allTags="allTags"
      @select-tag="selectTag"
    /> -->
  </div>
</template>