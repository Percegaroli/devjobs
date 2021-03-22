import { createContext } from 'react';
import { IThemeContext } from './interface';

export const INITIAL_THEME_VALUE: IThemeContext = {
  theme: 'LightTheme',
  changeTheme: () => {},
};

export const ThemeContext = createContext<IThemeContext>(INITIAL_THEME_VALUE);

export default {};
