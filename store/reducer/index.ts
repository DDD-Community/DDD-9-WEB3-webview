import { animateRouterReducer } from '@store/reducer/animate-router';
import { authStoreReducer } from '@store/reducer/auth';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  animateRouter: animateRouterReducer,
  authStore: authStoreReducer
})

export const makeStore = () => {
  return configureStore({
    reducer: (state, action) => {
      switch (action.type) {
        case HYDRATE:
          return action.payload;
        default:
          return rootReducer(state, action);
      }
    },
  });
}

const store = makeStore();
export const wrapper  = createWrapper(makeStore)

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
