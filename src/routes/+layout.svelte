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
    <div>
        {@render children()}
    </div>
    <SiteFooter />
</div>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html `<style> ${styleContent} </style>`}

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html `<script type="module">${scriptContent}</script>`}

<style>
    .site-wrapper {
        min-height: 100svh;
        width: min(720px, 100% - 32px);
        margin-inline: auto;
        display: grid;
        grid-template-rows: auto 1fr auto;

        > :global(*) {
            /* Respect the grid column width and allow grid item to shrink */
            min-width: 0;
        }
    }
</style>
