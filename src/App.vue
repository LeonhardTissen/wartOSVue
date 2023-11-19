<template>
	<Desktop/>
</template>

<script lang="ts">
import Desktop from './components/Desktop.vue';

export default {
	name: 'App',
	components: {
		Desktop
	}
}
</script>

<style>
@font-face {
	font-family: Geist;
	src: url(./assets/fonts/GeistVF.woff2) format(woff2);
}
:root {
	--main: #232324;
	--main-text: #FFF;
}
body {
	background-color: var(--main);
	color: var(--main-text);
	margin: 0;
}
#app {
	font-family: Geist, Helvetica, Arial, sans-serif;
	font-weight: 100;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
