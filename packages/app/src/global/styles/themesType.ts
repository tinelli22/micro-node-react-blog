import jsonthemes from './themes.json';

const keyThemes = {
    light: 'light',
    dark: 'dark'
} as const;

export type ThemeType = keyof typeof keyThemes;

export type ThemeObjectType = typeof jsonthemes.dark