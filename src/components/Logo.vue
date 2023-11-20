<template>
	<svg width="32" height="32" viewBox="0 0 4 4">
		<mask id="glasses">
			<rect x="0" y="0" width="4" height="4" fill="white"></rect>
			<path d="M 0 2 A 1 1, 0, 0, 0, 2 2 L 1 2 Z" fill="black"></path>
			<path d="M 2 2 A 1 1, 0, 0, 0, 4 2 L 1 2 Z" fill="black"></path>
		</mask>
		<circle cx="2" cy="2" r="2" mask="url(#glasses)" fill="white"></circle>
	</svg>
</template>

<script lang="ts">
export default {
	name: 'LogoIcon',
}
</script>

<style scoped>
svg {
	filter: invert(var(--invert));
	width: 100%;
	height: 100%;
}
</style>
