export interface IBottomSheetActionStateOptions {
  title: string;
  width?: string|number;
}

export interface IBottomSheetActionState {
  isOpen: boolean;
  options?: IBottomSheetActionStateOptions;
  toggleDrawer: (o?: IBottomSheetActionStateOptions) => void;
  onClose: () => void;
}
