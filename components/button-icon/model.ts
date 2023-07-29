export const ButtonIconSize = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;
export type TButtonIconSize = keyof typeof ButtonIconSize;

export interface IButtonIcon {
  name: string;
  size?: TButtonIconSize;
  onClick?: (event: any) => void;
}
