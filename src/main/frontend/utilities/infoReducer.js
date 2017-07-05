import * as actionTypes from './actions';

// INITIAL STATE
const initialState = {
    username : 'Kari Nordmann',
    activeContactEmail : 'email@email.com',
    activeContactPhone : '12345678',
    activeReservation: true,
};

// REDUCER
export default function GamificationReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SAVE_CONTACT_PHONE:
            return {
                ...state,
                activeContactPhone: action.contactPhone,
            };
        case actionTypes.SAVE_CONTACT_EMAIL:
            return {
                ...state,
                activeContactEmail: action.contactEmail,
            };
        case actionTypes.SET_RESERVATION:
            return {
                ...state,
                activeReservation: true,
            };
        case actionTypes.REMOVE_RESERVATION:
            return {
                ...state,
                activeReservation: false,
            };
        default:
            return state;
    }
}