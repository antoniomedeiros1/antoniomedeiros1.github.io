<script setup>

const page = ref(1);
const lang = ref(0)
const lightmode = ref(true)

const changeMode = () => {
  lightmode.value = !lightmode.value;
}

const updatePage = (pg) => {
  page.value = parseInt(pg);
}

const switchLang = () => {
  lang.value = (lang.value + 1) % 2;
  console.log(lang.value);
}


const fetch_repo_info = async (repo_url) => {
  const repo_url_split = repo_url.split('github.com/')[1]
  const url = `https://api.github.com/repos/${repo_url_split}`
  const headers = {
    'User-Agent': 'antoniomedeiros1',
    'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
  }
  const response = await fetch(url)
    .then(response => response.json())
    .then(data => data)
  return {
    name: response.name,
    description: response.description,
    html_url: response.html_url,
    topics: response.topics
  }
}

const repo_urls = [
  "https://github.com/antoniomedeiros1/hpc-at-cloud",
  "https://github.com/antoniomedeiros1/libras-realtime-detector",
  "https://github.com/antoniomedeiros1/mdf-onda-acustica",
  "https://github.com/antoniomedeiros1/forensics",
  "https://github.com/antoniomedeiros1/hackaton-sbseg",
  "https://github.com/antoniomedeiros1/antoniomedeiros1.github.io",
  "https://github.com/antoniomedeiros1/semente_app",
  "https://github.com/antoniomedeiros1/ambot_app",
  "https://github.com/antoniomedeiros1/siteGET",
  "https://github.com/antoniomedeiros1/Crazy-Ship",
  "https://github.com/antoniomedeiros1/2048",
]

const repoData = ref([])
const allTags = ref({})

onMounted(async () => {
  for (let i = 0; i < repo_urls.length; i++) {
    const repo_info = await fetch_repo_info(repo_urls[i])
    repoData.value.push(repo_info)
    repo_info.topics.forEach(tag => {
      if (!allTags.value[tag]) {
        allTags.value[tag] = false
      }
    })
  }
})

</script>

<template>
  <div :class= " !lightmode ? 'dark' : '' " class="">
    <div class=" dark:bg-slate-800 min-h-screen pb-10">
      <div class=" max-w-7xl mx-auto px-10 ">
        <Navbar 
            @changeMode="changeMode" 
            @update="updatePage" 
            @switch="switchLang" 
            :lightmode="lightmode" 
            :lang="lang "
            :active="page"
          />
        <Info v-if="page === 1" />
        <About v-if="page === 2" :lang="lang "/>
        <Projects v-if="page === 3" :lang="lang" :repoData="repoData" :allTags="allTags" />
        <Articles v-if="page === 4" :lang="lang" />
      </div>
    </div>
  </div>
</template>
