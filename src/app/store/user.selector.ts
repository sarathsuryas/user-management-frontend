import { createSelector } from '@ngrx/store';
import { UserState } from './user.state';
import { AppState } from './app.state';

export const selectUserState = (state: AppState) => state.user;

export const selectUser = createSelector(
  selectUserState,
  (state: UserState) => state.user
);

export const selectLoading = createSelector(
  selectUserState,
  (state: UserState) => state.isloading
);

export const selectError = createSelector(
  selectUserState,
  (state: UserState) => state.error
);
