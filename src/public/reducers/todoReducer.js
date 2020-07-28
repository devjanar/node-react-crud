import {
  ADD_SUCCESS,
  CREATE_SUCCESS,
  RECEIVE_ERROR,
  FIND_SUCCESS,
  UPDATE_SUCCESS,
  DELETE_SUCCESS,
  FETCH_ALL_SUCCESS,
} from '../actions/todoAction'

const initialState = {
  inProgress: false,
  data: [],
  error: null,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUCCESS:
      return { inProgress:true, error:null};
    case CREATE_SUCCESS:
      return { ...action.data, inProgress:false, error:null};
    case FIND_SUCCESS:
      return { ...action.data, inProgress:false, error:null};
    case UPDATE_SUCCESS:
      return { ...action.data, inProgress:false, error:null};
    case DELETE_SUCCESS:
      return { ...action.data, inProgress:false, error:null};
    case FETCH_ALL_SUCCESS:
      return { ...action.data, inProgress:false, error:null};
    case RECEIVE_ERROR:
      return { inProgress:false, error:true};
    default:
      return state
  }
}

