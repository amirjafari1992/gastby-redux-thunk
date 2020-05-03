import { types } from "../actions/types";
const initialState = {
  resultToken: "",
  user: "",
  applicationItems: "",
  application: {
    status: "",
    affiliates: "",
    userInfo: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return { ...state, user: action.user, resultToken: action.resultToken };
    case types.GET_APPLICATIONS:
      return { ...state, applicationItems: action.items };
    case types.GET_APPLICATION_STATUS:
      return {
        ...state,
        application: {
          ...state.application,
          status: action.items,
        },
      };
    case types.GET_APPLICATION_AFFILIATES:
      return {
        ...state,
        application: {
          ...state.application,
          affiliates: action.items,
        },
      };
    case types.GET_APPLICATION_USER_INFO:
      return {
        ...state,
        application: {
          ...state.application,
          userInfo: action.items,
        },
      };
    default:
      return state;
  }
};
