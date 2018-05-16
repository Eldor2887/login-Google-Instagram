import React from "react";
import { connect } from "react-redux";

class Dashboard extends React.Component {
    renderInfo(){
        switch(this.props.auth){
            case null:
            return <p>Loading....</p>;
            case false:
            return <p>You are not logged in. Please <a href="/">Login</a></p>;
            default:
            return (
            <div className="row">
            <div className="col-sm-2">
            <img className="img-responsive img-circle" src={this.props.auth.userProfilePicture} alt="user"/>
            <h3 className="userfullname">{this.props.auth.userFullname}</h3>
            </div>
            <div className="col-sm-8">
            
            </div>
            </div>
            );
        }
    }
    render() {
        return (
            <div className="container-fluid">
                {this.renderInfo()}
            </div>
        );
    }
}
function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Dashboard);