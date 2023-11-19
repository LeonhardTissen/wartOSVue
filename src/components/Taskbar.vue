<template>
	<div id="taskbar" class="w-full h-12 bg-slate-800 bg-opacity-40 backdrop-blur flex justify-between">
		<div id="left">
			<LogoIcon class="p-2 h-12 w-12"/>
		</div>
		<div id="tasks" class="grow">

		</div>
		<div id="tray">
			<TimeDate/>
		</div>
	</div>
</template>

<script lang="ts">
import LogoIcon from './Logo.vue';
import TimeDate from './TimeDate.vue';

export default {
	name: 'TaskbarElement',
	components: {
		LogoIcon,
		TimeDate,
	}
}
</script>
