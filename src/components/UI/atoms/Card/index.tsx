/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { CardProps } from './interface';
import styles from './Card.module.scss';
import { ThemeContext } from '../../../context/ThemeContext';

const Card: React.FC<CardProps> = ({ children, className, onClick }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${styles.Card} ${className} ${styles[theme]}`}
      onClick={onClick}
    // eslint-disable-next-line jsx-a11y/aria-role
      role="card"
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  className: '',
  onClick: () => {},
};

export default Card;
