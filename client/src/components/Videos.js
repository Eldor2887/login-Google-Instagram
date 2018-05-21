import React from "react";
import { connect } from "react-redux";

class Videos extends React.Component {
    renderVideos(){
        switch(this.props.auth){
            case null:
            return <p>Loading videos...</p>;
            case false:
            return <p>You are not logged in. Please <a href="/">Login</a></p>;
            default:
             return (
                <div>
                    <p>You are logged in.</p>
                    <p>Your videos will display here...</p>
                </div>
            );
        }
    }
    render(){
        return (
            <div className="container-fluid">
            {this.renderVideos()}
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Videos);