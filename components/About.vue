<script setup>

const props = defineProps({
  lang: Number,
})

</script>

<template>
  <!-- PT -->
  <div v-if="lang === 0" class=" mx-10 my-10 text-justify">
    <h1 class=" text-2xl text-gray-700 dark:text-gray-100 font-bold">Sobre mim 🤓</h1>
    <h2 class=" pt-2 text-xl text-gray-700 dark:text-gray-100 font-bold">DevOps</h2>
    <div class=" text-lg text-gray-600 dark:text-gray-400">
      <p class=" py-1">
        Atualmente trabalho como DevOps Engineer, atuando na manutenção de esteiras de diversos projetos e garantindo mais <strong>confiabilidade</strong>, <strong>qualidade</strong>, <strong>segurança</strong> e <strong>velocidade</strong> nas entregas.
      </p>
      <p class=" py-1">
        Possuo experiência em conteinerização de aplicações com <strong>Docker</strong>, orquestração de containers com <strong>Kubernetes</strong> e configuração de manifestos e charts <strong>Helm</strong>, desenvolvimento de <strong>pipelines de CI/CD</strong> para aplicações Java, .Net, Node e Python, utilizando <strong>Github Actions</strong> e <strong>Gitlab</strong>.
      </p>
      <p class=" py-1">
        Experiência trabalhando com provedores <strong>Azure</strong> (<a href="https://learn.microsoft.com/api/credentials/share/pt-br/AntonioMedeiros-9298/E57EE549430F6FAD?sharingId=D2B16E19F62BA58D" target="_blank" class=" text-blue-500">AZ-900</a>) e <strong>AWS</strong>. Também possuo experiência com monitoramento de infraestrutura utilizando <strong>Prometheus</strong> e <strong>Grafana</strong> e ferramentas de <strong>Infraestrutura como Código (IaC)</strong> como <strong>Terraform</strong>. 
      </p>
    </div>
    
    <h2 class=" pt-2 text-xl text-gray-700 dark:text-gray-100 font-bold">Desenvolvimento de Software</h2>
    <div class=" text-lg text-gray-600 dark:text-gray-400">
      <p class=" py-1">
        Também atuo no desenvolvimento de sistemas web com a stack <strong>Vue</strong>, <strong>Django</strong> e <strong>Postgres</strong>.
      </p>
    </div>
    <h2 class=" pt-2 text-xl text-gray-700 dark:text-gray-100 font-bold">Formação</h2>
    <div class=" text-lg text-gray-600 dark:text-gray-400">
      <p class=" py-2">
        Cursando Engenharia Computacional na Universidade Federal de Juiz de Fora (2019 - 2025), com grande interesse em temas como Computação de Alto Desempenho (HPC), Computação em Nuvem e Machine Learning.
      </p>
    </div>
  </div>

  <!-- EN -->
  <div v-else class=" mx-10 my-10 text-justify">
    <h1 class=" text-2xl text-gray-700 dark:text-gray-100 font-bold">About me 🤓</h1>
    <h2 class=" pt-2 text-xl text-gray-700 dark:text-gray-100 font-bold">DevOps</h2>
    <div class=" text-lg text-gray-600 dark:text-gray-400">
      <p class=" py-1">
        I currently work as a DevOps Engineer, maintaining multiple projects pipelines and ensuring more <strong>reliability</strong>, <strong>quality</strong>, <strong>security</strong> and <strong>speed</strong> in deliveries.
      </p>
      <p class=" py-1">
        I have experience in containerization of applications with <strong>Docker</strong>, container orchestration with <strong>Kubernetes</strong> and configuration of <strong>Helm</strong> charts. Development of <strong>CI/CD pipelines</strong> for Java, .Net, Node and Python applications, using <strong>Github Actions</strong>.
      </p>
      <p class=" py-1">
        Experience working with <strong>Azure</strong> (<a href="https://learn.microsoft.com/api/credentials/share/pt-br/AntonioMedeiros-9298/E57EE549430F6FAD?sharingId=D2B16E19F62BA58D" target="_blank" class=" text-blue-500">AZ-900</a>) and <strong>AWS</strong> cloud providers. I also have experience with monitoring using <strong>Prometheus</strong> and <strong>Grafana</strong> and <strong>Infrastructure as Code (IaC)</strong> tools such as <strong>Terraform</strong> and <strong>Ansible</strong>.
      </p>
    </div>
    <h2 class=" pt-2 text-xl text-gray-700 dark:text-gray-100 font-bold">Software Development</h2>
    <div class=" text-lg text-gray-600 dark:text-gray-400">
      <p class=" py-1">
        Although I currently work with DevOps, I also have a background in <strong>web and mobile development</strong>, with emphasis on technologies such as <em>Vue</em>, <em>Django</em>, <em>Postgres</em> and <em>Flutter</em>. I have also worked with <strong>chatbot development</strong> using <em>Dialogflow</em>.
      </p>
    </div>
    <h2 class=" pt-2 text-xl text-gray-700 dark:text-gray-100 font-bold">Education</h2>
    <div class=" text-lg text-gray-600 dark:text-gray-400">
      <p class=" py-2 text-gray-600 dark:text-gray-400">
        Studying Computational Engineering at the Federal University of Juiz de Fora (2019 - 2024), with great interest in topics such as High Performance Computing (HPC), Cloud Computing and Machine Learning.
      </p>
    </div>
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