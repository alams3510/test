import {
  USERDATA,
  DELETE,
  EDIT,
  REMOVEID,
  SAVEEDIT,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
} from "./Type";

export const saveUser = (values) => {
  console.log(values);
  return {
    type: USERDATA,
    payload: values,
  };
};
export const Did = (x) => {
  console.log(x);
  return {
    type: DELETE,
    payload: x,
  };
};
export const edit = (x) => {
  console.log(x);
  return {
    type: EDIT,
    payload: x,
  };
};
export const removeId = () => {
  return {
    type: REMOVEID,
  };
};
export const saveEdit = (val) => {
  console.log(val);
  return {
    type: SAVEEDIT,
    payload: val,
  };
};
export const fetchCases = () => (dispatch) => {
  fetch("https://disease.sh/v3/covid-19/countries")
    .then((res) => res.json().then((data) => dispatch(fetchDataSuccess(data))))
    .catch((err) => dispatch(fetchDataFailure(err)));
};

export const fetchDataSuccess = (data) => {
  console.log(data);
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
  };
};
export const fetchDataFailure = (error) => {
  return {
    type: FETCH_USER_FAILED,
    payload: error,
  };
};
