import { Types } from "../constants/actionTypes"
// import { Types } from '../constants/actionTypes';
// actions are simple objects with one mandatory property type.
// You dispatch actions from your component to send data to the state store.

// [LOGIN, ADD_USER, UPDATE_USER, UPDATE_PROFILE_PICTURE, FORM_SUBMITION_STATUS] = Types;
export const ActionCreators = {

    addProfile: (user) => ({ type: Types.ADD_USER, payload: { user } }),
    updateProfileImage: (image) => ({ type: Types.UPDATE_PROFILE_PICTURE, payload: { image } }),
    updateProfile: (user) => ({ type: Types.UPDATE_USER, payload: { user } }),
    formSubmittionStatus: (status) => ({ type: Types.FORM_SUBMITION_STATUS, payload: { status } }),
    login: (user) => ({ type: Types.LOGIN, payload: { user } })

}