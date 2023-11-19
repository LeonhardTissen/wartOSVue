export function changePx(px: string, change: number): string {
	return `${parseInt(px.replace('px','')) + change}px`;
}
