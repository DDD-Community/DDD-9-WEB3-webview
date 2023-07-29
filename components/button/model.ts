export const ButtonSize = {
  // small: 'small',
  // medium: 'medium',
  // large: 'large',
  custom: 'custom',
  fill: 'fill',
} as const;
export type TButtonSize = keyof typeof ButtonSize;

export const ButtonTheme = {
  primary: 'primary',
  secondary: 'secondary',
} as const;
export type TButtonTheme = keyof typeof ButtonTheme;
