import { IBottomSheetActionState, IBottomSheetActionStateOptions } from './model';
import { create } from 'zustand';

const useBottomSheetAction = create<IBottomSheetActionState>(set => ({
  isOpen: false,
  toggleDrawer: ((options?: IBottomSheetActionStateOptions) => set({isOpen: true, options})),
  onClose: () => set(state => ({isOpen: false}))
}))

export default useBottomSheetAction;
