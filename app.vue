<script setup>

const page = ref(1);
const lang = ref(0)
const lightmode = ref(true)

const updatePage = (pg) => {
  page.value = parseInt(pg);
}

const switchLang = () => {
  lang.value = (lang.value + 1) % 2;
  console.log(lang.value);
}

</script>

<template>
  <div class=" md:px-48 2xl:px-72 h-screen px-10 ">
    <Navbar @update="updatePage" @switch="switchLang" :lang="lang"/>
    <Info v-if="page === 1" />
    <About v-if="page === 2" :lang="lang"/>
    <Projects v-if="page === 3 " />
  </div>

</template>
