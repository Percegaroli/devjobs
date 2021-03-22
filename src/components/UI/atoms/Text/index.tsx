import React from 'react';
import { TextProps } from './interface';
import styles from './Text.module.scss';

const Text: React.FC<TextProps> = (props: TextProps) => {
  const {
    color, variant, text, className,
  } = props;

  const getClassName = () => {
    const variantClass = styles[variant[0].toUpperCase() + variant.slice(1)];
    const colorClass = styles[color];
    return `${variantClass} ${colorClass} ${className} ${styles.Text}`;
  };

  const renderElement = () => {
    const elementClasses = getClassName();
    switch (variant) {
      case 'h1': {
        return (
          <h1 className={elementClasses}>
            {text}
          </h1>
        );
      }
      case 'h2': {
        return (
          <h2 className={elementClasses}>
            {text}
          </h2>
        );
      }
      case 'h3': {
        return (
          <h3 className={elementClasses}>
            {text}
          </h3>
        );
      }
      case 'h4': {
        return (
          <h4 className={elementClasses}>
            {text}
          </h4>
        );
      }
      default: {
        return (
          <span className={elementClasses}>
            {text}
          </span>
        );
      }
    }
  };

  return renderElement();
};

Text.defaultProps = {
  className: '',
};

export default Text;
