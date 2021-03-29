import React, { useState } from 'react';
import { FilterLabel } from '../../../../enum/FilterLabel';
import Button from '../../atoms/Button';
import CheckboxFormItem from '../../molecules/CheckboxFormItem';
import FilterInput from '../../molecules/FilterInput';
import Modal from '../../molecules/Modal';
import styles from './FilterModal.module.scss';
import { FilterModalProps } from './interface';

const FilterModal = (props: FilterModalProps) => {
  const {
    buttonAction, close, isShowing, fullTimeOnly, location, setFullTimeOnly, setLocation,
  } = props;

  return isShowing ? (
    <Modal
      close={close}
      classes={{
        card: styles.Card,
      }}
    >
      <div className={styles.SectionContainer}>
        <FilterInput
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Filter by location..."
          icon={{
            path: '/desktop/icon-location.svg',
            height: 24,
            width: 17,
          }}
        />
      </div>
      <div className={styles.Separator} />
      <div className={styles.SectionContainer}>
        <CheckboxFormItem
          isChecked={fullTimeOnly}
          onClick={() => setFullTimeOnly(!fullTimeOnly)}
          label={FilterLabel.FULLTIME}
        />
      </div>
      <div className={styles.ButtonSectionContainer}>
        <Button
          fullWidth
          text="Search"
          onClick={buttonAction}
        />
      </div>

    </Modal>
  ) : null;
};

export default FilterModal;
