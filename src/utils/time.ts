export function formatDate(date: Date): string {
	return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

export function formatTime(date: Date): string {
	const hours = date.getHours().toString().padStart(2, '0');
	const minutes = date.getMinutes().toString().padStart(2, '0');
	return `${hours}:${minutes}`;
}
