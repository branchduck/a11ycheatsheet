<script lang="ts">
    import { createECInstance } from '$lib/components/code/state.svelte';
    import SiteFooter from '$lib/components/site-footer/SiteFooter.svelte';
    import SiteHeader from '$lib/components/site-header/SiteHeader.svelte';
    import '$styles/global.css';

    const { children } = $props();

    const { styleContent, scriptContent } = await createECInstance();
</script>

<svelte:head>
    <title>Accessibility Cheatsheet</title>
</svelte:head>

<div class="site-wrapper">
    <SiteHeader />
    {@render children()}
    <SiteFooter />
</div>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html `<style> ${styleContent} </style>`}

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html `<script type="module">${scriptContent}</script>`}
