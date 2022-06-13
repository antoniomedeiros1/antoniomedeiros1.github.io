<script setup>

const props = defineProps({
  lang: Number,
	lightmode: Boolean,
})

</script>

<template>
  <!-- PT -->
	<nav v-if="lang === 0" class="flex flex-row justify-between py-3 border-b">
		<div class="flex items-center">
			<div class="flex p-2 mx-2
									border border-gray-400 hover:border-gray-800 
									text-gray-400 hover:text-gray-800 
									dark:hover:border-white dark:hover:hover:text-white
									rounded-full hover:cursor-pointer" 
						@click="this.$emit('changeMode')">
				<outline-sun-icon 
					v-if="lightmode" 
					class="w-5 h-5 "/>
				<outline-moon-icon 
					v-else
					class="w-5 h-5 "/>
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
				<li class=" px-2 hover:cursor-pointer hover:text-gray-800 dark:hover:text-white" 
						@click="this.$emit('update', '1')">
						Inicio
				</li>
				<li class=" px-2 hover:cursor-pointer hover:text-gray-800 dark:hover:text-white" 
						@click="this.$emit('update', '2')">
						Sobre
				</li>
				<li class=" px-2 hover:cursor-pointer hover:text-gray-800 dark:hover:text-white" 
						@click="this.$emit('update', '3')">
						Projetos
				</li>
			</ul>
		</div>
	</nav>
  <!-- EN -->
	<nav v-else class="flex flex-row justify-between py-3 border-b">
		<div class="flex items-center">
			<div class="flex p-2 mx-2
									border border-gray-400 hover:border-gray-800 
									text-gray-400 hover:text-gray-800 
									dark:hover:border-white dark:hover:hover:text-white
									rounded-full hover:cursor-pointer" 
						@click="this.$emit('changeMode')">
				<outline-sun-icon 
					v-if="lightmode" 
					class="w-5 h-5 "/>
				<outline-moon-icon 
					v-else
					class="w-5 h-5 "/>
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
				<li class=" px-2 hover:cursor-pointer hover:text-gray-800 dark:hover:text-white" 
						@click="this.$emit('update', '1')">
						Home
				</li>
				<li class=" px-2 hover:cursor-pointer hover:text-gray-800 dark:hover:text-white" 
						@click="this.$emit('update', '2')">
						About
				</li>
				<li class=" px-2 hover:cursor-pointer hover:text-gray-800 dark:hover:text-white" 
						@click="this.$emit('update', '3')">
						Projects
				</li>
			</ul>
		</div>
	</nav>
</template>
