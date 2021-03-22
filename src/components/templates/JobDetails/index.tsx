import React from 'react';
import HowToApplyCard from '../../UI/molecules/HowToApplyCard';
import Header from '../../UI/organisms/Header';
import styles from './JobDetails.module.scss';

const JobDetails = () => (
  <div className={styles.Container}>
    <Header />
    <HowToApplyCard
      howToApply="Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in"
      link="http://www.google.com.br"
    />
  </div>
);

export default JobDetails;
