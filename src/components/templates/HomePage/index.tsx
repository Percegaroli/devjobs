import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import FilterBar from '../../UI/organisms/FilterBar';
import Header from '../../UI/organisms/Header';
import JobCardList from '../../UI/organisms/JobCardList';
import styles from './HomePageTemplate.module.scss';
import { HomePageTemplateProps, SearchParams } from './interface';

const HomePageTemplate = (props: HomePageTemplateProps) => {
  const { jobs, setJobs, selectJob } = props;
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useState<SearchParams>({
    fullTime: false,
    location: '',
    search: '',
  });
  const { theme } = useContext(ThemeContext);

  const onSearch = (params: SearchParams) => {
    setSearchParams(params);
    setPage(1);
  };

  const incrementPage = () => {
    setPage(page + 1);
  };

  return (
    <div className={`${styles.Container} ${styles[theme]}`}>
      <Header />
      <FilterBar
        setJobs={setJobs}
        className={styles.FilterBar}
        setSearchParams={onSearch}
      />
      <JobCardList
        className={styles.JobCardList}
        jobs={jobs}
        setJobs={setJobs}
        selectJob={selectJob}
        filterParams={searchParams}
        page={page}
        incrementPage={incrementPage}
      />
    </div>
  );
};
export default HomePageTemplate;
