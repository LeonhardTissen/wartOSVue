<template>
	<div id="taskbar" class="w-view bg-slate-800 bg-opacity-40 backdrop-blur flex justify-between">
		<!-- Start menu with logo -->
		<div id="left" class="shrink-0">
			<LogoIcon @pointerdown="clickCornerButton" class="p-2 hover:bg-white hover:bg-opacity-10 cursor-pointer"/>
		</div>
		<!-- Container for tasks -->
		<div id="tasks" class="grow flex"></div>
		<!-- Time and date -->
		<div id="tray" class="shrink-0">
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
