import { create } from 'zustand';
import { AnchorOriginHorizontal, AnchorOriginVertical, IToastActionState, } from './model';

const useToastAction = create<IToastActionState>(set => ({
  isOpen: false,
  message: '',
  autoHideDuration: 3000,
  anchorOrigin: { vertical: AnchorOriginVertical.bottom, horizontal: AnchorOriginHorizontal.center},
  setAnchorOrigin: param => set(state => ({anchorOrigin: param})),
  setMessage: param => set(state => ({message: param})),
  onOpen: () => set(state => ({isOpen: true})),
  onClose: () => set(state => ({isOpen: false}))
}))

export default useToastAction;
