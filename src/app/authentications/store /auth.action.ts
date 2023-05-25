import { createAction, props } from "@ngrx/store";
import { User, login, signUp } from "src/app/data";

export const Login = createAction(
    "[Auth] Login",
    props<{ loginData: login }>()
);

export const LoginSuccess = createAction(
    "[Auth] Login Success",
    props<{ user: User }>()
);

export const LoginFailure = createAction(
    '[Auth] Login Failure',
    props<{ error: string }>()
);

export const signup = createAction(
    "[Auth] Sign Up",
    props<{ signUpData: signUp }>()
);

export const signUpSuccess = createAction(
    "[Auth] Sign Up Success",
    props<{ user: User }>()
);
export const signUpFailure = createAction(
    '[Auth] Sign Up Failure',
    props<{ error: string }>()
);

