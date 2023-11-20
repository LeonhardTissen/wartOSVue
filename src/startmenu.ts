export function showStartMenu() {
	const startMenu = document.getElementById('startmenu') as HTMLElement;
	startMenu.style.display = 'flex';
}

export function hideStartMenu() {
	const startMenu = document.getElementById('startmenu') as HTMLElement;
	startMenu.style.display = 'none';
}
