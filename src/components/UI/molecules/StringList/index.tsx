import React from 'react';
import OrderedListItem from '../OrderedListItem';
import UnorderedListItem from '../UnorderedListItem';
import { StringListProps } from './interface';
import styles from './StringList.module.scss';

const StringList = (props: StringListProps) => {
  const { items, isOrdered, className } = props;

  const renderListItems = () => (isOrdered ? renderOrderedList() : renderUnorderedList());

  const renderOrderedList = () => items.map((item, index) => (
    <OrderedListItem
      number={index + 1}
      text={item}
      key={`${index + 1} ${item}`}
      className={styles.ListItem}
    />
  ));

  const renderUnorderedList = () => items.map((item, index) => (
    <UnorderedListItem
      text={item}
      key={`${index + 1} ${item}`}
      className={styles.ListItem}
    />
  ));
  return (
    <div className={`${styles.ListContainer} ${className}`}>
      {renderListItems()}
    </div>
  );
};

StringList.defaultProps = {
  isOrdered: false,
  className: '',
};

export default StringList;
