import React, { useState } from 'react';
import { INITIAL_THEME_VALUE, ThemeContext } from '.';
import { Theme } from './interface';

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(INITIAL_THEME_VALUE.theme);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
