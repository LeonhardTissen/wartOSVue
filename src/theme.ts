let theme = null;

interface Theme {
	name: string;
	color: string;
	invert: 0 | 1;
}

const themeKey = 'wartOS-theme';
const savedTheme = localStorage.getItem(themeKey);
if (savedTheme !== null) {
	theme = JSON.parse(savedTheme);
	setTheme(theme);
}

window.addEventListener('message', function (ev) {
	if (typeof ev.data !== 'string' || !ev.data.startsWith('{')) return;

	const theme = JSON.parse(ev.data);
	delete theme['type'];

	localStorage.setItem(themeKey, JSON.stringify(theme));
	setTheme(theme);
});

function setTheme(theme: Theme): void {
	if (theme === undefined || theme.name === undefined) return;
	document.documentElement.style.setProperty('--invert', `${theme.invert}`);
	document.documentElement.style.setProperty('--main', theme.invert ? '#DDDDDD80' : '#1e293b80');
	const themeBackgroundUrl = `https://warze.org/wartos/workshop/theme/${theme.name}?source=1`;
	document.body.style.backgroundImage = `url(${themeBackgroundUrl})`;
}
