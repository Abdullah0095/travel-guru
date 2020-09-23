import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: ''
    })

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then(res => {
        const {displayName, photoURL, email} = res.user;
        const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email
        }
        setUser(signedInUser);
        console.log(displayName, photoURL, email);
        })
        .catch(error => {
            console.log(error)
            console.log(error.message);
        })
    }

    const handleGoogleSignOut = () => {
        firebase.auth().signOut()
        .then(res => {
            const signedOutUser = {
                isSignedIn: false,
                name: ''
            }
            setUser(signedOutUser)
          }).catch(error => {
            
          });
    }

    return (
        <div>
            {   user.isSignedIn ? <button onClick={handleGoogleSignOut}>Sign out</button>:
                <button onClick={handleGoogleSignIn}>Continue with google</button>
                
            }
            {
                user.isSignedIn && <p>WelCome, {user.name}</p>
            }
        </div>
    );
};

export default Login;