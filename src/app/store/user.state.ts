import { userModel } from "./user.model";

export interface UserState{
  user:userModel | null;
  users:userModel[];
  isloading:boolean;
  error:undefined | string
}

export const initialState:UserState={
  user:null,
  users:[],
  error:'',
  isloading:false
}