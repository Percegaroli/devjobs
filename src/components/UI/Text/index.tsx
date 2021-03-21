import React from 'react';
import { TextProps } from './interface';
import styles from './Text.module.scss';

const Text: React.FC<TextProps> = (props: TextProps) => {
  const { color, variant, text } = props;

  const getClassName = () => {
    const variantClass = styles[variant[0].toUpperCase() + variant.slice(1)];
    const colorClass = styles[color];
    return `${variantClass} ${colorClass}`;
  };

  const renderElement = () => {
    const className = getClassName();
    switch (variant) {
      case 'h1': {
        return (
          <h1 className={className}>
            {text}
          </h1>
        );
      }
      case 'h2': {
        return (
          <h2 className={className}>
            {text}
          </h2>
        );
      }
      case 'h3': {
        return (
          <h3 className={className}>
            {text}
          </h3>
        );
      }
      case 'h4': {
        return (
          <h4 className={className}>
            {text}
          </h4>
        );
      }
      default: {
        return (
          <span className={className}>
            {text}
          </span>
        );
      }
    }
  };

  return renderElement();
};

export default Text;
