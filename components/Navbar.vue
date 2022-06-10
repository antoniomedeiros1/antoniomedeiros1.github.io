<script setup>

const lightmode = ref(true);

const changeMode = () => {
	lightmode.value = !lightmode.value;
}

</script>

<template>
	<nav class="flex flex-row justify-between py-3 border-b">
		<div class="flex p-2 ml-2
								border border-gray-400 hover:border-gray-800 
								text-gray-400 hover:text-gray-800 rounded-full
								hover:cursor-pointer" 
					@click="changeMode">
			<outline-sun-icon 
				v-if="lightmode" 
				class="w-5 h-5 "/>
			<outline-moon-icon 
				v-else
				class="w-5 h-5 "/>
		</div>
		<div class=" self-end items-center pb-1">
			<ul class=" flex text-gray-500">
				<li class=" px-2">Home</li>
				<li class=" px-2">About</li>
				<li class=" px-2">Projects</li>
			</ul>
		</div>
	</nav>
</template>