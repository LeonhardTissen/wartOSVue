<template>
	<div id="taskbar" class="w-full bg-slate-800 bg-opacity-40 backdrop-blur flex justify-between">
		<div id="left">
			<LogoIcon @pointerdown="clickCornerButton" class="p-2 hover:bg-white hover:bg-opacity-10 cursor-pointer"/>
		</div>
		<div id="tasks" class="grow"></div>
		<div id="tray">
			<TimeDate/>
		</div>
	</div>
</template>

<script lang="ts">
import { hideStartMenu, showStartMenu } from '@/startmenu';
import LogoIcon from './Logo.vue';
import TimeDate from './TimeDate.vue';

export default {
	name: 'TaskbarElement',
	components: {
		LogoIcon,
		TimeDate,
	},
	methods: {
		clickCornerButton() {
			const startmenu = document.getElementById('startmenu') as HTMLElement;
			if (startmenu.style.display !== 'flex') {
				showStartMenu();
			} else {
				hideStartMenu();
			}
		}
	}
}
</script>

<style scoped>
#taskbar {
	background-color: var(--main);
	height: var(--taskbar-height);
}
</style>
