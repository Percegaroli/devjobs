import React, { useContext } from 'react';
import { Colors } from '../../../../enum/Colors';
import { ThemeContext } from '../../../context/ThemeContext';
import Text from '../../atoms/Text';
import { OrderedListItemProps } from './interface';
import styles from './OrderedListItem.module.scss';

const OrderedListItem = (props: OrderedListItemProps) => {
  const { number, text, className } = props;
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.ListItem} ${className}`}>
      <Text
        variant="body"
        color={Colors.PRIMARY_LIGHTEST}
        className={styles.Number}
      >
        {number.toString()}
      </Text>
      <Text
        variant="body"
        color={theme === 'LightTheme' ? Colors.SECONDARY_DARKEST : Colors.SECONDARY_DARK}
      >
        {text}
      </Text>
    </div>
  );
};

OrderedListItem.defaultProps = {
  className: '',
};

export default OrderedListItem;
