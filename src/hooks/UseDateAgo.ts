import { useState, useEffect } from 'react';

const useDateAgo = (date: Date) => {
  const [distance, setDistance] = useState('');

  useEffect(() => {
    setDistance(calculateDistance());
  }, []);

  const removeDecimals = (number: number) => number.toFixed(0);

  const calculateDistance = () => {
    const referenceDate = new Date();
    const distanceInSecods = (referenceDate.getTime() / 1000) - (date.getTime() / 1000);
    const formattedDistance = calculateSuffix(distanceInSecods);
    return `${formattedDistance} ago`;
  };

  const calculateSuffix = (distanceInSecods: number) => {
    let formattedDistance = '';
    let suffix = '';
    if (distanceInSecods < 60) {
      formattedDistance = removeDecimals(distanceInSecods);
      suffix = 's';
    } else if (distanceInSecods < 3600) {
      formattedDistance = removeDecimals(distanceInSecods / 60);
      suffix = 'm';
    } else if (distanceInSecods < 86400) {
      formattedDistance = removeDecimals(distanceInSecods / 3600);
      suffix = 'h';
    } else if (distanceInSecods < 2592000) {
      formattedDistance = removeDecimals(distanceInSecods / 86400);
      suffix = 'd';
    } else if (distanceInSecods < 31104000) {
      formattedDistance = removeDecimals(distanceInSecods / 2592000);
      suffix = 'w';
    } else if (distanceInSecods < 373248000) {
      formattedDistance = removeDecimals(distanceInSecods / 31104000);
      suffix = 'mo';
    } else {
      formattedDistance = removeDecimals(distanceInSecods / 373248000);
      suffix = 'y';
    }
    return `${formattedDistance}${suffix}`;
  };

  return distance;
};

export default useDateAgo;
