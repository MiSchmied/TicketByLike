import React, { Component } from 'react';
import { FacebookLogin } from 'react-facebook-login-component';

class FacebookComponent extends Component {

    static responseFacebook (response) {
        console.log(response);
        if (response.accessToken){
            localStorage.setItem('fbToken', response.accessToken);
            localStorage.setItem('fbUserId', response.id);
            this.props.loginCallback(response.accessToken);
        }
    }


    render(){
        return (
            <div>
            <FacebookLogin socialId="303059573504837"
            // <FacebookLogin socialId="116656659050875"
            language="de_DE"
            scope="public_profile,email,user_actions.music,user_likes"
            responseHandler={FacebookComponent.responseFacebook.bind(this)}
            xfbml={true}
            fields="id,email,name"
            version="v2.10"
            className="facebook-login"
            buttonText="Login With Facebook" />
            </div>
        )
    };
}

export default FacebookComponent