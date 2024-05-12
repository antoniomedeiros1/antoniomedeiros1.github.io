<script setup>

const props = defineProps({
  lang: Number,
})

</script>

<template>
  <div v-if="lang === 0" class=" mx-4 my-5 lg:mr-16 lg:ml-10 lg:my-10">
    <h1 class=" text-xl text-gray-700 dark:text-gray-100 font-bold">Artigos Acadêmicos 📕</h1>
    <Card 
    title="Modelagem Acústica por Diferenças Finitas utilizando OpenMP"
    descricao="A modelagem de propagação de ondas sísmicas têm sido objeto de estudo por décadas, principalmente pela indústria do petróleo e do gás. Neste trabalho implementa-se a propagação de ondas em um meio homogêneo bidimensional por diferenças finitas de quarta ordem. Paralelismo com OpenMP é empregado como estratégia de melhoria de desempenho. O programa é testado com diferentes casos de testes. O emprego do paralelismo apresenta uma boa escalabilidade."
    url="https://sol.sbc.org.br/index.php/eradrj/article/view/18561"
    :tags="['HPC', 'C++', 'OpenMP', 'Paralelismo']"
    />
  </div>
  <div v-else class=" mx-4 my-5 lg:mr-16 lg:ml-10 lg:my-10">
    <h1 class=" text-xl text-gray-700 dark:text-gray-100 font-bold">Academic Articles 📕</h1>
    <Card
    title="Acoustic Modeling using Finite Differences with OpenMP"
    descricao="The modeling of seismic wave propagation has been studied for decades, mainly by the oil and gas industry. In this work, the propagation of waves in a two-dimensional homogeneous medium is implemented by fourth-order finite differences. OpenMP parallelism is employed as a performance improvement strategy. The program is tested with different test cases. The use of parallelism presents good scalability."
    url="https://sol.sbc.org.br/index.php/eradrj/article/view/18561"
    :tags="['HPC', 'C++', 'OpenMP', 'Parallelism']"
    />
  </div>
</template>