import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import ApplyNowCard from '../../UI/molecules/ApplyNowCard';
import CompanyCard from '../../UI/molecules/CompanyCard';
import HowToApplyCard from '../../UI/molecules/HowToApplyCard';
import Header from '../../UI/organisms/Header';
import HowToApplySection from '../../UI/organisms/HowToApplySection';
import JobDescription from '../../UI/organisms/JobDescription';
import { JobDetailsTemplateProps } from './interface';
import styles from './JobDetails.module.scss';

const JobDetails = (props: JobDetailsTemplateProps) => {
  const { jobSelected } = props;
  const { theme } = useContext(ThemeContext);
  const {
    companyName, companyUrl, logoUrl, description, howToApply,
  } = jobSelected;

  const renderPageContent = () => (jobSelected.id ? (
    <>
      <div className={styles.CardContained}>
        <CompanyCard
          companyLogo={logoUrl}
          companyName={companyName}
          companySite={companyUrl}
          className={styles.CompanyCard}
        />
      </div>
      <JobDescription
        className={styles.Description}
        description={description}
      />
      <div className={styles.CardContained}>
        <HowToApplySection
          howToApply={howToApply}
          className={styles.HowToApplySection}
        />
      </div>
      <ApplyNowCard className={styles.ApplyNowCard} />
    </>
  ) : null);

  return (
    <div className={` ${styles.Container} ${styles[theme]}`}>
      <Header
        setJobs={() => {}}
      />
      { renderPageContent()}
    </div>
  );
};

export default JobDetails;
