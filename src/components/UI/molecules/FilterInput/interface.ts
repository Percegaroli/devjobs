import { ChangeEvent } from 'react';

export interface FilterInputProps {
  placeholder: string;
  value: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  iconPath: string;
}
