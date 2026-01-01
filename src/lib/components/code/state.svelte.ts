import { ExpressiveCode } from 'expressive-code';

export let ecInstance: ExpressiveCode;

export async function createECInstance(): Promise<{
    styleContent: string;
    scriptContent: string;
}> {
    if (!(ecInstance instanceof ExpressiveCode)) {
        ecInstance = new ExpressiveCode();
    }

    const baseStyles = await ecInstance.getBaseStyles();
    const themeStyles = await ecInstance.getThemeStyles();
    const jsModules = await ecInstance.getJsModules();

    return {
        styleContent: [baseStyles, themeStyles].join(''),
        scriptContent: [...jsModules].join(''),
    };
}
