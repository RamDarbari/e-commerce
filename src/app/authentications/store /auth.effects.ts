import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { User } from "src/app/data";
import * as AuthActions from '../store /auth.action';

@Injectable()
export class AuthEffects {

    constructor(private _auth: AuthService, private action$: Actions) { }

    // login$ = createEffect(() =>
    //     this.action$.pipe(
    //         ofType(AuthActions.Login),
    //         switchMap((action) =>
    //             this._auth.userLogin(action.loginData).pipe(
    //                 map((user: User) => AuthActions.LoginSuccess({ user }))
                    
    //             )
    //         )

    //     )
    // )
}