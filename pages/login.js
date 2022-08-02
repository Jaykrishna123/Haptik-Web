import Router from 'next/router'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import AuthContext from '../config/authcontext'
import AuthUser from '../config/authuser'

const data = [
    {
        username: 'Jay',
        auth_id: '234',
        auth_code: '890ad',
        mobile_no: '7900090188',
        email: 'jay@gmail.com',


    },
    {
        username: 'Rohit',
        auth_id: '456',
        auth_code: '123ab',
        mobile_no: '1234567890',
        email: 'rohit@gmail.com',


    },
    {
        username: 'Aditya',
        auth_id: '789',
        auth_code: '456bc',
        mobile_no: '5678901234',
        email: 'aditya@gmail.com',


    }
]
console.log(data, 'data')

export class login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userCount: 0
        }
    }

    componentDidMount() {
        console.log(this.context, 'login context')

    }

    login = () => {

        let valuesCount = window.localStorage.getItem("userCount");
        console.log("valuesCount", valuesCount);
        if (valuesCount) {
            this.context.setUser(data[valuesCount]);
            window.localStorage.setItem("authenticated", true)
            // window.localStorage.setItem("data", data[valuesCount])




        } else {
            this.context.setUser(data[0]);
            window.localStorage.setItem("userCount", 0);
            window.localStorage.setItem("authenticated", true)
            // window.localStorage.setItem("data", data[0]);


        }

        Router.replace('/')
    }

    render() {


        return (

            <div>
                <a onClick={() => this.login()}>
                    <span>Login</span>
                </a>
                <style jsx>{`
                div{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    font-size: 40px;
                    font-weight: 600;
                }
                a{
                    cursor: pointer;

                }
                 span{
                    background-color: #03a9f4;
                    color: #fff;
                    padding: 20px 58px;
                    border-radius: 20px;
                
                 }
                
                `}</style>
            </div>


        )
    }
}
login.contextType = AuthContext;
export default login