import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {connect} from "react-redux";
import Todolist from '../public/components/Todolist'
import AddTodolist from '../public/components/AddTodolist'
import EditTodolist from '../public/components/EditTodolist'

const App=(props)=> {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Todolist />
                    </Route>
                    <Route path="/add">
                        <AddTodolist />
                    </Route>
                    <Route path="/edit/:id">
                        <EditTodolist />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

function mapStateToProps(state){
    return {
        state: state
    }
}

export default connect(mapStateToProps)(App);