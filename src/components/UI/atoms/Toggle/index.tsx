import React from 'react';
import { ToggleProps } from './interface';
import styles from './Toggle.module.scss';

const Toggle = <T extends unknown>(
  {
    values, value, changeValue, className = '',
  }: ToggleProps<T>) => {
  const getSelectedClass = () => (value === values[0] ? styles.LeftSelected : styles.RightSelected);

  const onClickAction = () => {
    const newValue = value === values[0] ? values[1] : values[0];
    changeValue(newValue);
  };

  return (
    <button
      type="button"
      className={`${styles.Toggle} ${className} ${getSelectedClass()}`}
      onClick={onClickAction}
    >
      <div className={styles.Ball} />
    </button>
  );
};

export default Toggle;
