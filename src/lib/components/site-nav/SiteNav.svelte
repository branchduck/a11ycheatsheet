<script lang="ts">
    import { page } from '$app/state';
    import { resolve } from '$app/paths';

    function isCurrentPage(path: string): 'page' | undefined {
        return page.url.pathname === path ? 'page' : undefined;
    }
</script>

<nav>
    <ul role="list">
        <li>
            <a href={resolve('/')} aria-current={isCurrentPage('/')}>Home</a>
        </li>
    </ul>
</nav>
