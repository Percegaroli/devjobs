import React from 'react';
import UseResolution from '../../../../hooks/UseResolution';
import Logo from '../../atoms/Logo';
import ThemeToggle from '../../molecules/ThemeToggle';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const resolution = UseResolution();

  return (
    <div className={`${styles.Header} ${styles[resolution]}`}>
      <div className={styles.Container}>
        <Logo />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
