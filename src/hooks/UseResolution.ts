import { useState, useEffect } from 'react';
import { INITIAL_THEME_VALUE } from '../components/context/ThemeContext';
import UseWindowDimension from './UseWindowDimension';

const UseResolution = () => {
  const windowWidth = UseWindowDimension();
  const [resolution, setResolution] = useState(INITIAL_THEME_VALUE.resolution);

  useEffect(() => {
    defineResolution(windowWidth);
  }, [windowWidth]);

  const defineResolution = (width: number) => {
    if (width < 768) {
      setResolution('Mobile');
    } else if (width < 1180) {
      setResolution('Tablet');
    } else {
      setResolution('Desktop');
    }
  };

  return resolution;
};

export default UseResolution;
