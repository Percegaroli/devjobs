import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Container from '../../UI/atoms/Container';
import ApplyNowCard from '../../UI/molecules/ApplyNowCard';
import CompanyCard from '../../UI/molecules/CompanyCard';
import Header from '../../UI/organisms/Header';
import HowToApplySection from '../../UI/organisms/HowToApplySection';
import JobDescription from '../../UI/organisms/JobDescription';
import { JobDetailsTemplateProps } from './interface';
import styles from './JobDetails.module.scss';

const JobDetails = (props: JobDetailsTemplateProps) => {
  const { jobSelected } = props;
  const { theme } = useContext(ThemeContext);
  const {
    companyName, companyUrl, logoUrl, description, howToApply, jobTitle, location, postDate, type,
  } = jobSelected;

  const renderPageContent = () => (jobSelected.id ? (
    <>
      <Container>
        <CompanyCard
          companyLogo={logoUrl}
          companyName={companyName}
          companySite={companyUrl}
          className={styles.CompanyCard}
        />
      </Container>
      <JobDescription
        className={styles.Description}
        description={description}
        jobTitle={jobTitle}
        location={location}
        postDate={postDate}
        type={type}
      />
      <HowToApplySection
        howToApply={howToApply}
        className={styles.HowToApplySection}
      />
      <ApplyNowCard
        className={styles.ApplyNowCard}
        company={companyName}
        role={jobTitle}
      />
    </>
  ) : null);

  return (
    <div className={`${styles.Container} ${styles[theme]}`}>
      <Header />
      { renderPageContent()}
    </div>
  );
};

export default JobDetails;
