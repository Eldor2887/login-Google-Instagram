import React from "react";
import { connect } from "react-redux";

class Homepage extends React.Component {
    renderBody(){
        switch(this.props.auth){
            case null:
            return;

            case false:
            return (
                <div className="container">
                    <h2>iMeet Online Dating</h2>
                    <form>
                    <div className="row">
                    <div className="form-group col-md-4 col-md-offset-4">
                        <a className="form-control btn btn-primary btn-lg" 
                        href="/auth/google">
                        Login With Google <i className="fa fa-google right"></i></a>
                    </div>
                    <div className="form-group col-md-4 col-md-offset-4">
                        <a className="form-control btn btn-primary btn-lg" 
                        href="/auth/instagram">
                        Login With Instagram <i className="fa fa-instagram right"></i></a>
                    </div>
                    </div>
                    </form>
                    <p id="divider">- Or -</p>
                    <form>
                        <div className="row">
                        <div className="form-group col-md-4 col-md-offset-4">
                        <input type="email" name="email" 
                        className="form-control" 
                        placeholder="Enter email address"/>
                        </div>
                        <div className="form-group col-md-4 col-md-offset-4">
                        <input type="password" name="password"
                        className="form-control"
                        placeholder="Enter password"/>
                        </div>
                        <div className="form-group col-md-4 col-md-offset-4">
                        <input type="submit" value="Login" 
                        className="form-control btn btn-danger"/>
                        </div>
                        <div className="form-group col-md-4 col-md-offset-4">
                        <a href="/signup">Need an Account?</a>
                        </div>
                        </div>
                    </form>
                </div>
            );
            default:
            return (<div>
            <h2>Welcome to iMeet</h2>
            <p>You are logged in</p>
            </div>);
        }
    }
    render(){
        return(
            <div className="container">
                {this.renderBody()}                
            </div>
        );
    }
}
function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Homepage);