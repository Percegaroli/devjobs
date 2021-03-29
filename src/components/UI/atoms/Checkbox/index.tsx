import Image from 'next/image';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import styles from './Checkbox.module.scss';
import { CheckboxProps } from './interface';

const Checkbox = (props: CheckboxProps) => {
  const { isChecked, className, onClick } = props;
  const { theme } = useContext(ThemeContext);
  return (
    <button
      type="button"
      className={`${styles.Checkbox} ${isChecked ? styles.Checked : ''} ${styles[theme]} ${className}`}
      onClick={onClick}
    >
      {isChecked
        ? (
          <Image
            src="/desktop/icon-check.svg"
            alt="Check icon"
            width={14}
            height={14}
          />
        )
        : null}
    </button>
  );
};

Checkbox.defaultProps = {
  className: '',
};

export default Checkbox;
