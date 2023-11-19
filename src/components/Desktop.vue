<template>
	<div id="desktop" class="flex flex-col flex-wrap h-screen content-start gap-1 select-none p-4">
		<div class="link w-28 h-28 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-lg p-1" v-for="desktopIcon in desktopIcons.sort((a, b) => a.iconname.localeCompare(b.iconname))" :key="desktopIcon.iconname">
			<img class="icon m-auto h-14" draggable="false" :src=desktopIcon.imagedata>
			<p class="name text-center">{{ desktopIcon.iconname }}</p>
		</div>
	</div>
</template>
  
<script lang="ts">
import { desktopIcons } from '../icons';
export default {
	name: 'DesktopContainer',
	data() {
		return {
			desktopIcons
		}
	}
}
</script>
	
<style scoped>
</style>
  