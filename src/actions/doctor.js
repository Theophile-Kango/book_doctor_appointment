import { CREATE_DOCTOR, EDIT_DOCTOR, DELETE_DOCTOR } from './actionType';

export const createDoctor = (doctor) => ({
    type: CREATE_DOCTOR,
    payload: doctor,
});

export const editDoctor = (doctor) => ({
    type: EDIT_DOCTOR,
    payload: doctor,
});

export const deleteDoctor = () => ({
    type: DELETE_DOCTOR,
})