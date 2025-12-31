<script lang="ts">
    import { createECInstance } from '$lib/components/code/state.svelte';

    const { children } = $props();

    const { styleContent, scriptContent } = await createECInstance();
</script>

<svelte:head>
    <title>Accessibility Cheatsheet</title>
</svelte:head>

{@render children()}

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html `<style> ${styleContent} </style>`}

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html `<script type="module">${scriptContent}</script>`}
