import React, { Component } from 'react';
import FacebookComponent from './FacebookComponent.js'
import FacebookData from './FacebookData.js'

class FacebookStart extends React.Component {
    // render() {
    //     return (
    //         <FacebookComponent />
    //     )
    // }

    constructor (props)
    {
        super(props);
        this.authtoken = null;
        this.state = {
            isLoggedIn: false
        };
    }

    loginCallback(value){
        this.setState({isLoggedIn:true}, () => {
            this.render();
        });
        this.authtoken = localStorage.getItem('fbToken');
    }

    logout(){
        this.setState({isLoggedIn: false});
        localStorage.removeItem('fbToken');
    }

    render(){
        this.authtoken = localStorage.getItem('fbToken');
        if (this.authtoken !== null){
            this.state = {
                isLoggedIn: true
            }
        }
        return(
            <div>
                {!this.state.isLoggedIn ? (
                    <FacebookComponent loginCallback={this.loginCallback.bind(this)}/>
                ) : (
                    <FacebookData authtoken={this.authtoken} />
                )}
            </div>
        )
    };
}

export default FacebookStart;