import React, { Component } from 'react';
import FacebookLogin  from 'react-facebook-login';
import './FacebookComponent.css';
import { Button } from 'react-bootstrap';
class FacebookComponent extends Component {

    static responseFacebook(response) {
        console.log(response);
        if (response.accessToken) {
            localStorage.setItem('fbToken', response.accessToken);
            localStorage.setItem('fbUserId', response.id);
            this.props.loginCallback(response.accessToken);
        }
    }


    render() {
        return (
            <div className="facebookButton">
            {/* <FacebookLogin socialId="303059573504837"
                language='de_DE'
                scope='public_profile,email,user_actions.music,user_likes'
                responseHandler={FacebookComponent.responseFacebook.bind(this)}
                xfbml={true}
                fields='id,email,name'  
                version='v2.10'
                className='facebook-login'
                buttonText='Login with Facebook' />  */}

                 <FacebookLogin
                    appId="303059573504837"
                    autoLoad={true}
                    fields="name,email,picture"
                    scope="public_profile,email,user_actions.music,user_likes"
                    callback={FacebookComponent.responseFacebook.bind(this)} 
                    icon="fa-facebook"
                />
            </div>
        )
    };
}

export default FacebookComponent