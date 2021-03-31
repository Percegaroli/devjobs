import React from 'react';
import { Colors } from '../../../../enum/Colors';
import Card from '../../atoms/Card';
import Text from '../../atoms/Text';
import styles from './HowToApplyCard.module.scss';
import { HowToApplyCardProps } from './interface';
import LinkText from '../LinkText';

const HowToApplyCard: React.FC<HowToApplyCardProps> = ({
  howToApply, link, className, linkPlaceholder,
}) => (
  <Card className={`${styles.Card} ${className}`}>
    <Text
      variant="h3"
      color={Colors.SECONDARY_LIGHTEST}
      className={styles.Title}
    >
      How to Apply
    </Text>
    <Text
      variant="body"
      color={Colors.SECONDARY_LIGHTEST}
    >
      {howToApply}
    </Text>
    <LinkText href={link} customText={linkPlaceholder ?? link} />
  </Card>
);

HowToApplyCard.defaultProps = {
  linkPlaceholder: '',
};

export default HowToApplyCard;
