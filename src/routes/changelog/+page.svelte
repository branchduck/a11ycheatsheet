<script>
    import { resolve } from '$app/paths';
</script>

<svelte:head>
    <title>Changelog - Accessibility Cheatsheet</title>
</svelte:head>

<main class="mt-l-xl">
    <h1>Changelog</h1>
    <ul role="list" class="mt-l-xl flow" style="--flow-space: var(--space-l-xl);">
        <li>
            <h2><time datetime="2026-01-03">January 3, 2026</time></h2>
            <p class="mt-xs">
                Added <a href={resolve('/resources')}>Resources</a> page with 12 initial links:
            </p>
            <ul class="mt-2xs">
                <li>Access * Ability</li>
                <li>Accessibility Support</li>
                <li>Accessibility Weekly</li>
                <li>Adrian Roselli</li>
                <li>Ben Myers</li>
                <li>Converge Accessibility</li>
                <li>Dennis Deacon</li>
                <li>Eric Bailey</li>
                <li>Practical Accessibility with Sara Soueidan course</li>
                <li>TetraLogical</li>
                <li>Tink - Léonie Watson</li>
                <li>WebAIM</li>
            </ul>
        </li>
        <li>
            <h2><time datetime="2026-01-01">January 1, 2026</time></h2>
            <p class="mt-xs">
                Added <a href={resolve('/reference/buttons-with-icons')}>Buttons with icons</a> reference
                page with 2 entries:
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
