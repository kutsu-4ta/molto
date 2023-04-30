import { atom } from 'recoil'

export const signUpFormUserIdState = atom({
    key: 'signUpFormUserId' ,
    default: ''
});

export const signUpFormPassWordState = atom({
    key: 'signUpFormPassWord' ,
    default: ''
});

export const signUpFormReInputPassWordState = atom({
    key: 'signUpFormReInputPassWord' ,
    default: ''
});