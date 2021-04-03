export interface JobInfoProps {
  postTime: string;
  type: string;
  title: string;
  company: string;
  location: string;
  classes?: JobInfoClasses
  variant?: JobVariant
}

interface JobInfoClasses {
  distanceTime?: string
  type?: string;
  companyName?: string;
  location?: string;
  title?: string;
  categoryContainer?: string
}

interface JobVariant {
  title?: 'h1' | 'h2' | 'h3' | 'h4' | 'body'
}
