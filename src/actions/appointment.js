import { CREATE_APPOINTMENT, EDIT_APPOINTMENT, DELETE_APPOINTMENT } from 'actionType';

export const createAppointment = (appointment) => ({
    type: CREATE_APPOINTMENT,
    payload: appointment,
});

export const editAppointment = (appointment) => ({
    type: EDIT_APPOINTMENT,
    payload: appointment,
});

export const deleteAppointment = () => ({
    type: DELETE_APPOINTMENT,
}); 