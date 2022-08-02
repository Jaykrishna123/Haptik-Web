import Head from 'next/head'
import React from 'react'
import { render } from 'react-dom';
import '../styles/globals.css'
import Script from 'next/script'
import App from 'next/app'
import AuthContext from '../config/authcontext';
import AuthUser from '../config/authuser';




class MyApp extends App {
  componentDidMount() {

    window.haptikInitSettings = {
      "business-id": "5385",
      "client-id": "5b2daab5f76469f02ef78409d919148e92642a51",
      "base-url": "https://api.haptikapi.com/",

    };
  }
  render() {
    const { Component, pageProps } = this.props


    return (
      <React.Fragment>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <style>
            {`
             iframe{
              bottom: 40px !important;
            }
            .haptik-xdk-container .xdk-iframe { display: none !important; }
             #haptik-xdk-main-view { display:block !important; }
             .fullscreen .xdk-iframe { display: block !important; }
            
            @media screen and (min-width:600px) {
              iframe{
                bottom: 10px !important;
              }
             #haptik-xdk-main-view { bottom: 90px !important; }
            }
           

             `}
          </style>
        </Head>



        <React.Fragment>
          <AuthUser>
            <Component {...pageProps} />
          </AuthUser>
        </React.Fragment>



        <Script
          type="text/javascript"
          charset="UTF-8"
          src="https://toolassets.haptikapi.com/platform/javascript-xdk/production/loader.js"
        />
      </React.Fragment>


    )
  }

}

export default MyApp
