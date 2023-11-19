import { conditionalClass } from './utils/dom';
import { changePx } from './utils/px';

const touchSnapMargin = 32;
const mouseSnapMargin = 16;

document.body.addEventListener('mousemove', (ev) => {
	if (ev.buttons !== 1) {
		removeAllDragging();
		return;
	}

	document.querySelectorAll<HTMLElement>('.dragging').forEach((element) => {
		element.style.left = changePx(element.style.left, ev.movementX);
		element.style.top = changePx(element.style.top, ev.movementY);

		element.classList.remove('maximized');

		conditionalClass(element, 'snapleft', ev.clientX < mouseSnapMargin);
		conditionalClass(element, 'snapright', ev.clientX > window.innerWidth - mouseSnapMargin);
		conditionalClass(element, 'maximized', ev.clientY < mouseSnapMargin);
	});
});

function removeAllDragging(): void {
	document.querySelectorAll<HTMLElement>('.dragging').forEach((element) => {
		element.classList.remove('dragging');
	});
}

document.body.addEventListener('pointerup', removeAllDragging);

const lastTouchPos = {
	x: 0,
	y: 0
};

document.body.addEventListener('touchstart', (ev) => {
	const touch = ev.touches[0];

	lastTouchPos.x = touch.clientX;
	lastTouchPos.y = touch.clientY;
});

document.body.addEventListener('touchmove', (ev) => {
	const touch = ev.touches[0];

	const touchDiff = {
		x: touch.clientX - lastTouchPos.x,
		y: touch.clientY - lastTouchPos.y,
	};

	document.querySelectorAll<HTMLElement>('.dragging').forEach((element) => {
		element.style.left = changePx(element.style.left, touchDiff.x);
		element.style.top = changePx(element.style.top, touchDiff.y);

		conditionalClass(element, 'snapleft', touch.clientX < touchSnapMargin);
		conditionalClass(element, 'snapright', touch.clientX > window.innerWidth - touchSnapMargin);
		conditionalClass(element, 'maximized', touch.clientY < touchSnapMargin);
	});

	lastTouchPos.x = touch.clientX;
	lastTouchPos.y = touch.clientY;
});
