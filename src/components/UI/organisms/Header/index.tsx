import React from 'react';
import Logo from '../../atoms/Logo';
import ThemeToggle from '../../molecules/ThemeToggle';
import styles from './Header.module.scss';

const Header: React.FC = () => (
  <div className={styles.Header}>
    <Logo />
    <ThemeToggle />
  </div>
);

export default Header;
