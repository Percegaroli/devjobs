import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import styles from './Button.module.scss';
import { ButtonProps } from './interface';

const Button: React.FC<ButtonProps> = ({
  text, className, variant, onClick, fullWidth,
}) => {
  const { theme } = useContext(ThemeContext);

  const hasThemeVariant = () => (variant === 'secondary' ? `${styles[theme]}` : '');

  const getClassName = () => {
    const classVariant = `Button-${variant}`;
    const fullWidthVariant = fullWidth ? styles.FullWidth : '';
    return `${className} ${styles.Button} ${styles[classVariant]} ${hasThemeVariant()} ${fullWidthVariant}`;
  };

  return (
    <button
      className={getClassName()}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  variant: 'primary',
  onClick: () => {},
  fullWidth: false,
};

export default Button;
