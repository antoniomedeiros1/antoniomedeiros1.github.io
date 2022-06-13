<script setup>

const props = defineProps({
  lang: Number,
})

</script>

<template>
  <!-- PT -->
  <div v-if="lang === 0" class=" mx-4 my-5 lg:mr-64 lg:ml-10 lg:my-10">
    <h1 class=" text-xl text-gray-700 dark:text-gray-100 font-bold">Sobre mim 🤓</h1>
    <p class=" py-2 text-gray-600 dark:text-gray-400">
      Experiência desenvolvendo interfaces com os frameworks VueJs e Tailwind. 
      Tenho familiaridade com as linguagens Python (FastAPI), JavaScript 
      (Node, Express), C++, e bancos MySQL e MongoDB. Conhecimentos básicos 
      em operação de sistemas Linux, Docker e AWS Cloud.
    </p>
    <p class=" py-2 text-gray-600 dark:text-gray-400">
      Atualmente estudo Engenharia Computacional na Universidade Federal de Juiz de 
      Fora, realizando pesquisa nas áreas de Métodos Numéricos e Computação de 
      Alto Desempenho.
    </p>
  </div>

  <!-- EN -->
  <div v-else class=" mx-4 my-5 lg:mr-64 lg:ml-10 lg:my-10">
    <h1 class=" text-xl text-gray-700 dark:text-gray-100 font-bold">About me 🤓</h1>
    <p class=" py-2 text-gray-600 dark:text-gray-400">
      Experience developing SPAs with VueJs and TailwindCSS frameworks, 
      but I'm also familiar with Python programming language, using the 
      FastAPI framework, NodeJS with Express, and SQL and NoSQL databases 
      such as MySQL and Mongo. Basic knowledge of operations, Linux, 
      Containers, AWS, pipelines for building, testing and deploying.
    </p>
    <p class=" py-2 text-gray-600 dark:text-gray-400">
      I currently live in Juiz de Fora, Brazil, studying Computational 
      Engineering at the Federal University of Juiz de Fora, with big
      interest on topics such as High Performance Computing (HPC) 
      and numerical simulations.
    </p>
  </div>
</template>