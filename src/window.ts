import { DesktopIcon } from './icons';

const windowNewOffset = 30;
let windowX: number = 0;
let windowY: number = 0;
let windowZIndex: number = 1;

export function launchProgram(program: DesktopIcon): void {
	// URLs starting with + means open in a new tab because CORS is unhappy
	let url: string = program.url;
	if (program.url.startsWith('+')) {
		const trimmedUrl = program.url.replace('+', '');
		window.open(trimmedUrl, '_blank');
		return;
	} else if (program.url.startsWith('/')) {
		url = 'https://warze.org' + url;
	}

	windowX += windowNewOffset;
	windowY += windowNewOffset;
	windowZIndex ++;

	const windowContainer = document.createElement('div');
	windowContainer.classList.add('rounded-lg', 'bg-slate-800', 'bg-opacity-40', 'backdrop-blur', 'fixed', 'flex', 'flex-col', 'resize-both');
	windowContainer.style.width = `${program.width}px`;
	windowContainer.style.height = `${program.height}px`;
	windowContainer.style.top = `${windowY}px`;
	windowContainer.style.left = `${windowX}px`;

	// The top bar will all the action buttons
	const windowActions = document.createElement('div');
	windowActions.classList.add('h-8', 'flex', 'justify-between', 'flex-row');
	windowContainer.appendChild(windowActions);

	// The name of the window
	const windowName = document.createElement('p');
	windowName.classList.add('p-2')
	windowName.innerText = program.windowname;
	windowActions.appendChild(windowName);

	// The content of the window, holding the iframe
	const windowContent = document.createElement('div');
	windowContent.classList.add('grow');
	windowContainer.appendChild(windowContent);

	// An iframe to the page
	const windowIFrame = document.createElement('iframe');
	windowIFrame.classList.add('border-none', 'outline-none', 'origin-top-left')
    windowIFrame.src = url;
    windowIFrame.width = `${100 / program.zoom}%`;
    windowIFrame.height = `${100 / program.zoom}%`;
    windowIFrame.style.transform = `scale(${program.zoom})`;
    windowContent.appendChild(windowIFrame);

	document.body.appendChild(windowContainer);

	console.log(program);
}
