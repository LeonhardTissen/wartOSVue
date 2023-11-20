<template>
	<div id="startmenu" class="absolute left-0 backdrop-blur flex-col justify-between hidden origin-bottom-left">
		<div class="pt-8 px-10 flex flex-col">
			<div id="searchbar" class="bg-white rounded-sm p-2 flex flex-row gap-3">
				<img src="/icons/search.svg">
				<input @input="searchForIcons" placeholder="Type here to search" class="border-none outline-none text-black">
			</div>
			<div id="searchresults"></div>
		</div>
		<div id="startfooter" class="p-4 px-8 flex justify-between gap-4">
			<a class="flex gap-4 items-center" href="https://leonhard.warze.org/">
				<img src="/leo2_zoom_normal_48px.png" class="rounded-full h-8">
				<span>Leonhard Tissen</span>
			</a>
			<img src="/icons/shutdown-31.svg" class="h-8">
		</div>
	</div>
</template>

<script lang="ts">
import { updateSearch } from '@/startmenu';

export default {
	name: 'StartMenu',
	methods: {
		searchForIcons(ev: Event | null = null) {
			let searchQuery = '';

			if (ev !== null) {
				const target = ev.target as HTMLInputElement;
				searchQuery = target.value.toLowerCase();	
			}

			updateSearch(searchQuery);
		}
	},
	mounted() {
		this.searchForIcons(null);
	}
}
</script>

<style scoped>
#startmenu {
	background-color: var(--main);
	width: 500px;
	height: 500px;
	bottom: var(--taskbar-height);
}
#searchbar {
	border: none;
	border-bottom: 3px solid #4F90D1;
}
#startfooter {
	background-color: #0004;
	border-top: 1px solid #0008;
}
#searchresults {
	max-height: 360px;
	overflow-y: auto;
}
</style>
