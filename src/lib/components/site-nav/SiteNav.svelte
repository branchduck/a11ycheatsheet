<script lang="ts">
    import { resolve } from '$app/paths';
    import { isCurrentPage } from '$lib/utils/path';
</script>

<nav>
    <ul role="list" class="cluster">
        <li>
            <a href={resolve('/')} aria-current={isCurrentPage('/')}>Home</a>
        </li>
        <li>
            <a href={resolve('/resources')} aria-current={isCurrentPage('/resources')}>Resources</a>
        </li>
    </ul>
</nav>
