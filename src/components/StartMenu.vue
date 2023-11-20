<template>
	<div id="startmenu" class="absolute left-0 backdrop-blur flex-col justify-between hidden">
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
import { desktopIcons } from '@/icons';

export default {
	name: 'StartMenu',
	methods: {
		searchForIcons(ev: Event | null = null) {
			let searchQuery = '';

			if (ev !== null) {
				const target = ev.target as HTMLInputElement;
				searchQuery = target.value.toLowerCase();	
			}

			const searchresults = document.getElementById('searchresults') as HTMLElement;
			searchresults.innerText = '';

			const matchingDesktopIcons = desktopIcons.filter((desktopIcon) => {
				const { iconname, category, windowname } = desktopIcon;
				const searchString = (iconname + category + windowname).toLowerCase();
				return searchString.includes(searchQuery);
			});

			matchingDesktopIcons.forEach((desktopIcon) => {
				searchresults.innerHTML += /*html*/`
				<div id="" class="p-2 flex items-center gap-2 hover:bg-white hover:bg-opacity-10 cursor-pointer"
					onclick="launchProgram(${desktopIcon})"
				>
					<img src="/icons/${desktopIcon.imagedata}" class="rounded-lg h-8">
					<p>${desktopIcon.iconname}</p>
				</div>
				`
			});
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
