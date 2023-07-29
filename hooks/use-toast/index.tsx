import { isUndefined, omitBy } from 'lodash-es';
import { create } from 'zustand';
import {
  AnchorOriginHorizontal,
  AnchorOriginVertical, IToastAction,
  IToastState,
  ToastStatus,
} from './model';

const toastState: IToastState = {
  toastComponent: null,
  isToastOpen: false,
  message: '',
  autoHideDuration: 3000,
  toastPosition: { bottom: 50 },
  toastStatus: ToastStatus.success,
  anchorOrigin: { vertical: AnchorOriginVertical.bottom, horizontal: AnchorOriginHorizontal.center},
}

const useToastStore = create<IToastAction & IToastState>(set => ({
  ...toastState,
  setAnchorOrigin: param => set(state => ({anchorOrigin: param})),
  setMessage: param => set(state => ({message: param})),
  setHideDuration: param => set(state => ({autoHideDuration: param})),
  setToastPosition: param => set(state => ({toastPosition: param})),
  setToastComponent: param => set(state => ({toastComponent: param})),
  onToastOpen: (param: IToastState) => set(state => {
    console.log(param, omitBy(param, isUndefined));
    console.log(state)
    return omitBy({ ...param, isToastOpen: true }, isUndefined)
  }),
  onToastClose: () => set(state => ({
    ...toastState,
  }))
}))

export default useToastStore;
