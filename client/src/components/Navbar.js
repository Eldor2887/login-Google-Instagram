import React from "react";
import { connect } from "react-redux";

class Navbar extends React.Component {
    renderContent(){
        switch(this.props.auth){

            case null:
            return;

            case false:
            return;

            default:
            return <li><a href="/api/logout">Logout</a></li>;
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
                <a className="navbar-brand" href="/">iMeet</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                   <li><a href="/">Home</a></li>
                   <li><a href="/profile">Profile</a></li>
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