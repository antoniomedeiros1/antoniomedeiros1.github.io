<script setup>

const props = defineProps({
  lang: Number,
})

</script>

<template>
  <div v-if="lang === 0" class=" mx-4 my-5 lg:mr-16 lg:ml-10 lg:my-10">
    <h1 class=" text-xl text-gray-700 dark:text-gray-100 font-bold">Projetos 🛠️</h1>
    <Card 
      title="Site GET EngComp (UFJF)"
      descricao="Site desenvolvido com React e Bootstrap para o Grupo de Educação Tutorial da Engenharia Computacional de Juiz de Fora."
      url="https://getengcomp.netlify.app"
      :tags="['React', 'Bootstrap']"
    />
    <Card 
      title="Fiado Só Amanhã"
      descricao="Aplicação feita com Laravel com o propósito de oferecer aos pequenos negócios e comércios
                 um sistema de gerenciamento de dívidas e dados dos clientes."
      url="https://github.com/aryneto1/fiado-so-amanha"
      :tags="['Laravel', 'PHP', 'MySQL', 'TailwindCSS', 'jQuery']"
    />
    <Card 
      title="Semente"
      descricao="Aplicativo desenvolvido para o projeto Semente, que conta com um chatbot integrado (Dialogflow) com
                  a proposta de ser um aplicativo sobre saúde mental e com orientações sobre onde buscar ajuda"
      url="https://github.com/antoniomedeiros1/semente_app"
      :tags="['Flutter', 'Firebase', 'Dialogflow', 'Cloud Functions']"
    />
  </div>
  <div v-else class=" mx-4 my-5 lg:mr-16 lg:ml-10 lg:my-10">
    <h1 class=" text-xl text-gray-700 dark:text-gray-100 font-bold">Projects 🛠️</h1>
    <Card 
      title="Site GET EngComp (UFJF)"
      descricao="Site desenvolvido com React e Bootstrap para o Grupo de Educação Tutorial da Engenharia Computacional de Juiz de Fora."
      url="https://getengcomp.netlify.app"
      :tags="['React', 'Bootstrap']"
    />
    <Card 
      title="Fiado Só Amanhã"
      descricao="Aplicação feita com Laravel com o propósito de oferecer aos pequenos negócios e comércios
                 um sistema de gerenciamento de dívidas e dados dos clientes."
      url="https://github.com/aryneto1/fiado-so-amanha"
      :tags="['Laravel', 'PHP', 'MySQL', 'TailwindCSS', 'jQuery']"
    />
    <Card 
      title="Semente"
      descricao="Aplicativo desenvolvido para o projeto Semente, que conta com um chatbot integrado (Dialogflow) com
                  a proposta de ser um aplicativo sobre saúde mental e com orientações sobre onde buscar ajuda"
      url="https://github.com/antoniomedeiros1/semente_app"
      :tags="['Flutter', 'Firebase', 'Dialogflow', 'Cloud Functions']"
    />
  </div>
</template>