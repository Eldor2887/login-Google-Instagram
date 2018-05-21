import React from "react";
import { connect } from "react-redux";

class Homepage extends React.Component {
    renderBody(){
        switch(this.props.auth){
            case null:
            return;

            case false:
            return (
                <div className="container-fluid">
                    <h2>World Video Streaming</h2>
                    <div className="row">
                    <div className="col-sm-4 col-sm-offset-4">
                        <a className="btn btn-danger" 
                        href="/auth/google">
                        <i className="fa fa-google"> Login With Google </i></a>
                    </div>
                    <div className="col-sm-4 col-sm-offset-4">
                        <a className="btn btn-warning" 
                        href="/auth/instagram">
                        <i className="fa fa-instagram"> Login With Instagram</i></a>
                    </div>
                    <div className="col-sm-4 col-sm-offset-4">
                        <a className="btn btn-primary" 
                        href="/auth/facebook">
                        <i className="fa fa-facebook"> Login With Facebook</i></a>
                    </div>
                    </div>
                </div>
            );
            default:
            return (<div>
            <h2>Welcome to iWatch</h2>
            <h2>Online Video Streaming</h2>
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