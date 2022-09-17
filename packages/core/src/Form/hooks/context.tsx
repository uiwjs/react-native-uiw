import React, { createContext, useContext, PropsWithChildren, FC, useReducer } from 'react';
import useForm from './useForm';

export interface InitialState {}

export interface CreateContext {
  state: Partial<InitialState>;
  dispatch: React.Dispatch<InitialState>;
}

export const initialState = {};

const Context = createContext<CreateContext & any>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: Partial<InitialState>, action: Partial<InitialState>) => {
  return {
    ...state,
    ...action,
  };
};

const Provider: FC<PropsWithChildren<any>> = ({ contextProps, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ ...contextProps, state, dispatch }}>{children}</Context.Provider>;
};

export { Context, reducer, Provider };
