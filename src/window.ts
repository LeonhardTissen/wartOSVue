import { DesktopIcon } from './icons';

const windowNewOffset = 30;
let windowX: number = 0;
let windowY: number = 0;
let windowZIndex: number = 0;
window.windowZIndex = windowZIndex;

export function launchProgram(program: DesktopIcon): false {
	// URLs starting with + means open in a new tab because CORS is unhappy
	let url: string = program.url;
	if (program.url.startsWith('+')) {
		const trimmedUrl = program.url.replace('+', '');
		window.open(trimmedUrl, '_blank');
		return false;
	} else if (program.url.startsWith('/')) {
		url = 'https://warze.org' + url;
	}
	
	windowX += windowNewOffset;
	windowY += windowNewOffset;

	const windows = document.getElementById('windows') as HTMLElement;
	const tasks = document.getElementById('tasks') as HTMLElement;

	const windowId = (Math.floor(Math.random() * (1e+20))).toString(36);
	const mobileView = window.innerWidth < 1080;
	const zoomPrc = `${100 / program.zoom}%`;

	const windowElement = document.createElement('div');
	windowElement.id = windowId;
	if (mobileView) {
		windowElement.classList.add('maximized');
	} else {
		windowElement.classList.add('programAnimation');
	}
	windowElement.classList.add('windowContainer', 'absolute', 'flex', 'flex-col', 'resize', 'pointer-events-auto', 'overflow-hidden', 'rounded-lg', 'bg-slate-800', 'bg-opacity-40', 'backdrop-blur')
	windowElement.style.width = `${program.width}px`;
	windowElement.style.height = `${program.height}px`;
	windowElement.style.top = `${windowY}px`;
	windowElement.style.left = `${windowX}px`;
	windowElement.style.zIndex = `${++windowZIndex}`;
	windowElement.style.minWidth = '300px';
	windowElement.style.minHeight = '30px';
	windowElement.innerHTML = /*html*/`
	<div class="${mobileView ? 'h-16' : 'h-8'} flex justify-between flex-row">
		<div class="grow flex flex-row items-center" onpointerdown="
			let windowElement = document.getElementById('${windowId}');
			windowElement.classList.add('dragging');
			windowElement.style.zIndex = ++windowZIndex;">
			<img src="/icons/${program.imagedata}" class="h-6 w-6 ml-1">
			<p class="p-1 select-none">${program.windowname}</p>
		</div>
		<div class="flex justify-center items-stretch h-full">
			<!-- Reload iframe -->
			<div class="hover:bg-white hover:bg-opacity-10 cursor-pointer flex items-center"
				onclick="document.getElementById('${windowId}iframe').src = document.getElementById('${windowId}iframe').src"
			>
				<svg width="50" height="20">
					<path d="M20,5 18,5 18,15 32,15 32,5 25,5 27,3 27,7 25,5" fill="none" stroke="white" stroke-linejoin="round" stroke-linecap="round" stroke-width="2"></path>
				</svg>
			</div>
			<!-- Fullscreen -->
			<div class="hover:bg-white hover:bg-opacity-10 cursor-pointer flex items-center"
				onclick="document.getElementById('${windowId}iframe').requestFullscreen();"
			>
				<svg width="50" height="20">
					<path d="M29,5 32,5 32,8 M32,12 32,15 29,15 M21,5 18,5 18,8 M18,12 18,15 21,15" fill="none" stroke="white" stroke-linejoin="round" stroke-linecap="round" stroke-width="2"></path>
				</svg>
			</div>
			<!-- Minimize window -->
			<div class="hover:bg-white hover:bg-opacity-10 cursor-pointer flex items-center"
				onclick="document.getElementById('${windowId}').classList.add('minimized')";
			>
				<svg width="50" height="20">
					<path d="M20,10 30,10" fill="none" stroke="white" stroke-linejoin="round" stroke-linecap="round" stroke-width="2"></path>
				</svg>
			</div>
			<!-- Maximize window -->
			<div class="hover:bg-white hover:bg-opacity-10 cursor-pointer flex items-center"
				onclick="document.getElementById('${windowId}').classList.toggle('maximized')";
			>
				<svg width="50" height="20">
					<path d="M18,5 32,5 32,15 18,15 18,5" fill="none" stroke="white" stroke-linejoin="round" stroke-linecap="round" stroke-width="2"></path>
				</svg>
			</div>
			<!-- Close window -->
			<div class="hover:bg-red-500 cursor-pointer flex items-center"
				onclick="document.getElementById('${windowId}').remove(); document.getElementById('${windowId}task').remove();"
			>
				<svg width="50" height="20">
					<path d="M20,5 30,15 M30,5 20,15 25" fill="none" stroke="white" stroke-linejoin="round" stroke-linecap="round" stroke-width="2"></path>
				</svg>
			</div>
		</div>
	</div>
	<div class="grow">
		<iframe id="${windowId}iframe" src="${url}" class="border-none outline-none origin-top-left"
			style="width: ${zoomPrc}; height: ${zoomPrc}; transform: scale(${program.zoom});"
		></iframe>
	</div>
	`;
	windows.appendChild(windowElement);


	const taskElement = document.createElement('div');
	taskElement.id = `${windowId}task`;

	taskElement.innerHTML = /*html*/`
	<div class="taskContainer flex h-full items-center border-l-2 bg-white bg-opacity-5 hover:bg-opacity-10 cursor-pointer"
		onpointerdown="
			let windowElement = document.getElementById('${windowId}');
			windowElement.style.zIndex = ++windowZIndex;
			windowElement.classList.remove('minimized');
		">
		<img class="h-full p-2" draggable="false" src="/icons/${program.imagedata}">
		<p class="whitespace-nowrap select-none">${program.windowname}</p>
	</div>
	`

	tasks.appendChild(taskElement);


	return false;
}

window.launchProgram = launchProgram;
