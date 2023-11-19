<template>
	<div id="desktop" class="flex flex-col flex-wrap overflow-hidden">
		<div id="icons" class="flex grow flex-col flex-wrap content-start gap-1 select-none p-2">
			<div class="link w-28 h-28 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-lg p-1"
				v-for="desktopIcon in desktopIcons.sort((a, b) => a.iconname.localeCompare(b.iconname))"
				:key="desktopIcon.iconname"
			>
				<img class="icon m-auto h-14 rounded-lg" draggable="false" :src=desktopIcon.imagedata>
				<p class="name text-center">{{ desktopIcon.iconname }}</p>
			</div>
		</div>
		<div id="taskbar" class="w-full h-12 bg-slate-800 bg-opacity-40 backdrop-blur flex justify-between">
			<div id="left">
				<LogoIcon class="p-2 h-12 w-12"/>
			</div>
			<div id="tasks" class="grow">

			</div>
			<div id="tray">
				<div id="timeContainer" class="text-center flex justify-center flex-col items-center leading-5 px-2 h-full">
					<p id="date"></p>
					<p id="time"></p>
				</div>
			</div> 
		</div>
	</div>
</template>
  
<script lang="ts">
import { desktopIcons } from '../icons';
import LogoIcon from './Logo.vue';

export default {
	name: 'DesktopContainer',
	components: {
		LogoIcon,
	},
	data() {
		return {
			desktopIcons
		}
	},
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
#icons {
	height: calc(100vh - var(--taskbar-height));
}
#taskbar {
	height: var(--taskbar-height);
}
.name {
	text-shadow: 1px 1px 2px black;
}
</style>
  