import React, {useState,useEffect} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import ReactQuill from 'react-quill';
import { QuillModules_System, QuillFormats_System} from '../utils/quill';
import {findOneItem,updateItem} from '../actions/todoAction'
import { useHistory,useParams } from "react-router-dom";
import InputForm from './common/InputForm'

const EditTodolist = ({...props }) => {
    let history = useHistory();
    let { id } = useParams();
    //
    const [state, setState] = useState({
            name:"",
            description:"",
            submitted:false
        }
    );
    //
    useEffect(()=>{
        findhandler();
    },[id]);
    useEffect(()=>{
        initHandler();
    },[props.todoList]);
    //
    const findhandler = () => {
        if(id){
            props.findOneItem({id:id})
        }
    };
    const initHandler=()=>{
        setState({...state,...props.todoList})
    };
    //
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
            props.updateItem(data).then(() => {
                    history.push('/')
                },
                err => {
                  alert(err.data.error)
                }
            )
        }
    };
    //
    //
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
                            Update
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
        todoList: state.list.data
    }
}
const mapDispatchToProps = dispatch => ({
    findOneItem(id) {
        return dispatch(findOneItem(id))
    },
    updateItem(data) {
        return dispatch(updateItem(data))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTodolist);