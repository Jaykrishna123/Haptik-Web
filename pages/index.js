import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AuthContext from '../config/authcontext'
import { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import Router from 'next/router'
var authenticated;
var maindata;
function Home() {

  const context = useContext(AuthContext);
  const [userdata, setUserData] = useState([]);

  useEffect(() => {

    authenticated = window.localStorage.getItem('authenticated')
    console.log(authenticated, 'authicated');
    setUserData(JSON.parse(window.localStorage.getItem("data")))


    if (authenticated) {
      Router.replace("/")
    }
    else {
      Router.replace("/login")
    }

  }, [])

  console.log(context, 'context')
  return (
    <>
      <div>
        <div className='container'>
          <Head>

            {authenticated && <style> {`
               .haptik-xdk-container .xdk-iframe {display: block !important; }
          `}
            </style>}
          </Head>
          <h1>Welcome to Home Page</h1>
          <div className='content'>
            <span>Name: {userdata.username}</span>
            <span>Authid: {userdata.auth_id}</span>
            <span>Authcode: {userdata.auth_code}</span>
            <span>Email: {userdata.email}</span>
            <span>Mobile: {userdata.mobile_no}</span>
          </div>



        </div>
        <AuthContext.Consumer>
          {({ logOut }) => (
            <a onClick={() => logOut()}>
              <span>Logout</span>
            </a>
          )

          }
        </AuthContext.Consumer>


        <style jsx>{`
      .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    
      }
      .content{
        display: flex;
        flex-direction: column;
        font-size: 30px;
    
      }
      a{
        font-size: 32px;
        position: absolute;
        bottom: 31px;
        left: 25px;
        background-color: #03a9f4;
        color: #fff;
        padding: 20px 58px;
        border-radius: 20px;
        cursor: pointer
      }

       
      `}</style>
      </div>

    </>
  )
}
Home.contextType = AuthContext
export default Home
