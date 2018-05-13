import React from "react";
import SignupForm from './SignupForm';
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import { userSignupRequest } from '../actions/index';

class Signup extends React.Component {
   
    render(){
        const { userSignupRequest } = this.props;
        return(
            <div className="container-fluid">
                <h2>Create an Account</h2>
                 <SignupForm userSignupRequest={userSignupRequest}/>
            </div>
        );
    }
}

Signup.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(Signup)