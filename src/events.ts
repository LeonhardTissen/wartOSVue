import { conditionalClass } from './utils/dom';
import { changePx } from './utils/px';

document.body.addEventListener('mousemove', (ev) => {
	if (ev.buttons !== 1) {
		removeAllDragging();
		return;
	}

	document.querySelectorAll<HTMLElement>('.dragging').forEach((element) => {
		element.style.left = changePx(element.style.left, ev.movementX);
		element.style.top = changePx(element.style.top, ev.movementY);

		element.classList.remove('maximized');

		conditionalClass(element, 'snapleft', ev.clientX < 10);
		conditionalClass(element, 'snapright', ev.clientX > window.innerWidth - 10);
		conditionalClass(element, 'maximized', ev.clientY < 10);
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

		element.classList.remove('maximized');
	});

	lastTouchPos.x = touch.clientX;
	lastTouchPos.y = touch.clientY;
});
