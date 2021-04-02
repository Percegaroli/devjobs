import React, { useContext } from 'react';
import { Colors } from '../../../../enum/Colors';
import { ThemeContext } from '../../../context/ThemeContext';
import Checkbox from '../../atoms/Checkbox';
import Text from '../../atoms/Text';
import styles from './CheckboxFormItem.module.scss';
import { CheckboxFormItemProps } from './interface';

const CheckboxFormItem = (props: CheckboxFormItemProps) => {
  const {
    isChecked, label, onClick, className,
  } = props;
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.Container} ${className}`}>
      <Checkbox isChecked={isChecked} onClick={onClick} />
      <button
        type="button"
        onClick={onClick}
        className={styles.Button}
      >
        <Text
          color={theme === 'LightTheme' ? Colors.PRIMARY_DARK : Colors.SECONDARY_LIGHTEST}
          variant="body"
          className={styles.Label}
        >
          {label}
        </Text>
      </button>

    </div>
  );
};

CheckboxFormItem.defaultProps = {
  className: '',
};

export default CheckboxFormItem;
