<script setup>
const props = defineProps({
  lang: Number,
});
</script>

<template>
  <!-- PT -->
  <div v-if="lang === 0" class="mx-10 my-10 text-justify">
    <h1 class="text-2xl text-gray-700 dark:text-gray-100 font-bold">Olá 👋</h1>
    <h2 class="pt-2 text-xl text-gray-700 dark:text-gray-100 font-bold">
      Experiência
    </h2>
    <div class="text-lg text-gray-600 dark:text-gray-400">
      <p class="py-1">
        Atualmente trabalho como Desenvolvedor de software, trabalhando com a
        stack Django, Vue e Postgres.
      </p>
      <p class="py-1">
        Também possuo experiência em conteinerização de aplicações com
        <strong>Docker</strong>, orquestração de containers com
        <strong>Kubernetes</strong> e configuração de manifestos e charts
        <strong>Helm</strong>, desenvolvimento de
        <strong>pipelines de CI/CD</strong> para aplicações Java, .Net, Node e
        Python, utilizando <strong>Github Actions</strong> e
        <strong>Gitlab</strong>.
      </p>
      <p class="py-1">
        Experiência trabalhando com provedores <strong>Azure</strong> (<a
          href="https://learn.microsoft.com/api/credentials/share/pt-br/AntonioMedeiros-9298/E57EE549430F6FAD?sharingId=D2B16E19F62BA58D"
          target="_blank"
          class="text-blue-500"
          >AZ-900</a
        >) e <strong>AWS</strong>.
      </p>
    </div>
    <h2 class="pt-2 text-xl text-gray-700 dark:text-gray-100 font-bold">
      Formação
    </h2>
    <div class="text-lg text-gray-600 dark:text-gray-400">
      <p class="py-2">
        Bacharelado em Engenharia Computacional pela Universidade Federal de
        Juiz de Fora (2019 - 2025), com realizando Iniciação Científica em
        Computação de Alto Desempenho (HPC), Computação em Nuvem e Machine
        Learning.
      </p>
      <a
        href="https://repositorio.ufjf.br/jspui/handle/ufjf/19345"
        target="_blank"
        class="text-blue-500"
        >Link para a minha monografia</a
      >
    </div>
  </div>

  <!-- EN -->
  <div v-else class="mx-10 my-10 text-justify">
    <h1 class="text-2xl text-gray-700 dark:text-gray-100 font-bold">
      Hello there 👋
    </h1>
    <div class="text-lg text-gray-600 dark:text-gray-400">
      <p class="py-1">
        I'm Antonio, a Software Engineer based in Brazil. In my spare time I
        enjoy reading sci-fi books, watching movies and walking with my dog.
      </p>
    </div>
    <h2 class="pt-2 text-xl text-gray-700 dark:text-gray-100 font-bold">
      Professional Experience
    </h2>
    <div class="text-lg text-gray-600 dark:text-gray-400">
      <p class="py-1">
        I currently work as a Software Engineer, delivering high-performance and
        scalable applications with <strong>Django</strong>,
        <strong>FastAPI</strong> and <strong>Vue</strong>. I also have worked
        with other frameworks in side projects, such as
        <strong>Spring Boot</strong> and <strong>NestJS</strong>.
      </p>
      <p class="py-1">
        Experience in DevOps, having worked with
        <strong>Docker</strong>, <strong>Kubernetes</strong> and
        <strong>CI/CD</strong> with Github Actions and Gitlab CI, and Cloud
        environments, specially <strong>Azure</strong> (<a
          href="https://learn.microsoft.com/api/credentials/share/pt-br/AntonioMedeiros-9298/E57EE549430F6FAD?sharingId=D2B16E19F62BA58D"
          target="_blank"
          class="text-blue-500"
          >AZ-900</a
        >) and <strong>AWS</strong>.
      </p>
    </div>
    <h2 class="pt-2 text-xl text-gray-700 dark:text-gray-100 font-bold">
      Education
    </h2>
    <div class="text-lg text-gray-600 dark:text-gray-400">
      <p class="py-2 text-gray-600 dark:text-gray-400">
        B.Sc. in Computational Engineering at the Federal University of Juiz de
        Fora (2019 - 2024), with great interest in topics such as High
        Performance Computing (HPC), Cloud Computing and Machine Learning.
      </p>
      <p>
        <a
          href="https://repositorio.ufjf.br/jspui/handle/ufjf/19345"
          target="_blank"
          class="text-blue-500"
          >Final course project</a
        >
      </p>
    </div>
  </div>
  <div class="flex justify-center items-center mx-4">
    <div class="w-10 h-10 mx-2 opacity-60 dark:invert">
      <img src="/python.svg" alt="" />
    </div>
    <div class="w-10 h-10 mx-2 opacity-60 dark:invert">
      <img src="/django.svg" />
    </div>
    <div class="w-10 h-10 mx-2 opacity-60 dark:invert">
      <img src="/spring.svg" />
    </div>
    <div class="w-10 h-10 mx-2 opacity-60 dark:invert">
      <img src="/nestjs.svg" />
    </div>
    <div class="w-10 h-10 mx-2 opacity-60 dark:invert">
      <img src="/nuxt.svg" />
    </div>
    <div class="w-10 h-10 mx-2 opacity-60 dark:invert">
      <img src="/docker.svg" alt="" />
    </div>
    <div class="w-10 h-10 mx-2 opacity-60 dark:invert">
      <img src="/k8s.svg" />
    </div>
  </div>
</template>
