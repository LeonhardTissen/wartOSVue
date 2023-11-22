import { desktopIcons } from "./icons";

export function showStartMenu() {
	const startMenu = document.getElementById('startmenu') as HTMLElement;
	startMenu.style.display = 'flex';

	const inputElement = document.querySelector('#searchbar input') as HTMLInputElement;
	inputElement.value = '';
	updateSearch('');
	setTimeout(() => {
		inputElement.focus();
	});
}

export function hideStartMenu() {
	const startMenu = document.getElementById('startmenu') as HTMLElement;
	startMenu.style.display = 'none';
}
window.hideStartMenu = hideStartMenu;

export function updateSearch(searchQuery: string) {
	const searchresults = document.getElementById('searchresults') as HTMLElement;
	searchresults.innerText = '';

	const matchingDesktopIcons = desktopIcons.filter((desktopIcon) => {
		const { iconname, category } = desktopIcon;
		const searchString = (iconname + category).toLowerCase();
		return searchString.includes(searchQuery);
	});

	matchingDesktopIcons.forEach((desktopIcon) => {
		const program = JSON.stringify(desktopIcon).replaceAll('"', "'");
		searchresults.innerHTML += /*html*/`
		<div id="" class="p-2 flex items-center gap-2 hover:bg-white hover:bg-opacity-10 cursor-pointer"
			onclick="launchProgram(${program}); hideStartMenu();"
		>
			<img src="/icons/${desktopIcon.imagedata}" class="rounded-lg h-8 w-8">
			<p>${desktopIcon.iconname}</p>
		</div>
		`
	});
}
