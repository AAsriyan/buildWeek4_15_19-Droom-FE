import { SET_SEEKER_PROFILE } from "../actions/types";

const initialState = {
  seekerProfile: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SEEKER_PROFILE:
      return {
        ...state,
        seekerProfile: action.payload
      };
    default:
      return state;
  }
}
