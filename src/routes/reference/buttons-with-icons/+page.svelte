<script lang="ts">
    import Code from '$lib/components/code/Code.svelte';

    const withVisibleTextLabelHtml = `<button>
    <svg aria-hidden="true"><!-- SVG content --></svg>
    Undo
</button>

<!-- Or using <img /> -->

<button>
    <img src="image.webp" alt="" />
    Undo
</button>`;

    const withVisuallyHiddenTextLabelHtml = `<button aria-labelledby="undo-button-label">
    <svg aria-hidden="true"><!-- SVG content --></svg>
    <span id="undo-button-label" hidden>Undo</span>
</button>

<!-- Or using <img /> -->

<button>
    <img src="image.webp" alt="Undo" />
</button>`;
</script>

<svelte:head>
    <title>Buttons with icons - Accessibility Cheatsheet</title>
</svelte:head>

<main>
    <h1 class="mt-l-xl">Buttons with icons</h1>
    <h2 class="mt-l-xl">With visible text label</h2>
    <div class="mt-xs">
        <Code code={withVisibleTextLabelHtml} lang="html" />
    </div>
    <h2 class="mt-l-xl">With visually hidden text label</h2>
    <div class="mt-xs">
        <Code code={withVisuallyHiddenTextLabelHtml} lang="html" />
    </div>
</main>
