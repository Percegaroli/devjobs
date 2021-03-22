import React, { useState } from 'react';
import { ThemeContext } from '.';
import { Theme } from './interface';

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('LightTheme');

  return (
    <ThemeContext.Provider value={{ theme, changeTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
