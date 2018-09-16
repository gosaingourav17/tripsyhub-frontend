
import React, { Component } from 'react';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";
import axios from 'axios';
import "./App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"




class logins extends Component {

    state = { isSignedIn: false, theUser: 'name' }
    uiConfig = {

        signInFlow: "redirect", signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,

        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            console.log("user", user)
        })
    }
    loadData() {


        {/* axios.post('http://localhost:5000/loginuser/', firebase.auth().currentUser)
            .then(response => {
                // console.log(response);
                console.log(response)
            });
        */}

    }

    render() {
        return (
            <div className="App">
                {this.state.isSignedIn ? (
                    <span>


                        {
                            this.loadData()

                        }
                        <img className='responsive img img-circle'
                            alt="profile picture"
                            src={firebase.auth().currentUser.photoURL}
                        />

                        <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                        {console.log(firebase.auth().currentUser)}
                        <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                    </span>
                ) : (
                        <StyledFirebaseAuth
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                    )}
            </div>
        )
    }
}







export default logins;