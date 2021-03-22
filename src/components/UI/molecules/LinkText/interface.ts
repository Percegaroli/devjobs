import { TextProps } from '../../atoms/Text/interface';

export interface LinkTextProps {
  href: string;
  underscored?: boolean;
  className?: string;
  textProps?: TextProps;
  customText?: string;
}
