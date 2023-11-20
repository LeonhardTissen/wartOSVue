<template>
	<div id="timeContainer" class="text-center flex justify-center flex-col items-center leading-5 px-2 h-full">
		<p id="date"></p>
		<p id="time"></p>
	</div>
</template>

<script lang="ts">
export default {
	name: 'TimeDate',
	mounted() {
		updateTime();
		setInterval(updateTime, 1000);
	},
}

function updateTime() {
	const dateElement = document.getElementById('date') as HTMLElement;
	const timeElement = document.getElementById('time') as HTMLElement;

	const now = new Date();
	const hours = now.getHours().toString().padStart(2, '0');
	const minutes = now.getMinutes().toString().padStart(2, '0');
	const day = now.getDate().toString().padStart(2, '0');
	const month = (now.getMonth() + 1).toString().padStart(2, '0');
	const year = now.getFullYear().toString().slice(-2);

	dateElement.innerText = `${day}/${month}/${year}`;
	timeElement.innerText = `${hours}:${minutes}`;
}
</script>

<style scoped>
#timeContainer {
	filter: invert(var(--invert));
}
</style>
