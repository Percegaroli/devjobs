import React, { useContext } from 'react';
import { Colors } from '../../../../enum/Colors';
import useDateAgo from '../../../../hooks/UseDateAgo';
import { ThemeContext } from '../../../context/ThemeContext';
import Text from '../../atoms/Text';
import styles from './JobInfo.module.scss';

interface Props {
  postTime: string;
  type: string;
  title: string;
  company: string;
  location: string;
}

const JobInfo: React.FC<Props> = ({
  postTime, type, title, company, location,
}) => {
  const { theme } = useContext(ThemeContext);
  const postDistanceTime = useDateAgo(new Date(postTime));

  return (
    <div className={styles.Container}>
      <div className={styles.CategoryContainer}>
        <Text
          color={Colors.SECONDARY_DARKEST}
          variant="body"
        >
          {postDistanceTime}
        </Text>
        <Text
          color={Colors.SECONDARY_DARKEST}
          variant="body"
          className={styles.Dot}
        >
          .
        </Text>
        <Text
          color={Colors.SECONDARY_DARKEST}
          variant="body"
        >
          {type}
        </Text>
      </div>
      <Text
        color={theme === 'LightTheme' ? Colors.PRIMARY_DARKEST : Colors.SECONDARY_LIGHTEST}
        variant="h3"
        className={styles.Title}
      >
        {title}
      </Text>
      <Text
        color={Colors.SECONDARY_DARKEST}
        variant="h3"
        className={styles.Company}
      >
        {company}
      </Text>
      <Text
        color={Colors.PRIMARY_LIGHTEST}
        variant="h4"
      >
        {location}
      </Text>
    </div>
  );
};

export default JobInfo;
