import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/reducer';

export const useReducerDispatch: () => AppDispatch = useDispatch;
export const useReducerSelector: TypedUseSelectorHook<RootState> = useSelector;
