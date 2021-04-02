import React from 'react';
import styles from './Container.module.scss';

interface Props {
  className?: string
}

const Container: React.FC<Props> = ({ className, children }) => (
  <div className={`${styles.Container} ${className}`}>
    {children}
  </div>
);

Container.defaultProps = {
  className: '',
};

export default Container;
