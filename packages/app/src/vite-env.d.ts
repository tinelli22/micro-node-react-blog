/// <reference types="vite/client" />

import 'styled-components';
import { ThemeObjectType } from './global/styles/themesType';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeObjectType {}
}