import React, { useState } from 'react';
import { getGithubJobsProxy } from '../../../../service/GithubAPI';
import { mapAPIResponseToState } from '../../../../util/dataMapping/jobInfo';
import Card from '../../atoms/Card';
import IconButton from '../../atoms/IconButton';
import Input from '../../atoms/Input';
import FilterModal from '../FilterModal';
import styles from './FilterBar.module.scss';
import SearchIcon from './icon-search.svg';
import { FilterBarProps } from './interface';

const FilterBar = (props: FilterBarProps) => {
  const { className, setJobs } = props;
  const [jobFilter, setJobFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [fullTimeOnly, setFullTimeOnly] = useState(false);
  const [showingModal, setShowingModal] = useState(false);

  const fetchJobs = async () => {
    try {
      const response = await getGithubJobsProxy({
        fullTime: fullTimeOnly,
        location: locationFilter,
        search: jobFilter,
      });
      setJobs(mapAPIResponseToState(response.data));
      setShowingModal(false);
    } catch (err) {
      console.log('ainda não implementado');
    }
  };

  return (
    <div className={`${styles.Container} ${className}`}>
      <Card className={`${styles.Card}`}>
        <Input
          onChange={(event) => setJobFilter(event.target.value)}
          placeholder="Filter by title..."
          value={jobFilter}
        />
        <div className={styles.ButtonsContainer}>
          <IconButton
            imageSrc="/mobile/icon-filter.svg"
            alt="Filter icon"
            transparent
            onClick={() => setShowingModal(true)}
          />
          <IconButton
            buttonClassName={styles.SearchButton}
            alt="Search button icon"
            onClick={fetchJobs}
            Icon={<SearchIcon className={styles.SearchIcon} />}
          />
        </div>
      </Card>
      <FilterModal
        isShowing={showingModal}
        close={() => setShowingModal(false)}
        buttonAction={fetchJobs}
        fullTimeOnly={fullTimeOnly}
        setFullTimeOnly={setFullTimeOnly}
        location={locationFilter}
        setLocation={setLocationFilter}
      />
    </div>
  );
};

FilterBar.defaultProps = {
  className: '',
};

export default FilterBar;
