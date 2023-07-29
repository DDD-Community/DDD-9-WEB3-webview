import { IPageTransitionAction, IPageTransitionState } from '@hooks/use-page-transition/model';
import { ITransition } from '@layout/page-transition/model';
import { useState } from 'react';
import create from 'zustand';

const authState: IPageTransitionState = {
  depth: 0,
  initial: {},
  animate: {},
  exit: {},
  routerHistory: []
}

export const usePageTransition = create<IPageTransitionState & IPageTransitionAction>(set => ({
  ...authState,
  setDepth: param => set(state => {
    return { depth: param };
  }),
  setInitial: param => set(state => {
    return { initial: param };
  }),
  setAnimation: param => set(state => {
    return { animate: param };
  }),
  setExit: param => set(state => {
    return { exit: param };
  }),
  setRouterHistory: param => set(state => {
    return { routerHistory: param };
  })
}))
