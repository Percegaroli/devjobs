import React from 'react';
import Container from '../../atoms/Container';
import Logo from '../../atoms/Logo';
import ThemeToggle from '../../molecules/ThemeToggle';
import styles from './Header.module.scss';

const Header: React.FC = () => (
  <header className={`${styles.Header}`}>
    <Container className={styles.Container}>
      <Logo />
      <ThemeToggle />
    </Container>

  </header>
);

export default Header;
