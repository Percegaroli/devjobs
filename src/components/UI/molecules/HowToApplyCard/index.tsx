import React from 'react';
import { Colors } from '../../../../enum/Colors';
import Card from '../../atoms/Card';
import Text from '../../atoms/Text';
import styles from './HowToApplyCard.module.scss';
import { HowToApplyCardProps } from './interface';
import LinkText from '../LinkText';

const HowToApplyCard: React.FC<HowToApplyCardProps> = ({ howToApply, link, className }) => (
  <Card className={`${styles.Card} ${className}`}>
    <Text
      variant="h3"
      color={Colors.SECONDARY_LIGHTEST}
      text="How to Apply"
      className={styles.Title}
    />
    <Text
      variant="body"
      color={Colors.SECONDARY_LIGHTEST}
      text={howToApply}
    />
    <LinkText href={link} />
  </Card>
);

export default HowToApplyCard;
