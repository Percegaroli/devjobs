export interface ToggleProps<T> {
  values: [T, T]
  value: T
  changeValue: (newValue: T) => void,
  className?: string
}
