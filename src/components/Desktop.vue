<template>
	<div id="desktop" class="flex flex-col flex-wrap overflow-hidden" style="height: 100svh">
		<div id="icons" @click="hideStartMenu" class="relative flex grow flex-col flex-wrap content-start gap-1 select-none p-2">
			<div id="windows" class="absolute top-0 left-0 w-full h-full pointer-events-none"></div>
			<a :href="desktopIcon.url.replace('+', '')"
				class="link w-28 h-28 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-lg p-1"
				v-for="desktopIcon in desktopIcons.sort((a, b) => a.iconname.localeCompare(b.iconname))"
				:key="desktopIcon.iconname"
				@click.prevent="launchProgram({ ...desktopIcon })"
			>
				<img class="icon m-auto h-14 rounded-lg pointer-events-none" :src="'/icons/' + desktopIcon.imagedata">
				<p class="name text-center">{{ desktopIcon.iconname }}</p>
			</a>
		</div>
		<StartMenu/>
		<TaskbarElement/>
	</div>
</template>
  
<script lang="ts">
import { launchProgram } from '../window';
import { desktopIcons } from '../icons';
import TaskbarElement from './Taskbar.vue';
import StartMenu from './StartMenu.vue';
import { hideStartMenu } from '@/startmenu';

export default {
	name: 'DesktopContainer',
	components: {
		TaskbarElement,
		StartMenu
	},
	data() {
		return {
			desktopIcons,
			launchProgram
		}
	},
	methods: {
		hideStartMenu
	}
}
</script>
	
<style scoped>
#icons {
	height: calc(100svh - var(--taskbar-height));
}
.name {
	text-shadow: 1px 1px 2px black;
}
</style>
  