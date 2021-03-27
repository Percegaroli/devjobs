import React from 'react';
import Image from 'next/image';
import Card from '../../atoms/Card';
import { FilterInputProps } from './interface';
import Input from '../../atoms/Input';
import styles from './FilterInput.module.scss';

const FilterInput: React.FC<FilterInputProps> = ({
  onChange, iconPath, placeholder, value,
}) => (
  <Card className={styles.Card}>
    <Image
      src={iconPath}
      alt="Icon"
      width={24}
      height={24}
    />
    <Input
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  </Card>
);

export default FilterInput;
