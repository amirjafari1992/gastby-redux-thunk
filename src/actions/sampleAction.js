import { types } from "./types";

export const sampleFunction = (data) => (dispatch) => {
  alert(data)
      dispatch({
        type: types.SAMPLE_TYPE,
        darkModeStatus: data,
      });
};
