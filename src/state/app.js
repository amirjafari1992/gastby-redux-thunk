import { types } from "../actions/types";
const initialState = {
  isDarkMode: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SAMPLE_TYPE:
      return { ...state, isDarkMode: !action.darkModeStatus };
    default:
      return state;
  }
};
