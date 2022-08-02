import React, { Component } from "react";
import AuthContext from "./authcontext";
import Router from 'next/router'

class AuthUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            user:{}
            
        }
    }

    async componentDidMount() {

    }

    setUser = (userData) => {
        this.setState({
            authenticated: true,
            user:userData
        })

        if (window && window.HaptikSDK) {

            window.HaptikSDK.signup(userData, function (success, error, data) {
              if (success) {
                console.log('SIGNUP REQUEST SUCCEEDED!', data);
      
              } else {
                console.log('ERROR:', error);
              }
            });
        }
      
        console.log('Set User')

        window.localStorage.setItem("data",JSON.stringify(userData));

    }






    logout = () => {
        this.setState({
            authenticated : false
        })

        let valuesCount = Number(window.localStorage.getItem("userCount")) + 1;
        console.log(valuesCount)

        if(valuesCount > 2){
            window.localStorage.setItem("userCount", 0);


        }else{
            window.localStorage.setItem("userCount", valuesCount);
        }
        

        
        HaptikSDK.logout();

        window.localStorage.setItem("authenticated", false)
        // window.localStorage.setItem("data", )

        Router.replace("/login")

    };

    render() {
        const authProviderValue = {
            ...this.state,
            setUser: this.setUser,
            logOut: this.logout,
        };
        return (
            <AuthContext.Provider value={authProviderValue}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthUser;
// show={this.state.alertmsg === '' ? false : true} message={this.state.alertmsg} onAlertBoxClick={this._ShowAlert