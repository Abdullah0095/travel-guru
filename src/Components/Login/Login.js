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
    const handleBlur = (e) => {
        console.log(e.target.name, e.target.value);
        if(e.target.name === 'email'){
            const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            console.log(isEmailValid);
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            console.log(isPasswordValid && passwordHasNumber)
        }
    }
    const handleSubmit = ()=> {

    }

    return (
        <div style={{textAlign: 'center'}}>
            {/* google login */}
            <div>
                {   user.isSignedIn ? <button onClick={handleGoogleSignOut}>Sign out</button>:
                    <button onClick={handleGoogleSignIn}>Continue with google</button>
                    
                }
                {
                    user.isSignedIn && <p>WelCome, {user.name}</p>
                }

                {/* email login */}
                <div>
                    <h1>our own authentication</h1>
                    <form onSubmit={handleSubmit}>
                            <input style={{textAlign:'center'}} type="text" onBlur={handleBlur} name="email" placeholder="your email address" required/>
                            <br/>
                            <input style={{textAlign:'center'}} type="password" onBlur={handleBlur} name="password" placeholder="your password"required/>
                            <br/>
                            <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;