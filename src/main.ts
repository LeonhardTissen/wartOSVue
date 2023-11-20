import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import './events';
import './theme';
import { DesktopIcon } from './icons';

declare global {
	interface Window {
		launchProgram?: (program: DesktopIcon) => void;
		hideStartMenu?: () => void;
	}
}


createApp(App).mount('#app');
