<script lang="ts">
    import { createECInstance } from '$lib/components/code/state.svelte';
    import '$styles/global.css';

    const { children } = $props();

    const { styleContent, scriptContent } = await createECInstance();
</script>

<svelte:head>
    <title>Accessibility Cheatsheet</title>
</svelte:head>

<div class="wrapper">
    {@render children()}
</div>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html `<style> ${styleContent} </style>`}

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html `<script type="module">${scriptContent}</script>`}
