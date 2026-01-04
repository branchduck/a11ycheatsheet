<script lang="ts">
    import { codeToHtml } from '$lib/vendor/shiki.bundle';

    interface Props {
        code: string;
        lang: string;
    }

    const props: Props = $props();

    const htmlContent = await codeToHtml(props.code, {
        lang: props.lang,
        themes: {
            light: 'github-light',
        },
    });
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html htmlContent}

<style>
    :global(.shiki) {
        margin: 0;
        padding: 16px 20px;
        overflow-x: auto;
        font-size: 0.85em;
        line-height: 1.65;
    }
</style>
