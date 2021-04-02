import React from 'react';
import Image from 'next/image';
import { FilterInputProps } from './interface';
import Input from '../../atoms/Input';
import styles from './FilterInput.module.scss';

const FilterInput: React.FC<FilterInputProps> = ({
  onChange, icon, placeholder, value, className,
}) => (
  <div className={`${styles.FilterInputContainer} ${className}`}>
    <Image
      src={icon.path}
      alt="Icon"
      width={icon.width || 24}
      height={icon.height || 24}
    />
    <Input
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      className={styles.FilterInput}
    />
  </div>
);

FilterInput.defaultProps = {
  className: '',
};

export default FilterInput;
