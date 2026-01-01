<script lang="ts">
    import { resolve } from '$app/paths';
    import { isCurrentPage } from '$lib/utils/path';
</script>

<footer class="py-xs repel">
    <ul role="list">
        <li>
            <a href={resolve('/changelog')} aria-current={isCurrentPage('/changelog')}>Changelog</a>
        </li>
    </ul>
    <p>© Accessibility Cheatsheet, 2025 - 2026</p>
</footer>
