import React, {useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {deleteBeforeConfirm} from '../utils/service'
import {fetchHandler,deleteItem} from '../actions/todoAction'


const Todolist = ({...props}) => {
    const [state, setState] = useState([]);
    //
    useEffect(()=>{
        fetchItemHanlder();
    },[]);
    useEffect(()=>{
        initHandler();
    },[props.todoList]);
    //
    const fetchItemHanlder=()=>{
        props.fetchHandler();
    };
    const initHandler=()=>{
        setState({...state,...props.todoList})
    };
    //
    const listItems=()=>{
        if(state && state.data && state.data.length){
            return(
                state.data.map((item,index)=>{
                    return(
                        <tr key={item._id}>
                            <th width="5%">{index+1}</th>
                            <td width="10%">{item.name}</td>
                            <td width="10%" align="center">
                                <Link className="btn btn-warning"
                                      to={`/edit/${item._id}`}
                                      style={{padding: '9px',minWidth: '60px',marginRight: '7px'}}
                                >
                                    <i className="far fa-edit"></i>
                                </Link>
                                <button className="btn btn-danger"
                                        style={{}} onClick={(e)=>deleteHandler(e,item._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                })
            )
        }
    };
    //
    const deleteHandler = (e,id) => {
        e.preventDefault();
        let confirm=deleteBeforeConfirm();
        if(confirm && id){
            props.deleteItem({id:id});
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
                            Todo Lists
                            <Link to="/add" className="btn btn-info" style={{float: 'right',minWidth: '120px'}}>
                                <i className="ion ion-ios-arrow-back"></i> <span>Add </span>
                            </Link>
                        </h1>
                        <table className="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Name</th>
                                <th scope="col" style={{textAlign:'center'}}>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {listItems()}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        </React.Fragment>
    );
};

function mapStateToProps(state){
    return {
        todoList: state.list
    }
}
const mapDispatchToProps = dispatch => ({
    fetchHandler() {
        return dispatch(fetchHandler())
    },
    deleteItem(id) {
        return dispatch(deleteItem(id))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);