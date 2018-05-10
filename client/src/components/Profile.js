import React from "react";
import { connect } from "react-redux";

class Profile extends React.Component {
    renderInfo(){
        switch(this.props.auth){
            case null:
            return <p>Loading....</p>;
            case false:
            return <p>You are not logged in</p>;
            default:
            return (
            <div className="row">
            <div className="col-sm-6">
                <img className="img-responsive img-circle" src={this.props.auth.userProfilePicture}/>
            </div>
            <div className="col-sm-6">
            <h2>Profile</h2>
            <h3>Firstname: {this.props.auth.userFirstname}</h3>
            <h3>Lastname: {this.props.auth.userLastname}</h3>
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

export default connect(mapStateToProps)(Profile);