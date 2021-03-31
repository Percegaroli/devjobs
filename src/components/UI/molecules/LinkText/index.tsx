import Link from 'next/link';
import React from 'react';
import { Colors } from '../../../../enum/Colors';
import Text from '../../atoms/Text';
import styles from './ExternalLink.module.scss';
import { LinkTextProps } from './interface';

const LinkText: React.FC<LinkTextProps> = ({
  href, textProps, underscored, customText,
}) => {
  const renderStylizableElement = () => (
    <a href={href}>
      <Text
        variant={textProps.variant}
        color={textProps.color}
        className={`${textProps.className} ${underscored ? styles.Underscored : ''}`}
      >
        {customText || href}
      </Text>
    </a>
  );

  return (
    <Link href={href} locale={false}>
      {renderStylizableElement()}
    </Link>
  );
};

LinkText.defaultProps = {
  className: '',
  href: '',
  textProps: {
    color: Colors.SECONDARY_LIGHTEST,
    variant: 'h4',
    className: '',
  },
  underscored: true,
  customText: '',
};

export default LinkText;
