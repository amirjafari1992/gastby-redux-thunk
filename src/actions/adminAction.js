import { types } from "./types";

export const sampleFunction = (data) => (dispatch) => {
      dispatch({
        type: types.SAMPLE_TYPE,
        item: data,
      });
};
