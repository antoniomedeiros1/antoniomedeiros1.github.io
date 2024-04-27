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
      Possuo experiência na aplicação da cultura DevOps em todo o 
      ciclo de desenvolvimento de software, trabalhando com a stack Github Actions, 
      Docker, Kubernetes (AKS), Prometheus e Grafana. Também possuo experiência em desenvolvimento web.
    </p>
    <p class=" py-2 text-gray-600 dark:text-gray-400">
      Atualmente cursando Engenharia Computacional na Universidade Federal de Juiz de 
      Fora, com grande interesse em temas como Computação de Alto Desempenho (HPC) e Machine Learning.
    </p>
  </div>

  <!-- EN -->
  <div v-else class=" mx-4 my-5 lg:mr-64 lg:ml-10 lg:my-10">
    <h1 class=" text-xl text-gray-700 dark:text-gray-100 font-bold">About me 🤓</h1>
    <p class=" py-2 text-gray-600 dark:text-gray-400">
      I have experience in applying DevOps culture throughout the software development cycle, working with the Github Actions, 
      Docker, Kubernetes (AKS), Prometheus and Grafana stack. I also have experience in web development.
    </p>
    <p class=" py-2 text-gray-600 dark:text-gray-400">
      Currently studying Computational Engineering at the Federal University of Juiz de 
      Fora, with a great interest in topics such as High Performance Computing (HPC) and Machine Learning.
    </p>
  </div>
  <div class=" flex justify-center items-center mx-4 ">
    <div class="w-10 h-10 mx-2 opacity-60 dark:invert">
      <img src="/python.svg" alt="">
    </div>
    <div class="w-10 h-10 mx-2 opacity-60 dark:invert">
      <img src="/linux.svg" alt="">
    </div>
    <div class="w-10 h-10 mx-2 opacity-60 dark:invert">
      <img src="/docker.svg" alt="">
    </div>
    <div class="w-10 h-10 mx-2 opacity-60 dark:invert">
      <img src="/k8s.svg">
    </div>
    <div class="w-10 h-10 mx-2 opacity-60 dark:invert">
      <img src="/grafana.svg" alt="">
    </div>
    <div class="w-10 h-10 mx-2 opacity-60 dark:invert">
      <img src="/prometheus.svg" alt="">
    </div>
  </div>
</template>