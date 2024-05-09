import { Injectable } from "@angular/core";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { loginFailure, loginRequest, loginSuccess } from "./user.action";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "./user-service.service";


@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginRequest),
      tap(()=>(alert('effects here'))) ,
      switchMap(({ email, password }) =>
        this.userService.loginUser(email, password).pipe(
          map(user => loginSuccess({ user })),
          catchError(error => of(loginFailure({ error: error.message })))
        )
      )
    )
  );
}
