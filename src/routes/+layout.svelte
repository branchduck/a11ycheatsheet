<script lang="ts">
    import SiteFooter from '$lib/components/site-footer/SiteFooter.svelte';
    import SiteHeader from '$lib/components/site-header/SiteHeader.svelte';
    import '$styles/global.css';

    const { children } = $props();
</script>

<svelte:head>
    <title>Accessibility Cheatsheet</title>
</svelte:head>

<div class="site-wrapper">
    <SiteHeader />
    <div>
        {@render children()}
    </div>
    <div class="mt-l-xl">
        <SiteFooter />
    </div>
</div>

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
