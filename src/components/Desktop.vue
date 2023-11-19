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
		<div id="windows" class="fixed top-0 left-0 w-full h-full pointer-events-none"></div>
		<TaskbarElement/>
	</div>
</template>
  
<script lang="ts">
import { desktopIcons } from '../icons';
import TaskbarElement from './Taskbar.vue';

export default {
	name: 'DesktopContainer',
	components: {
		TaskbarElement
	},
	data() {
		return {
			desktopIcons
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
  