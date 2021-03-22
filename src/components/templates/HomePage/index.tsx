import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Header from '../../UI/organisms/Header';
import JobCardList from '../../UI/organisms/JobCardList';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.Container} ${styles[theme]}`}>
      <Header />
      <JobCardList
        className={styles.JobCardList}
      />
    </div>
  );
};
export default HomePage;
