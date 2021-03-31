import { useState, useEffect } from 'react';

const UseWindowDimension = () => {
  const [windowDimension, setWindowDimension] = useState<number>(400);

  const getWindowDimension = () => window.innerWidth;

  const changeDimension = () => {
    setWindowDimension(getWindowDimension);
  };

  useEffect(() => {
    window.addEventListener('resize', changeDimension);
    setWindowDimension(getWindowDimension());
    return () => window.removeEventListener('resize', changeDimension);
  }, []);

  return windowDimension;
};

export default UseWindowDimension;
