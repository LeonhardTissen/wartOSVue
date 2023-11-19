<template>
	<div id="desktop" class="flex flex-col flex-wrap overflow-hidden h-screen">
		<div id="icons" class="relative flex grow flex-col flex-wrap content-start gap-1 select-none p-2">
			<div id="windows" class="absolute top-0 left-0 w-full h-full pointer-events-none"></div>
			<a :href="desktopIcon.url.replace('+', '')"
				class="link w-28 h-28 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-lg p-1"
				v-for="desktopIcon in desktopIcons.sort((a, b) => a.iconname.localeCompare(b.iconname))"
				:key="'/icons/' + desktopIcon.iconname"
				@click.prevent="launchProgram({ ...desktopIcon })"
			>
				<img class="icon m-auto h-14 rounded-lg pointer-events-none" :src=desktopIcon.imagedata>
				<p class="name text-center">{{ desktopIcon.iconname }}</p>
			</a>
		</div>
		<TaskbarElement/>
	</div>
</template>
  
<script lang="ts">
import { launchProgram } from '../window';
import { desktopIcons } from '../icons';
import TaskbarElement from './Taskbar.vue';

export default {
	name: 'DesktopContainer',
	components: {
		TaskbarElement
	},
	data() {
		return {
			desktopIcons,
			launchProgram
		}
	},
}
</script>
	
<style scoped>
#icons {
	height: calc(100vh - var(--taskbar-height));
}
.name {
	text-shadow: 1px 1px 2px black;
}
</style>
  