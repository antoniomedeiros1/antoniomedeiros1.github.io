<script setup>

const props = defineProps({
  lang: Number,
})

</script>

<template>
  <!-- PT -->
  <div v-if="lang === 0" class=" mx-4 my-5 lg:mr-64 lg:ml-10 lg:my-10">
    <h1 class=" text-2xl text-gray-700 dark:text-gray-100 font-bold">Sobre mim 🤓</h1>
    <h2 class=" pt-2 text-lg text-gray-700 dark:text-gray-100 font-bold">DevOps</h2>
    <p class=" py-2 text-gray-600 dark:text-gray-400">
      Atualmente trabalho como DevOps Engineer, possuindo experiência com <strong>conteinerização de aplicações</strong> com <em>Docker</em>, 
      <strong>orquestração de containers</strong> com <em>Kubernetes</em>, desenvolvimento de <strong>pipelines de CI/CD</strong> para aplicações Java, .Net, Node e Python, utilizando <em>Github Actions</em>. Também possuo experiência com <strong>monitoramento</strong> utilizando <em>Prometheus</em> e <em>Grafana</em> e ferramentas de <strong>Infraestrutura como Código (IaC)</strong> como <em>Terraform</em> e <em>Ansible</em>.
    </p>
    <h2 class=" text-lg text-gray-700 dark:text-gray-100 font-bold">Desenvolvimento de Software</h2>
    <p class=" py-2 text-gray-600 dark:text-gray-400">
      Apesar de atualmente trabalhar com DevOps, também tenho um background de desenvolvedor web e mobile, com ênfase em tecnologias como <em>Vue</em>, <em>Django</em>, <em>Flutter</em> e <em>Postgres</em>. Também já trabalhei com desenvolvimento de chatbots utilizando <em>Dialogflow</em>.
    </p>
    <h2 class=" text-lg text-gray-700 dark:text-gray-100 font-bold">Formação</h2>
    <p class=" py-2 text-gray-600 dark:text-gray-400">
      Cursando Engenharia Computacional na Universidade Federal de Juiz de Fora (2019 - 2024), com grande interesse em temas como Computação de Alto Desempenho (HPC), Computação em Nuvem e Machine Learning.
    </p>
  </div>

  <!-- EN -->
  <div v-else class=" mx-4 my-5 lg:mr-64 lg:ml-10 lg:my-10">
    <h1 class=" text-2xl text-gray-700 dark:text-gray-100 font-bold">About me 🤓</h1>
    <h2 class=" pt-2 text-lg text-gray-700 dark:text-gray-100 font-bold">DevOps</h2>
    <p class=" py-2 text-gray-600 dark:text-gray-400">
      Currently working as a DevOps Engineer, with experience in <strong>containerization of applications</strong> with <em>Docker</em>, 
      <strong>container orchestration</strong> with <em>Kubernetes</em>, development of <strong>CI/CD pipelines</strong> for Java, .Net, Node and Python applications, using <em>Github Actions</em>. I also have experience with <strong>monitoring</strong> using <em>Prometheus</em> and <em>Grafana</em> and <strong>Infrastructure as Code (IaC)</strong> tools like <em>Terraform</em> and <em>Ansible</em>.
    </p>
    <h2 class=" text-lg text-gray-700 dark:text-gray-100 font-bold">Software Development</h2>
    <p class=" py-2 text-gray-600 dark:text-gray-400">
      Although I currently work with DevOps, I also have a background in web and mobile development, with emphasis on technologies like <em>Vue</em>, <em>Django</em>, <em>Flutter</em> and <em>Postgres</em>. I have also worked with chatbot development using <em>Dialogflow</em>.
    </p>
    <h2 class=" text-lg text-gray-700 dark:text-gray-100 font-bold">Graduation</h2>
    <p class=" py-2 text-gray-600 dark:text-gray-400">
      Currently studying Computational Engineering at the Federal University of Juiz de 
      Fora, with a great interest in topics such as High Performance Computing (HPC), Cloud Computing and Machine Learning.
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
    <div class="w-10 h-10 mx-2 opacity-60 dark:invert">
      <img src="/terraform.svg" alt="">
    </div>
    <div class="w-10 h-10 mx-2 opacity-60 dark:invert">
      <img src="/ansible.svg" alt="">
    </div>
  </div>
</template>