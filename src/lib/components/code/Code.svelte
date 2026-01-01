<script lang="ts">
    import { toHtml } from 'expressive-code/hast';
    import { ecInstance } from './state.svelte';

    interface Props {
        code: string;
        language: string;
    }

    const props: Props = $props();

    const renderedGroupAst = await ecInstance.render({
        code: props.code,
        language: props.language,
    });
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html toHtml(renderedGroupAst.renderedGroupAst)}
