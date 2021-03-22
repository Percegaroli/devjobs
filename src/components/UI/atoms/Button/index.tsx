import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import styles from './Button.module.scss';
import { ButtonProps } from './interface';

const Button: React.FC<ButtonProps> = ({ text, className, variant }) => {
  const { theme } = useContext(ThemeContext);
  const getClassName = () => {
    const classVariant = `Button-${variant}`;
    const themeVariant = `--${theme}`;
    return `${className} ${styles.Button} ${styles[classVariant]} ${styles[themeVariant]}`;
  };

  return (
    <button
      className={getClassName()}
      type="button"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  variant: 'secondary',
  onClick: () => {},
};

export default Button;
