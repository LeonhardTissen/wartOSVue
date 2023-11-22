<template>
	<div id="icons" @click="hideStartMenu" class="relative flex grow flex-col flex-wrap content-start gap-1 select-none p-2">
		<div id="windows" class="absolute top-0 left-0 w-full h-full pointer-events-none"></div>
		<a :href="desktopIcon.url.replace('+', '')"
			class="link w-28 h-28 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded-lg p-1"
			v-for="desktopIcon in desktopIcons.sort((a, b) => a.iconname.localeCompare(b.iconname))"
			:key="desktopIcon.iconname"
			@click.prevent="launchProgram({ ...desktopIcon })"
		>
		<div class="relative w-14 h-14 m-auto pointer-events-none">
			<img class="icon rounded-lg pointer-events-none" :src="'/icons/' + desktopIcon.imagedata">
			<img v-if="!('zoom' in desktopIcon)" class="absolute bottom-0 left-0" src="/icons/external.png">
		</div>
		<p class="name text-center">{{ desktopIcon.iconname }}</p>
	</a>
</div>
</template>

<script lang="ts">
import { hideStartMenu } from '@/startmenu';
import { launchProgram } from '@/window';
import { desktopIcons } from '@/icons';

export default {
	name: 'DesktopIcons',
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
