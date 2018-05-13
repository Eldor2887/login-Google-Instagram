import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions';

import Navbar from "./Navbar";
import Homepage from './Homepage';
import Profile from './Profile';

class App extends React.Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
       return(
        <div>
           <BrowserRouter>
                <div>
                    <Navbar/>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/profile" component={Profile}/>
                </div>
            </BrowserRouter>
        </div>
        );
    }
}
// we use this method to connect app to redux
export default connect(null, actions)(App);