<script>
    import { resolve } from '$app/paths';
</script>

<svelte:head>
    <title>Changelog - Accessibility Cheatsheet</title>
</svelte:head>

<main>
    <h1 class="mt-l-xl">Changelog</h1>
    <ul role="list" class="mt-l-xl flow" style="--flow-space: var(--space-l-xl);">
        <li>
            <h2><time datetime="2026-01-01">January 1, 2026</time></h2>
            <p class="mt-xs">
                Added <a href={resolve('/reference/icon-buttons')}>Icon buttons</a> reference page with
                2 entries:
            </p>
            <ul class="mt-2xs">
                <li>With visible text label</li>
                <li>With visually hidden text label</li>
            </ul>
        </li>
        <li>
            <h2><time datetime="2025-12-31">December 31, 2025</time></h2>
            <p class="mt-xs">
                Added <a href={resolve('/reference/site-wide-navigation')}>Site-wide navigation</a> reference
                page with a simple site-wide navigation entry
            </p>
        </li>
    </ul>
</main>
