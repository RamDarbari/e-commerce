import { createReducer, on } from "@ngrx/store";
import { initialAuthState } from "./auth.state";
import * as AuthActions from '../store /auth.action';

export const authReducer = createReducer(
    initialAuthState,

    on(AuthActions.LoginSuccess, (state, { user }) => ({
        ...state,
        isAuthenticated: true,
        user
      })),

      on(AuthActions.LoginFailure, (state, { error }) => ({
        ...state,
        error
      })),

    on(AuthActions.signUpSuccess,(state,{user}) =>({
        ...state,
        isAuthenticated:true,
        user
    })),

    on(AuthActions.signUpFailure,(state,{error}) =>({
        ...state,
        error
        }))

)