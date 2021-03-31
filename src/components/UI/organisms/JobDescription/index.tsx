import React, { useEffect, useState } from 'react';
import parse from 'html-dom-parser';
import { JobDescriptionProps } from './interface';
import StringList from '../../molecules/StringList';
import Card from '../../atoms/Card';
import Text from '../../atoms/Text';
import { Colors } from '../../../../enum/Colors';
import styles from './JobDescription.module.scss';

const JobDescription = (props: JobDescriptionProps) => {
  const { description, className } = props;
  const [elements, setElements] = useState<Array<React.ReactElement>>([]);

  useEffect(() => {
    parseDescription();
  }, [description]);

  const parseDescription = () => {
    const descriptionParsed = parse(description);
    console.log(descriptionParsed);
    const newElements: Array<React.ReactElement> = [];
    descriptionParsed.forEach((element: any) => {
      newElements.push(parseElement(element));
    });
    setElements(newElements);
  };

  const parseElement = (element: any): JSX.Element => {
    if (element.type === 'tag') {
      if (element.name === 'ul') {
        return returnUnorderedList(element);
      }
      if (element.name === 'ol') {
        return returnOrderedList(element);
      }
      if (element.name === 'p' || element.name === 'h1' || element.name === 'h2' || element.name === 'h3' || element.name === 'h4') {
        if (element.children[0].type === 'tag') {
          console.log(element);
          return parseElement(element.children[0]);
        }
        if (element.children[0].data.length < 40) {
          return renderTextElement(element, 'h3');
        }
        return renderTextElement(element, element.name);
      }
    }
    return null;
  };

  const renderTextElement = (element: any, variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body'): JSX.Element => {
    const items: Array<JSX.Element> = element.children.map((children) => {
      if (children.type === 'text') {
        return (
          <Text
            color={Colors.SECONDARY_DARKEST}
            variant={variant}
            className={styles.Item}
          >
            {children.data}
          </Text>
        );
      }
      return parseElement(children);
    });
    return (
      <>
        {items.map((iten) => iten)}
      </>
    );
  };

  const returnUnorderedList = (element: any) => {
    const itens = [];
    element.children.forEach((children) => {
      if (children.type === 'tag') {
        itens.push(children.children[0].data);
      }
    });
    return (
      <StringList
        items={itens}
        className={styles.Item}
      />
    );
  };

  const returnOrderedList = (element: any) => {
    const itens = [];
    element.children.forEach((children) => {
      if (children.type === 'tag') {
        itens.push(children.children[0].data);
      }
    });
    return (
      <StringList
        isOrdered
        className={styles.Item}
        items={itens}
      />
    );
  };

  return (
    <div className={`${styles.Container} ${className}`}>
      <Card>
        {elements.map((element) => element)}
      </Card>
    </div>

  );
};

export default JobDescription;
