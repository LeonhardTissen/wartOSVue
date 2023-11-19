export function conditionalClass(element: HTMLElement, className: string, condition: boolean): void {
	element.classList[condition ? 'add' : 'remove'](className);
}
