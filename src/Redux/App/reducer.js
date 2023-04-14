import { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from "./actionType";

const initialState = { contacts: [] };

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, payload] };
      
    case EDIT_CONTACT:
      return { ...state, contacts: payload };

    case DELETE_CONTACT:
      return { ...state, contacts: payload };
    default:
      return state;
  }
};
