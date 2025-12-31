<script lang="ts">
    import Code from '$lib/components/code/Code.svelte';

    const simpleNavHtml = `<nav>
    <ul role="list">
        <li><a href="/products" aria-current="page">Products</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>`;
</script>

<svelte:head>
    <title>Site-wide navigation | Accessibility Cheatsheet</title>
</svelte:head>

<main>
    <h1>Site-wide navigation</h1>

    <h2>Simple</h2>
    <Code code={simpleNavHtml} language="html" />
</main>
