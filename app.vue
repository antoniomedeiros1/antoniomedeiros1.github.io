<script setup>

const page = ref(1);

const updatePage = (pg) => {
  page.value = parseInt(pg);
}

</script>

<template>
  <div class=" md:px-48 2xl:px-72 h-screen px-10 ">
    <Navbar @update="updatePage"/>
    <Info v-if="page === 1" />
    <About v-if="page === 2" />
    <Projects v-if="page === 3" />
  </div>

</template>