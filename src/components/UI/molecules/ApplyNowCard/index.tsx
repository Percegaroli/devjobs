import React from 'react';
import Button from '../../atoms/Button';
import Card from '../../atoms/Card';
import { ApplyNowCardProps } from './interface';
import styles from './ApplyNowCard.module.scss';

const ApplyNowCard = ({ className }: ApplyNowCardProps) => (
  <Card className={`${className} ${styles.Card}`}>
    <Button
      text="Apply now"
      fullWidth
    />
  </Card>
);

ApplyNowCard.defaultProps = {
  className: '',
};

export default ApplyNowCard;
