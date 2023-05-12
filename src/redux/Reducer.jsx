import {
  DELETE,
  EDIT,
  FETCH_USER_FAILED,
  FETCH_USER_SUCCESS,
  REMOVEID,
  SAVEEDIT,
  USERDATA,
} from "./Type";
const INITIALSTATE = {
  userData: [],
  Edit: null,
  chartData: "",
  error: "",
};

const Reducer = (state = INITIALSTATE, action) => {
  console.log(action.payload);
  console.log(state.userData);

  switch (action.type) {
    case USERDATA:
      return {
        ...state,
        userData: [...state.userData, action.payload],
      };
    case DELETE:
      return {
        ...state,
        userData: [...state.userData].filter((item, i) => i !== action.payload),
      };
    case EDIT:
      return {
        ...state,
        Edit: action.payload,
      };
    case REMOVEID:
      return {
        ...state,
        Edit: null,
      };
    case SAVEEDIT:
      const res = state.userData.splice(state.Edit, 1, action.payload);
      console.log(res);
      return {
        ...state,
        userData: [...res],
        Edit: null,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        chartData: action.payload,
        error: "",
      };
    case FETCH_USER_FAILED:
      return {
        ...state,
        chartData: [],
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default Reducer;
