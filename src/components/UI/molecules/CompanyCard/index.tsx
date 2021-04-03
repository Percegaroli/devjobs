import React, { useContext } from 'react';
import { Colors } from '../../../../enum/Colors';
import Button from '../../atoms/Button';
import Card from '../../atoms/Card';
import ExternalImage from '../../atoms/ExternalImage';
import Text from '../../atoms/Text';
import { CompanyCardProps } from './interface';
import styles from './CompanyCard.module.scss';
import { ThemeContext } from '../../../context/ThemeContext';
import UseResolution from '../../../../hooks/UseResolution';

const CompanyCard = (props: CompanyCardProps) => {
  const {
    companyLogo, companyName, companySite, className,
  } = props;
  const { theme } = useContext(ThemeContext);
  const resolution = UseResolution();

  const RedirectToCompanySite = () => {
    window.open(companySite);
  };

  const calculateImageSize = () => (resolution === 'Mobile' ? {
    width: 50,
    height: 50,
  } : {
    width: 140,
    height: 140,
  });

  const renderImage = () => {
    const { width, height } = calculateImageSize();
    return (
      <ExternalImage
        width={width}
        height={height}
        src={companyLogo}
        alt=""
        className={styles.Logo}
      />
    );
  };

  return (
    <Card className={`${styles.Card} ${className}`}>
      {renderImage()}
      <div className={styles.RightSide}>
        <div>
          <Text
            color={theme === 'LightTheme' ? Colors.PRIMARY_DARK : Colors.SECONDARY_LIGHTEST}
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
        </div>
        <Button
          variant="secondary"
          text="Company site"
          onClick={RedirectToCompanySite}
          className={styles.Button}
        />
      </div>

    </Card>
  );
};

CompanyCard.defaultProps = {
  className: '',
};

export default CompanyCard;
