import React, { useContext } from 'react';
import { Colors } from '../../../../enum/Colors';
import { ThemeContext } from '../../../context/ThemeContext';
import Text from '../../atoms/Text';
import { UnorderedListItemProps } from './interface';
import styles from './UnorderedListItem.module.scss';

const UnorderedListItem = (props: UnorderedListItemProps) => {
  const { text, className } = props;
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.ListItem} ${className}`}>
      <div className={styles.Circle} />
      <Text
        variant="body"
        color={theme === 'LightTheme' ? Colors.SECONDARY_DARKEST : Colors.SECONDARY_DARK}
      >
        {text}
      </Text>
    </div>
  );
};

UnorderedListItem.defaultProps = {
  className: '',
};

export default UnorderedListItem;
