<script lang="ts">
    const resources = [
        {
            title: 'Access * Ability',
            link: 'https://buttondown.com/access-ability',
        },
        {
            title: 'Accessibility Support',
            link: 'https://a11ysupport.io/',
        },
        {
            title: 'Accessibility Weekly',
            link: 'https://a11yweekly.com/',
        },
        {
            title: 'Adrian Roselli',
            link: 'https://adrianroselli.com/',
        },
        {
            title: 'Ben Myers',
            link: 'https://benmyers.dev/',
        },
        {
            title: 'Converge Accessibility',
            link: 'https://convergeaccessibility.com/',
        },
        {
            title: 'Dennis Deacon',
            link: 'https://www.dennisdeacon.com/',
        },
        {
            title: 'Eric Bailey',
            link: 'https://ericwbailey.design/',
        },
        {
            title: 'Practical Accessibility with Sara Soueidan course',
            link: 'https://practical-accessibility.today/',
        },
        {
            title: 'TetraLogical',
            link: 'https://tetralogical.com/',
        },
        {
            title: 'Tink - Léonie Watson',
            link: 'https://tink.uk/',
        },
        {
            title: 'WebAIM',
            link: 'https://webaim.org/',
        },
    ];
</script>

<svelte:head>
    <title>Resources - Accessibility Cheatsheet</title>
</svelte:head>

<main class="mt-l-xl">
    <h1>Resources</h1>
    <p class="mt-xs text-wrap-balance">
        Incredible projects, courses, groups, and people focusing on accessibility. In alphabetical
        order.
    </p>
    <ul class="mt-xs flow" style="--flow-space: var(--space-2xs);">
        {#each resources as resource (resource.link)}
            <li>
                <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
                <a href={resource.link} rel="external">{resource.title}</a>
            </li>
        {/each}
    </ul>
</main>
