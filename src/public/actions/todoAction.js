import axios from "axios";


export const ADD_SUCCESS = 'ADD_SUCCESS';
function addRequest() {
    return { type: ADD_SUCCESS }
}
export const CREATE_SUCCESS = 'CREATE_SUCCESS';
export const createRequest = (data) => {
    return { type: CREATE_SUCCESS, data }
};
export const FIND_SUCCESS = 'FIND_SUCCESS';
function findOneRequest(data) {
    return { type: FIND_SUCCESS, data }
}
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
function updateRequest(data) {
    return { type: UPDATE_SUCCESS, data }
}
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
function deleteRequest(data) {
    return { type: DELETE_SUCCESS, data }
}
export const FETCH_ALL_SUCCESS = 'FETCH_ALL_SUCCESS';
function fetchAllRequest(data) {
    return { type: FETCH_ALL_SUCCESS, data }
}
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
function receiveError(error) {
    return { type: RECEIVE_ERROR, error }
}


export const createItem = (data) => {
    return  (dispatch) => {
        dispatch(addRequest());
        const rs= axios.post('/todo/create',data);
        return Promise.resolve(rs).then(
            data => {
                dispatch(createRequest(data));
                return data;
            },
            error => {
                dispatch(receiveError(error.response));
                throw error.response;
            }
        )
    }
};
export const findOneItem = (data) => {
    return  (dispatch) => {
        const rs= axios.post('/todo/findOne',data);
        return Promise.resolve(rs).then(
            data => {
                dispatch(findOneRequest(data));
            },
            error => {
                dispatch(receiveError(error.response));
                throw error.response;
            }
        )
    }
};
export const updateItem = (data) => {
    return  (dispatch) => {
        const rs= axios.post('/todo/update',data);
        return Promise.resolve(rs).then(
            success => {
                dispatch(updateRequest(success));
                return success;
            },
            error => {
                dispatch(receiveError(error.response));
                throw error.response;
            }
        )
    }
};
export const deleteItem = (data) => {
    return  (dispatch) => {
        const rs= axios.post('/todo/remove',data);
        return Promise.resolve(rs).then(
            response => {
                dispatch(deleteRequest({data:response.data}));
            },
            error => {
                dispatch(receiveError(error.response));
                throw error.response;
            }
        )
    }
};
export function fetchHandler() {
    return (dispatch) => {
        let promise=axios.get('/todo');
        return Promise.resolve(promise).then(
            response => {
                dispatch(fetchAllRequest({data:response.data}));
            },
            error => {
                dispatch(receiveError(error.response));
                throw error.response;
            }
        )
    }
}