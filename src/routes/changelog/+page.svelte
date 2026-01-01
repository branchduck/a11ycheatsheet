<script>
    import { resolve } from '$app/paths';
</script>

<svelte:head>
    <title>Changelog - Accessibility Cheatsheet</title>
</svelte:head>

<main>
    <h1 class="mt-l-xl">Changelog</h1>

    <ul role="list" class="mt-l-xl">
        <li>
            <h2><time datetime="2025-12-31">December 31, 2025</time></h2>
            <p class="mt-xs">
                Added <a href={resolve('/reference/site-wide-navigation')}>Site-wide navigation</a> page
                with a simple site-wide navigation markup
            </p>
        </li>
    </ul>
</main>
