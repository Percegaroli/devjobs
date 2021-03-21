import { Colors } from '../../enum/Colors';

export interface TextProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body'
  color: Colors
  text: string
}
