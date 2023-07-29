export const RouterDept = {
  next: 'next',
  back: 'back',
  hold: 'hold',
} as const;
export type TRouterDept = keyof typeof RouterDept;
export interface IAnimateRouterActionState {
  isLoading: boolean;
  dept: TRouterDept;
  routerHistory: string[];
}
