import React from 'react';
import UseResolution from '../../../../hooks/UseResolution';
import Logo from '../../atoms/Logo';
import ThemeToggle from '../../molecules/ThemeToggle';
import FilterBar from '../FilterBar';
import styles from './Header.module.scss';
import { HeaderProps } from './interface';

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { setJobs } = props;
  const resolution = UseResolution();
  console.log(resolution);
  return (
    <div className={`${styles.Header} ${styles[resolution]}`}>
      <div className={styles.Container}>
        <Logo />
        <ThemeToggle />
      </div>
      {/* }
      <div className={styles.FilterBarContainer}>
        <FilterBar
          setJobs={setJobs}
          className={styles.FilterBar}
        />
      </div>
  */}
    </div>
  );
};

export default Header;
