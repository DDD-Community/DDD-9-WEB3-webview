export interface IToastActionState {
  isOpen: boolean;
  message: string;
  autoHideDuration?: number;
  anchorOrigin: IAnchorOrigin;
  onOpen: () => void;
  onClose: () => void;
  setMessage: (param: string) => void;
  setAnchorOrigin: (param: IAnchorOrigin) => void;
}

export const AnchorOriginVertical = {
  top: 'top',
  bottom: 'bottom'
} as const;
export type AnchorOriginVerticalType = keyof typeof AnchorOriginVertical;
export const AnchorOriginHorizontal = {
  center: 'center',
  left: 'left',
  right: 'right'
} as const;
export type AnchorOriginHorizontalType = keyof typeof AnchorOriginHorizontal;

export interface IAnchorOrigin {
  vertical: AnchorOriginVerticalType;
  horizontal: AnchorOriginHorizontalType;
}
