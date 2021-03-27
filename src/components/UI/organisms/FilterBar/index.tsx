import React, { useState } from 'react';
import Card from '../../atoms/Card';
import IconButton from '../../atoms/IconButton';
import Input from '../../atoms/Input';
import styles from './FilterBar.module.scss';
import SearchIcon from './icon-search.svg';
import { FilterBarProps } from './interface';

const FilterBar = (props: FilterBarProps) => {
  const { className } = props;
  const [jobFilter, setJobFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [fullTimeOnly, setFullTimeOnly] = useState(false);

  return (
    <Card className={`${styles.Card} ${className}`}>
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
          onClick={() => {}}
        />
        <IconButton
          buttonClassName={styles.SearchButton}
          alt="Search button icon"
          onClick={() => {}}
          Icon={<SearchIcon className={styles.SearchIcon} />}
        />
      </div>

    </Card>
  );
};

FilterBar.defaultProps = {
  className: '',
};

export default FilterBar;
