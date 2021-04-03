import React, { useContext } from 'react';
import { Colors } from '../../../../enum/Colors';
import useDateAgo from '../../../../hooks/UseDateAgo';
import { ThemeContext } from '../../../context/ThemeContext';
import Text from '../../atoms/Text';
import { JobInfoProps } from './interface';
import styles from './JobInfo.module.scss';

const JobInfo: React.FC<JobInfoProps> = ({
  postTime, type, title, company, location, classes, variant,
}) => {
  const { theme } = useContext(ThemeContext);
  const postDistanceTime = useDateAgo(new Date(postTime));

  return (
    <div className={styles.Container}>
      <div className={`${styles.CategoryContainer} ${classes.categoryContainer ?? ''}`}>
        <Text
          color={Colors.SECONDARY_DARKEST}
          variant="body"
          className={classes.distanceTime ?? ''}
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
          className={classes.type ?? ''}
        >
          {type}
        </Text>
      </div>
      <Text
        color={theme === 'LightTheme' ? Colors.PRIMARY_DARKEST : Colors.SECONDARY_LIGHTEST}
        variant={variant.title ?? 'h3'}
        className={`${styles.Title} ${classes.title ?? ''}`}
      >
        {title}
      </Text>
      {company ? (
        <Text
          color={Colors.SECONDARY_DARKEST}
          variant="h3"
          className={`${styles.Company} ${classes.companyName ?? ''}`}
        >
          {company}
        </Text>
      ) : null}

      <Text
        color={Colors.PRIMARY_LIGHTEST}
        variant="h4"
        className={classes.location ?? ''}
      >
        {location}
      </Text>
    </div>
  );
};

JobInfo.defaultProps = {
  classes: {},
  variant: {},
};

export default JobInfo;
