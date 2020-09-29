import { CREATE_DOCTOR_TYPES, EDIT_DOCTOR_TYPES, DELETE_DOCTOR_TYPES } from './actionType';

export const createDoctorTypes = (doctorTypes) => ({
    type: CREATE_DOCTOR_TYPES,
    payload: doctorTypes
});

export const editDoctorTypes = (doctorTypes) => ({
    type: EDIT_DOCTOR_TYPES,
    payload: doctorTypes,
});

export const deleteDoctorTypes = () => {
    type: DELETE_DOCTOR_TYPES
}