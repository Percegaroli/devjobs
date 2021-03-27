import Image from 'next/image';
import React from 'react';
import { IconButtonProps } from './interface';
import styles from './IconButton.module.scss';

const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
  const {
    imageSrc, onClick, alt, height, transparent, width, buttonClassName, iconClassName, Icon,
  } = props;

  const getButtonClassName = () => {
    const colorVariant = transparent ? '' : `${styles.PrimaryButtonColor}`;
    return `${styles.Button} ${colorVariant} ${buttonClassName}`;
  };

  const renderIcon = () => Icon ?? (
  <Image
    src={imageSrc}
    alt={alt}
    height={height}
    width={width}
    className={iconClassName}
  />
  );

  return (
    <button
      type="button"
      onClick={onClick}
      className={getButtonClassName()}
    >
      {renderIcon()}
    </button>
  );
};

IconButton.defaultProps = {
  width: 20,
  height: 20,
  alt: 'Button Icon',
  buttonClassName: '',
  iconClassName: '',
  Icon: null,
  imageSrc: '',
};

export default IconButton;
