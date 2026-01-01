<script lang="ts">
    import Code from '$lib/components/code/Code.svelte';

    const withVisibleTextLabelHtml = `<button>
    <svg aria-hidden="true"><!-- SVG content --></svg>
    Undo
</button>`;

    const withVisuallyHiddenTextLabelHtml = `<button aria-labelledby="undo-button-label">
    <svg aria-hidden="true"><!-- SVG content --></svg>
    <span id="undo-button-label" hidden>Undo</span>
</button>`;
</script>

<svelte:head>
    <title>Icon buttons - Accessibility Cheatsheet</title>
</svelte:head>

<main>
    <h1 class="mt-l-xl">Icon buttons</h1>

    <h2 class="mt-l-xl">With visible text label</h2>
    <div class="mt-xs">
        <Code code={withVisibleTextLabelHtml} language="html" />
    </div>

    <h2 class="mt-l-xl">With visually hidden text label</h2>
    <div class="mt-xs">
        <Code code={withVisuallyHiddenTextLabelHtml} language="html" />
    </div>
</main>
