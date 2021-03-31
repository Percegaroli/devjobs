import React from 'react';
import { Colors } from '../../../../enum/Colors';
import Button from '../../atoms/Button';
import Card from '../../atoms/Card';
import ExternalImage from '../../atoms/ExternalImage';
import Text from '../../atoms/Text';
import { CompanyCardProps } from './interface';
import styles from './CompanyCard.module.scss';

const CompanyCard = (props: CompanyCardProps) => {
  const {
    companyLogo, companyName, companySite, className,
  } = props;

  const RedirectToCompanySite = () => {
    window.open(companySite);
  };

  return (
    <Card className={`${styles.Card} ${className}`}>
      <ExternalImage
        width={50}
        height={50}
        src={companyLogo}
        alt="Company logo"
        className={styles.Logo}
      />
      <Text
        color={Colors.PRIMARY_DARK}
        variant="h2"
      >
        {companyName}
      </Text>
      <Text
        color={Colors.SECONDARY_DARKEST}
        variant="body"
        className={styles.Subtitle}
      >
        {companySite}
      </Text>
      <Button
        variant="secondary"
        text="Company site"
        onClick={RedirectToCompanySite}
        className={styles.Button}
      />
    </Card>
  );
};

CompanyCard.defaultProps = {
  className: '',
};

export default CompanyCard;
