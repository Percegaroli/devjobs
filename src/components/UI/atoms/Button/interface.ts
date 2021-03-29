export interface ButtonProps {
  className?: string;
  text:string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void
  fullWidth?: boolean;
}
