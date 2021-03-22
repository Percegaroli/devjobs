import React from 'react';
import ThemeProvider from '../../context/ThemeContext/Provider';
import Header from '../../UI/organisms/Header';

const HomePage = () => (
  <ThemeProvider>
    <Header />
  </ThemeProvider>

);

export default HomePage;
