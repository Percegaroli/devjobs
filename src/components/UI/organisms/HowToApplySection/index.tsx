import React, { useEffect, useState } from 'react';
import parser from 'html-dom-parser';
import { HowToApplySectionProps } from './interface';
import styles from './HowToApplySection.module.scss';
import HowToApplyCard from '../../molecules/HowToApplyCard';

const HowToApplySection = (props: HowToApplySectionProps) => {
  const { howToApply, className } = props;
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [linkPlaceholder, setLinkPlaceholder] = useState('');

  useEffect(() => {
    parseInstructions();
  }, [howToApply]);

  const parseInstructions = () => {
    const content = parser(howToApply);
    content.forEach((element: any) => {
      parseElement(element);
    });
  };

  const parseElement = (element: any) => {
    if (element.type === 'tag') {
      if (element.name === 'a') {
        setLink(element.attribs.href);
        setLinkPlaceholder(element.children[0].data);
      } else {
        parseElement(element.children[0]);
      }
    }
    if (element.type === 'text') {
      setDescription(element.data);
    }
  };

  return (
    <div className={`${styles.Container} ${className}`}>
      <HowToApplyCard howToApply={description} link={link} />
    </div>
  );
};

export default HowToApplySection;
