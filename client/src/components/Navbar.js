import React from "react";
import { connect } from "react-redux";
import Payments from './Payments';

class Navbar extends React.Component {
    renderContent(){
        switch(this.props.auth){

            case null:
            return;

            case false:
            return;

            default:
            return [
            <li key="1"><a><Payments/></a></li>,
            <li key="2"><a id="days"><button className="btn btn-info">
            {this.props.auth.credits} days</button></a></li>,
            <li key="3"><a href="/api/logout"><button className="btn btn-danger">Logout</button></a></li>
        ]
        }
    }
    render() {
        return (
            <div>
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>                        
            </button>
                <a className="navbar-brand" href="/"><i className="fa fa-video-camera"></i></a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                   <li><a href="/"><i className="fa fa-home"></i></a></li>
                   <li><a href="/dashboard"><i className="fa fa-address-card"></i></a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    {this.renderContent()}
                </ul>
                </div>
            </div>
            </nav>
            </div>
        );
    }
}
function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Navbar);