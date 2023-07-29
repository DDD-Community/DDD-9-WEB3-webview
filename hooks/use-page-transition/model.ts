export interface IPageTransitionState {
  depth: number;
  initial: ITransition;
  animate: ITransition;
  exit: ITransition;
  routerHistory: string[]
}

export interface IPageTransitionAction {
  setDepth: (depth: number) => void;
  setInitial: (initial: ITransition) => void;
  setAnimation: (animation: ITransition) => void;
  setExit: (exit: ITransition) => void;
  setRouterHistory: (routerHistory: string[]) => void;
}

export interface ITransition {
  x?: string|number;
  y?: string|number;
}
