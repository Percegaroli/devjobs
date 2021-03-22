import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => (
  <Image
    src="/desktop/logo.svg"
    width={115}
    height={32}
  />
);

export default Logo;
