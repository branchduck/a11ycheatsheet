import { page } from '$app/state';

export function isCurrentPage(path: string): 'page' | undefined {
    return page.url.pathname === path ? 'page' : undefined;
}
