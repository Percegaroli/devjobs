import { ChangeEvent } from 'react';

export interface InputProps {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  type?: 'text',
  className?: string
  placeholder: string;
}
