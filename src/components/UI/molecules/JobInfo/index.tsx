import React, { useContext } from 'react';
import { Colors } from '../../../../enum/Colors';
import { ThemeContext } from '../../../context/ThemeContext';
import Text from '../../atoms/Text';
import styles from './JobInfo.module.scss';

interface Props {
  postTime: string;
  category: string;
  title: string;
  company: string;
  location: string;
}

const JobInfo: React.FC<Props> = ({
  postTime, category, title, company, location,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.Container}>
      <div className={styles.CategoryContainer}>
        <Text
          color={Colors.SECONDARY_DARKEST}
          text={postTime}
          variant="body"
        />
        <Text
          color={Colors.SECONDARY_DARKEST}
          text={category}
          variant="body"
        />
      </div>
      <Text
        color={theme === 'LightTheme' ? Colors.PRIMARY_DARKEST : Colors.SECONDARY_LIGHTEST}
        text={title}
        variant="h3"
        className={styles.Title}
      />
      <Text
        color={Colors.SECONDARY_DARKEST}
        text={company}
        variant="h3"
        className={styles.Company}
      />
      <Text
        color={Colors.PRIMARY_LIGHTEST}
        text={location}
        variant="h4"
      />
    </div>
  );
};

export default JobInfo;
