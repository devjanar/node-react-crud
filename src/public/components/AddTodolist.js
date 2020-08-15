import React, {useState} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import ReactQuill from 'react-quill';
import { QuillModules_System, QuillFormats_System} from '../utils/quill';
import {createItem} from '../actions/todoAction'
import { useHistory } from "react-router-dom";
import InputForm from './common/InputForm'

const AddTodolist = ({...props }) => {
    let history = useHistory();
    const [state, setState] = useState(
        {
            name:"",
            description:"",
            submitted:false
        }
    );
    const onChangeHandler = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        state[name] = value;
        setState({ ...state});
    };
    //
    const submitHandler = (e) => {
        e.preventDefault();
        setState({ ...state,submitted:true});
        if(state.name){
            const {submitted,...data}=state;
            props.createItem(data).then(() => {
                    history.push('/')
                },
                err => {
                    alert(err.data.error)
                }
            )
        }
    };
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <h1>
                            Item
                            <Link to="/" className="btn btn-info" style={{float: 'right',minWidth: '120px'}}>
                                <i className="ion ion-ios-arrow-back"></i> <span>Back </span>
                            </Link>
                        </h1>
                        <div className="form-group">
                            <InputForm
                                label="Name"
                                name="name"
                                type="text"
                                placeholder="Name"
                                onChange={onChangeHandler}
                                className="form-control"
                                value={state.name}
                                submitted={state.submitted}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <ReactQuill
                                modules={QuillModules_System}
                                formats={QuillFormats_System}
                                value={state.description || ''}
                                onChange =
                                    {(newValue, delta, source) => {
                                        if (source === 'user') {
                                            setState({ ...state,description:newValue});
                                        }
                                    }}
                            />
                        </div>
                        <button className="btn btn-warning"
                                style={{width:'100%'}} onClick={submitHandler}>
                            Add
                        </button>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        </React.Fragment>
    );
};

function mapStateToProps(state){
    return {
        list: state.list.data
    }
}
const mapDispatchToProps = dispatch => ({
    createItem(data) {
        return dispatch(createItem(data))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodolist);