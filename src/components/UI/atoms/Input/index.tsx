import React from 'react';
import { InputProps } from './interface';
import styles from './Input.module.scss';

const Input: React.FC<InputProps> = ({
  onChange, value, type, className,
}) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    className={`${className} ${styles.Input}`}
  />
);

Input.defaultProps = {
  type: 'text',
  onChange: () => {},
  className: '',
};

export default Input;
