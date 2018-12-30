import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LoginAction = '[Login] Action',
  LogoutnAction  = '[Logout] Actions' 
}

export class Login implements Action {
  readonly type = AuthActionTypes.LoginAction;
}

export type AuthActions = Login;
