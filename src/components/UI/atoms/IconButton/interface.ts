import React from 'react';

export interface IconButtonProps {
  onClick: () => void
  imageSrc?: string,
  alt?: string,
  width?: number
  height?: number
  buttonClassName?: string,
  iconClassName?: string,
  transparent?: boolean
  Icon?: React.ReactElement
}
