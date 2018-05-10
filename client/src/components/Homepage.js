import React from "react";
import { connect } from "react-redux";

class Homepage extends React.Component {
    renderBody(){
        switch(this.props.auth){
            case null:
            return;

            case false:
            return (
                <div>
                    <h1>iMeet Online Dating</h1>
                <a href="/auth/google"><i className="fa fa-google"></i><button>Login With Google</button></a>
                <a href="/auth/instagram"><i className="fa fa-instagram"></i><button>Login With Instagram</button></a>
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