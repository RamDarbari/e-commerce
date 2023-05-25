import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const selectAuthState = createFeatureSelector<AuthState>('auth');
export const selectLoggedIn = createSelector(selectAuthState, (state) => state.user);
export const selectError = createSelector(selectAuthState, (state) => state.error);
