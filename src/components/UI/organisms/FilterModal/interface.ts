export interface FilterModalProps {
  isShowing: boolean;
  close: () => void;
  buttonAction: () => void;
  location: string,
  setLocation: (location: string) => void,
  fullTimeOnly: boolean,
  setFullTimeOnly: (isFulltimeOnly: boolean) => void
}
