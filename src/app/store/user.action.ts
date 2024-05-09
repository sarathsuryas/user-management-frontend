import { createAction, props } from "@ngrx/store";
import { userModel } from "./user.model";


export const loginRequest = createAction('[user] login',props<{email:string,password:string}>());
export const loginSuccess =  createAction('[user] login Success',props<{user:userModel}>());
export const loginFailure = createAction('[user] login Failure',props<{error:string}>())