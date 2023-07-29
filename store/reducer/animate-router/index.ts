import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/reducer';
import { IAnimateRouterActionState, RouterDept } from './model';
import { head } from 'lodash-es';

const initialState: IAnimateRouterActionState = {
  isLoading: false,
  dept: RouterDept.hold,
  routerHistory: []
}

export const slice = createSlice({
  name: 'animateRouter',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setDept: (state, action) => {
      state.dept = action.payload;
    },
    initRouterHistory: (state, action: PayloadAction<string>) => {
      const routerPaths = action.payload.split('/').filter(x => x);
      if (routerPaths.length > 1) {
        const page = head(routerPaths) ?? '';
        state.routerHistory = [`/${page}`, action.payload];
      } else {
        state.routerHistory = [action.payload];
      }
    },
    addRouterHistory: (state, action: PayloadAction<string>) => {
      if (!state.routerHistory.includes(action.payload)) {
        state.routerHistory.push(action.payload);
        state.routerHistory = [...state.routerHistory]
      }
    },
    popRouterHistory: (state) => {
      state.routerHistory.pop();
      state.routerHistory = [...state.routerHistory]
    },
  }
})

export const animateRouter = slice.name;
export const animateRouterReducer = slice.reducer;
export const animateRouterAction = slice.actions;
export const animateRouterState = (state: RootState) => state.animateRouter

export const routerHistorySelector = (state: RootState) => state.animateRouter.routerHistory;
export const computedRouterHistory = createSelector(routerHistorySelector, x => x)
export const deptSelector = (state: RootState) => state.animateRouter.dept;
export const computedDept = createSelector(deptSelector, x => x)

export const isLoadingSelector = (state: RootState) => state.animateRouter.isLoading;
export const computedIsLoading = createSelector(isLoadingSelector, x => x)
