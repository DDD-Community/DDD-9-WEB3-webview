import { create } from 'zustand';
import { IModalAction } from './model';

const useModalAction = create<IModalAction>(set => ({
  key: 0,
  isOpenModal: false,
  onOpenModal: () => set(state => ({
    isOpenModal: true,
    key: state.key + 1,
  })),
  onCloseModal: () => set(state => {
    return {
      isOpenModal: false
    }
  })
}))

export default useModalAction;
