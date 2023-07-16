import { create } from 'zustand';
import { IModalAction } from './model';

const useModalAction = create<IModalAction>(set => ({
  isOpenModal: false,
  onOpenModal: () => set(state => ({isOpenModal: true})),
  onCloseModal: () => set(state => ({isOpenModal: false}))
}))

export default useModalAction;
