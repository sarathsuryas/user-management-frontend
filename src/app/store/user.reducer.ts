import { createReducer, on } from "@ngrx/store";
import { initialState } from "./user.state";
import { loginFailure, loginRequest, loginSuccess } from "./user.action";

export const userReducer = createReducer(
  initialState,
  on(loginRequest, (state,) => ({
    ...state,
    isLoading: true,
    error:undefined
  })),
  on(loginSuccess, (state, action) => ({
    ...state,
    user: action.user,
    isLoading: false,
    error: undefined
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  }))
);
