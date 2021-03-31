import { useState, useEffect } from 'react';
import UseWindowDimension from './UseWindowDimension';

type Resolution = 'Mobile' | 'Tablet' | 'Desktop'

const UseResolution = () => {
  const windowWidth = UseWindowDimension();
  const [resolution, setResolution] = useState<Resolution>('Mobile');

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
