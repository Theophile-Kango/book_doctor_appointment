import { EDIT_PROFILE } from './actionType';

export const editProfile = (profile) => ({
    type: EDIT_PROFILE,
    payload: profile
})