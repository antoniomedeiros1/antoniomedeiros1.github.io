<script setup>

const props = defineProps({
  lang: Number,
	lightmode: Boolean,
	active: Number,
})

</script>

<template>
  <!-- PT -->
	<nav v-if="lang === 0" class="flex flex-row justify-between py-3 border-b dark:border-gray-600">
		<div class="flex items-center">
			<div class="flex p-2 mx-2
									text-gray-400 hover:text-gray-800 
									dark:hover:border-white dark:hover:hover:text-white
									rounded-full hover:cursor-pointer" 
						@click="this.$emit('changeMode')">
				<outline-sun-icon 
					v-if="lightmode" 
					class="w-6 h-6 "/>
				<outline-moon-icon 
					v-else
					class="w-6 h-6 "/>
			</div>
			<div class=" text-md p-1 mx-1
								hover:cursor-pointer hover:grayscale-0
								text-gray-400 hover:text-gray-800 rounded-full
								dark:hover:text-white
								grayscale"
						@click="this.$emit('switch')"
			>
				🇧🇷 <span class=" hidden md:inline">PT-BR</span>
			</div>
		</div>
		<div>
		</div>
		<div class=" self-end items-center pb-1">
			<ul class=" flex text-gray-500 dark:text-gray-400 text-md ">
				<li class=" mx-2 hover:cursor-pointer hover:text-gray-800 dark:hover:text-white" 
						:class="active === 1 ? 'border-b border-dotted border-gray-400' : ''"
						@click="this.$emit('update', '1')">
						Inicio
				</li>
				<li class=" mx-2 hover:cursor-pointer hover:text-gray-800 dark:hover:text-white" 
						:class="active === 2 ? 'border-b border-dotted border-gray-400' : ''"
						@click="this.$emit('update', '2')">
						Sobre
				</li>
				<li class=" mx-2 hover:cursor-pointer hover:text-gray-800 dark:hover:text-white" 
						:class="active === 3 ? 'border-b border-dotted border-gray-400' : ''"
						@click="this.$emit('update', '3')">
						Projetos
				</li>
				<li class=" mx-2 hover:cursor-pointer hover:text-gray-800 dark:hover:text-white" 
						:class="active === 4 ? 'border-b border-dotted border-gray-400' : ''"
						@click="this.$emit('update', '4')">
						Artigos
				</li>
			</ul>
		</div>
	</nav>
  <!-- EN -->
	<nav v-else class="flex flex-row justify-between py-3 border-b dark:border-gray-600">
		<div class="flex items-center">
			<div class="flex p-2 mx-2
									text-gray-400 hover:text-gray-800 
									dark:hover:border-white dark:hover:hover:text-white
									rounded-full hover:cursor-pointer" 
						@click="this.$emit('changeMode')">
				<outline-sun-icon 
					v-if="lightmode" 
					class="w-6 h-6 "/>
				<outline-moon-icon 
					v-else
					class="w-6 h-6 "/>
			</div>
			<div class=" text-md p-1 mx-1
								hover:cursor-pointer hover:grayscale-0
								text-gray-400 hover:text-gray-800 rounded-full
								dark:hover:text-white
								grayscale"
						@click="this.$emit('switch')"
				>
				🇺🇸 <span class=" hidden md:inline">EN-US</span>
			</div>
		</div>
		<div>
		</div>
		<div class=" self-end items-center pb-1">
			<ul class=" flex text-gray-500 dark:text-gray-400 text-md">
				<li class=" mx-2 hover:cursor-pointer hover:text-gray-800 dark:hover:text-white" 
						:class="active === 1 ? 'border-b border-dotted border-gray-400' : ''"
						@click="this.$emit('update', '1')">
						Home
				</li>
				<li class=" mx-2 hover:cursor-pointer hover:text-gray-800 dark:hover:text-white" 
						:class="active === 2 ? 'border-b border-dotted border-gray-400' : ''"
						@click="this.$emit('update', '2')">
						About
				</li>
				<li class=" mx-2 hover:cursor-pointer hover:text-gray-800 dark:hover:text-white" 
						:class="active === 3 ? 'border-b border-dotted border-gray-400' : ''"
						@click="this.$emit('update', '3')">
						Projects
				</li>
				<li class=" mx-2 hover:cursor-pointer hover:text-gray-800 dark:hover:text-white" 
						:class="active === 4 ? 'border-b border-dotted border-gray-400' : ''"
						@click="this.$emit('update', '4')">
						Articles
				</li>
			</ul>
		</div>
	</nav>
</template>
