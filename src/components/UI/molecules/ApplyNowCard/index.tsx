import React, { useContext } from 'react';
import Button from '../../atoms/Button';
import Card from '../../atoms/Card';
import { ApplyNowCardProps } from './interface';
import styles from './ApplyNowCard.module.scss';
import Text from '../../atoms/Text';
import { ThemeContext } from '../../../context/ThemeContext';
import { Colors } from '../../../../enum/Colors';
import Container from '../../atoms/Container';

const ApplyNowCard = ({
  className, onlyButton, company, role, jobUrl,
}: ApplyNowCardProps) => {
  const { theme } = useContext(ThemeContext);

  const renderCompanyInfo = () => (!onlyButton ? (
    <div className={styles.CompanyInfoContainer}>
      <Text
        color={theme === 'LightTheme' ? Colors.PRIMARY_DARK : Colors.SECONDARY_LIGHTEST}
        variant="h3"
      >
        {role}
      </Text>
      <Text
        color={Colors.SECONDARY_DARKEST}
        variant="body"
      >
        {company}
      </Text>
    </div>
  ) : null);

  return (
    <Card className={`${className} ${styles.Card}`}>
      <Container className={styles.Container}>
        {renderCompanyInfo()}
        <Button
          text="Apply now"
          fullWidth={onlyButton}
          onClick={() => window.open(jobUrl)}
        />
      </Container>

    </Card>
  );
};

ApplyNowCard.defaultProps = {
  className: '',
  onlyButton: false,
};

export default ApplyNowCard;
