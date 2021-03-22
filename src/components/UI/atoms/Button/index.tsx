import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import styles from './Button.module.scss';
import { ButtonProps } from './interface';

const Button: React.FC<ButtonProps> = ({
  text, className, variant, onClick,
}) => {
  const { theme } = useContext(ThemeContext);

  const hasThemeVariant = () => (variant === 'secondary' ? `${styles[theme]}` : '');

  const getClassName = () => {
    const classVariant = `Button-${variant}`;
    return `${className} ${styles.Button} ${styles[classVariant]} ${hasThemeVariant()}`;
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
};

export default Button;
