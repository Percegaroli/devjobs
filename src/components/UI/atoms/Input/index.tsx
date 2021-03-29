import React, { useContext } from 'react';
import { InputProps } from './interface';
import styles from './Input.module.scss';
import { ThemeContext } from '../../../context/ThemeContext';

const Input: React.FC<InputProps> = ({
  onChange, value, type, className, placeholder,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${className} ${styles.Input} ${styles[theme]}`}
    />
  );
};

Input.defaultProps = {
  type: 'text',
  onChange: () => {},
  className: '',
};

export default Input;
