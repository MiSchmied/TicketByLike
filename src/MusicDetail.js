import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './MusicDetail.css'

class MusicDetail extends Component {

    navigateProgramatically(e) {
        this.props.history.push('/concert/' + this.props.fbName);
    }

    render() {
        let imageUrl = "https://graph.facebook.com/v2.10/" + this.props.fbId + "/picture?limit=100&access_token=" + this.props.authtoken + "&width=140&height=140";
        return (
            <div className="cover" onClick={this.navigateProgramatically.bind(this)}>
                <img src={imageUrl} />
                </div>
        )
    }
}


export default withRouter(MusicDetail)