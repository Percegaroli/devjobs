/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useEffect, useState } from 'react';
import Card from '../../atoms/Card';
import { ModalProps } from './interface';
import styles from './Modal.module.scss';

const Modal: React.FC<ModalProps> = ({ children, close, classes }) => {
  const overlayRef = useRef(null);
  const [initialScrollPosition, setInitialScrollPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    setInitialScrollPosition([window.scrollX, window.scrollY]);
    window.addEventListener('scroll', blockPageScroll);
    return () => window.removeEventListener('scroll', blockPageScroll);
  }, []);

  const blockPageScroll = () => {
    window.scrollTo(initialScrollPosition[0], initialScrollPosition[1]);
  };

  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.target === overlayRef.current) {
      close();
    }
  };

  return (
    <div
      className={`${styles.Overlay} ${classes.backdrop ?? ''}`}
      onClick={closeModal}
      ref={overlayRef}
    >
      <Card className={`${styles.Card} ${classes.card ?? ''}`}>
        {children}
      </Card>
    </div>
  );
};

Modal.defaultProps = {
  classes: {
    backdrop: '',
    card: '',
  },
};

export default Modal;
