<script lang="ts">
    import { resolve } from '$app/paths';
    import { isCurrentPage } from '$lib/utils/path';
</script>

<nav>
    <ul role="list">
        <li>
            <a href={resolve('/')} aria-current={isCurrentPage('/')}>Home</a>
        </li>
    </ul>
</nav>
