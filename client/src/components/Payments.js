import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from 'react-redux';
import * as actions from '../actions';


class Payments extends React.Component {
    render(){
        return (
            <StripeCheckout
            name="iWatch"
            description="$5/month for unlimited videos"
            amount={500}
            token={token => this.props.handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
            <button className="btn btn-info">Buy Credits</button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);