<script lang="ts">
    import { resolve } from '$app/paths';
</script>

<svelte:head>
    <title>Accessibility Cheatsheet</title>
</svelte:head>

<main class="mt-l-xl">
    <h1>Accessibility Cheatsheet</h1>
    <h2 class="mt-l-xl">Tutorials</h2>
    <p class="mt-xs">Work in Progress</p>
    <h2 class="mt-l-xl">How-to guides</h2>
    <p class="mt-xs">Work in Progress</p>
    <h2 class="mt-l-xl">Reference</h2>
    <ul class="mt-xs flow" style="--flow-space: var(--space-2xs);">
        <li><a href={resolve('/reference/site-wide-navigation')}>Site-wide navigation</a></li>
        <li><a href={resolve('/reference/buttons-with-icons')}>Buttons with icons</a></li>
    </ul>
    <h2 class="mt-l-xl">Explanation</h2>
    <p class="mt-xs">Work in Progress</p>
</main>
