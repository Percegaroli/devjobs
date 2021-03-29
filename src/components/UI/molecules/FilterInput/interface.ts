import { ChangeEvent } from 'react';

export interface FilterInputProps {
  placeholder: string;
  value: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  icon: FilterInputIconeProps
}

export interface FilterInputIconeProps {
  path: string;
  width?: number;
  height?: number;
}
