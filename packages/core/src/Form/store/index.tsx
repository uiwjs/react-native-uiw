import React, { createContext, useContext, PropsWithChildren, FC, useReducer } from 'react';

export interface InitialState {
  formValues: any; // 表单数据
}

export interface CreateContext {
  state: Partial<InitialState>;
  dispatch: React.Dispatch<InitialState>;
}

export const initialState = {
  formValues: {},
};

const Context = createContext<CreateContext>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: Partial<InitialState>, action: Partial<InitialState>) => {
  return {
    ...state,
    ...action,
  };
};

const Provider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

function useFormContext() {
  const { state, dispatch } = useContext(Context);
  return { ...state, state, dispatch };
}

export { Context, reducer, Provider, useFormContext };
