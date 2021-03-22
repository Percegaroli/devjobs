import React, { useContext } from 'react';
import Image from 'next/image';
import { ThemeContext } from '../../../context/ThemeContext';
import { Theme } from '../../../context/ThemeContext/interface';
import Toggle from '../../atoms/Toggle';
import styles from './ThemeToggle.module.scss';

const ThemeToggle: React.FC = () => {
  const { changeTheme, theme } = useContext(ThemeContext);
  const temas: [Theme, Theme] = ['LightTheme', 'DarkTheme'];
  return (
    <div className={styles.Container}>
      <Image
        src="/desktop/icon-sun.svg"
        width={20}
        height={18.6}
      />
      <Toggle
        values={temas}
        value={theme}
        changeValue={changeTheme}
        className={styles.ThemeToggle}
      />
      <Image
        src="/desktop/icon-moon.svg"
        width={12}
        height={12}
      />
    </div>

  );
};

export default ThemeToggle;
