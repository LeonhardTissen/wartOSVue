import { changePx } from './utils/px';

document.body.addEventListener('mousemove', (ev) => {
	document.querySelectorAll<HTMLElement>('.dragging').forEach((element) => {
		element.style.left = changePx(element.style.left, ev.movementX);
		element.style.top = changePx(element.style.top, ev.movementY);

		element.classList.remove('maximized');
	});
});

document.body.addEventListener('pointerup', () => {
	document.querySelectorAll<HTMLElement>('.dragging').forEach((element) => {
		element.classList.remove('dragging');
	});
});

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
