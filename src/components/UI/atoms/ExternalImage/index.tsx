import React from 'react';
import { JobImageProps } from './interface';

const JobImage: React.FC<JobImageProps> = ({
  alt, src, height, width, className,
}) => (
  <img
    src={src}
    alt={alt}
    height={height}
    width={width}
    className={className}
  />
);

JobImage.defaultProps = {
  className: '',
};

export default JobImage;
