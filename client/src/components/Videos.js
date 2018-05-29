import React from "react";
import { connect } from "react-redux";

class Videos extends React.Component {
    renderVideos(){
        switch(this.props.auth){
            case null:
            return (
            <div className="container-fluid">
                <div className="row">
                       <div className="col-md-4 col-md-offset-4">
                           <i className="fa fa-spinner fa-spin"></i>
                        </div>
                </div>
            </div>);
            case false:
            return <p>You are not logged in. Please <a href="/">Login</a></p>;
            default:
             return (
                <div>
                    <p>{this.props.auth.credits > 0 ? 'You are Premium Member! Enjoy unlimited videos':'You are not Premium Member. Please subscribe to watch unlimited videos' }</p>
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