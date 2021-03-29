export interface ModalProps {
  close: () => void
  classes?: ModalClasses
}

interface ModalClasses {
  backdrop?: string,
  card?: string
}
