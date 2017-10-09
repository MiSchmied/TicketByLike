import React, { Component } from 'react';
import graph from 'fb-react-sdk';
import MusicInterest from './MusicInterest.js';
import {withRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class FacebookData extends Component {

constructor (props){
    super(props);
    this.state = {
        musical: []
    };
    graph.setAccessToken(this.props.authtoken);
    graph.setVersion("2.10");
    graph.get('me/music', {limit: 100, access_token: this.props.authtoken}, this.loadMusic.bind(this));
}

loadMusic (err, res)
{
    if (res !== null)
        {
            this.setState({
                musical: res.data, function(){
                    this.render();
                }
                
            })
        }
        if(err!=null)
        {
                 localStorage.removeItem('fbToken');
                 this.setState({isLoggedIn: false});
                 this.props.history.push('/');
             }
}

render() {
    return (
        <MusicInterest data={this.state.musical} authtoken={this.props.authtoken} />
   
    )
}

}

export default withRouter(FacebookData)