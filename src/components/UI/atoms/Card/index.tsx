import React from 'react';
import { CardProps } from './interface';
import styles from './Card.module.scss';

const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={`${styles.Card} ${className}`}>
    {children}
  </div>
);

Card.defaultProps = {
  className: '',
};

export default Card;
