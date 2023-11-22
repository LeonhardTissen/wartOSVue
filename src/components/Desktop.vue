<template>
	<div id="desktop" class="flex flex-col flex-wrap overflow-hidden" style="height: 100svh">
		<DesktopIcons/>
		<StartMenu/>
		<TaskbarElement/>
	</div>
</template>
  
<script lang="ts">
import TaskbarElement from './Taskbar.vue';
import StartMenu from './StartMenu.vue';
import DesktopIcons from './DesktopIcons.vue';

export default {
	name: 'DesktopContainer',
	components: {
		TaskbarElement,
		StartMenu,
		DesktopIcons,
	},
}
</script>
