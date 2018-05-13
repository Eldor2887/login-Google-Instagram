import React from 'react';
import PropTypes from 'prop-types';

export default class SignupForm extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             firstname: '',
             lastname: '',
             email: '',
             password: '',
             password2: ''
         }
         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
     }
     onChange(e) {
         this.setState({
             [e.target.name]: e.target.value
         });
     }
     onSubmit(e) {
         e.preventDefault();
         //console.log(this.state);
         //axios.post('/api/users', { user: this.state });
         this.props.userSignupRequest(this.state);
     }
    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                        <div className="row">
                         <div className="form-group col-sm-4 col-sm-offset-4">
                        <label className="control-label">Firstname:</label>
                        <input type="text" name="firstname"
                        value={this.state.firstname}
                        onChange={this.onChange.bind(this)} 
                        className="form-control" 
                        placeholder="Enter first name"/>
                        </div>
                         <div className="form-group col-sm-4 col-sm-offset-4">
                        <label className="control-label">Lastname:</label>
                        <input type="text" name="lastname"
                        value={this.state.lastname}
                        onChange={this.onChange.bind(this)}  
                        className="form-control" 
                        placeholder="Enter last name"/>
                        </div>
                        <div className="form-group col-sm-4 col-sm-offset-4">
                        <label className="control-label">Email:</label>
                        <input type="email" name="email"
                        value={this.state.email}
                        onChange={this.onChange.bind(this)} 
                        className="form-control" 
                        placeholder="Enter email address"/>
                        </div>
                        <div className="form-group col-sm-4 col-sm-offset-4">
                        <label className="control-label">Password:</label>
                        <input type="password" name="password"
                        value={this.state.password}
                        onChange={this.onChange.bind(this)} 
                        className="form-control"
                        placeholder="Enter password"/>
                        </div>
                        <div className="form-group col-sm-4 col-sm-offset-4">
                        <label className="control-label">Password:</label>
                        <input type="password" name="password2"
                        value={this.state.password2}
                        onChange={this.onChange.bind(this)} 
                        className="form-control" 
                        placeholder="Enter password again"/>
                        </div>
                        <div className="form-group col-sm-4 col-sm-offset-4">
                        <input type="submit" value="Signup" 
                        className="form-control btn btn-danger"/>
                        </div>
                        <div className="form-group col-sm-4 col-sm-offset-4">
                        <a href="/">Already have an account?</a>
                        </div>
                        </div>
                    </form>
            </div>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}