import React, { useEffect, useState } from 'react';
import { INITIAL_THEME_VALUE, ThemeContext } from '.';
import { Theme } from './interface';

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(INITIAL_THEME_VALUE.theme);

  const getUserPreferedTheme = () => {
    if (typeof window !== 'undefined') {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'DarkTheme';
      }
    }
    return 'LightTheme';
  };

  useEffect(() => {
    setTheme(getUserPreferedTheme());
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
