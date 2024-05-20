<script setup>

const props = defineProps({
  lang: Number,
  repos: Array
})

const fetch_repo_info = (repo_url) => {
  const url = `https://api.github.com/repos/${repo_url}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
}


// const 

</script>

<template>
  <div class=" mx-4 my-5 lg:mr-16 lg:ml-10 lg:my-10">
    <h1 v-if="lang === 0" class=" text-2xl text-gray-700 dark:text-gray-100 font-bold">Projetos 🛠️</h1>
    <h1 v-else class=" text-2xl text-gray-700 dark:text-gray-100 font-bold">Projects 🛠️</h1>
    <Card 
    title="Libras SLT"
    descricao="Trabalho efetuado para a disciplina 'Trabalho Multidisciplinar', com o objetivo de criar um aplicativo que auxilie
      na comunicação entre surdos e ouvintes, utilizando a Língua Brasileira de Sinais (Libras). O projeto envolveu o trinamento de 
      um modelo de Classificação de Imagens para reconhecimento de sinais de Libras"
    url="https://github.com/antoniomedeiros1/libras-realtime-detector"
    :tags="['Python', 'AI', 'AutoML', 'GCP', 'Visão Computacional']"
    />
    <Card 
    title="Fiado Só Amanhã"
    descricao="Aplicação feita para a disciplina 'Modelagem de Sistemas', utilizando Laravel, com o propósito de oferecer 
    aos pequenos negócios e comércios um sistema de gerenciamento de dívidas e dados dos clientes."
    url="https://github.com/aryneto1/fiado-so-amanha"
    :tags="['Laravel', 'PHP', 'MySQL', 'jQuery']"
    />
    <Card 
    title="Semente"
    descricao="Aplicativo desenvolvido para o projeto Semente (Campus Mobile 2021) que conta com um chatbot integrado (Dialogflow) com
    a proposta de ser um aplicativo sobre saúde mental e com orientações sobre onde buscar ajuda."
    url="https://github.com/antoniomedeiros1/semente_app"
    :tags="['Flutter', 'Firebase', 'Dialogflow', 'Cloud Functions']"
    />
    <Card 
      title="Site GET EngComp (UFJF)"
      descricao="Site desenvolvido com React e Bootstrap para o Grupo de Educação Tutorial da Engenharia Computacional de Juiz de Fora."
      url="https://github.com/antoniomedeiros1/siteGET"
      :tags="['React', 'Bootstrap']"
    />
  </div>
</template>