import React, { useState } from 'react';
import UseResolution from '../../../../hooks/UseResolution';
import { getGithubJobsProxy } from '../../../../service/GithubAPI';
import { mapAPIResponseToState } from '../../../../util/dataMapping/jobInfo';
import Button from '../../atoms/Button';
import Card from '../../atoms/Card';
import Container from '../../atoms/Container';
import IconButton from '../../atoms/IconButton';
import Input from '../../atoms/Input';
import CheckboxFormItem from '../../molecules/CheckboxFormItem';
import FilterInput from '../../molecules/FilterInput';
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
  const resolution = UseResolution();

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

  const renderBar = () => (resolution === 'Mobile' ? renderMobileFilterBar() : renderSearchBar());

  const renderSearchBar = () => (
    <Card className={styles.Card}>
      <FilterInput
        placeholder="Filter by title..."
        icon={{
          path: '/desktop/icon-search.svg',
        }}
        onChange={(event) => setJobFilter(event.target.value)}
        value={jobFilter}
        className={styles.FilterInput}
      />
      <FilterInput
        placeholder="Filter by location..."
        icon={{
          path: '/desktop/icon-location.svg',
          width: 16.72,
          height: 23.89,
        }}
        onChange={(event) => setLocationFilter(event.target.value)}
        value={locationFilter}
        className={styles.FilterInput}
      />
      <CheckboxFormItem
        isChecked={fullTimeOnly}
        onClick={() => setFullTimeOnly(!fullTimeOnly)}
        label="Full Time"
        className={styles.FullTimeInput}
      />
      <Button
        text="Search"
        onClick={fetchJobs}
        className={styles.SearchButon}
      />
    </Card>
  );

  const renderMobileFilterBar = () => (
    <>
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
    </>
  );

  return (
    <Container className={className}>
      {renderBar()}
    </Container>

  );
};

FilterBar.defaultProps = {
  className: '',
};

export default FilterBar;
