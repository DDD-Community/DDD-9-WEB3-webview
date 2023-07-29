export interface IModalAction {
  key: number,
  isOpenModal: boolean;
  onOpenModal: () => void;
  onCloseModal: () => void;
}
