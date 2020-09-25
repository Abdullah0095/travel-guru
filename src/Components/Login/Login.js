import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';




const Login = () => {
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
         name: '',
        email: '',
        password: ''
    })

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then(res => {
        const {displayName, photoURL, email} = res.user;
        const loggedInUser = {displayName, email}
        setLoggedInUser(loggedInUser);
        history.replace(from);
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
                name: '',
                email: '',
                error: '',
                success: false
            }
            setUser(signedOutUser)
          }).catch(error => {
            
          });
    }
    const handleBlur = (e) => {
        let isFieldValid;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
           isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if(isFieldValid){
           const newUserInfo = {...user};
           newUserInfo[e.target.name] = e.target.value;
           setUser(newUserInfo);
        }
    }
    const handleSubmit = (e)=> {
           if(newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                updateUserName(user.name);
                
        setLoggedInUser(loggedInUser);
        history.replace(from);
            })
            .catch(error => {
                // Handle Errors here.
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
              });
           }
           if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setLoggedInUser(loggedInUser);
                history.replace(from);
                setUser(newUserInfo);
                console.log('sign in user info', res.user);
            })
            .catch(function(error) {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
              });
           }

           e.preventDefault();
    }

    const updateUserName = name => {
        const  user = firebase.auth().currentUser;

        user.updateProfile({
          displayName: name
          
        }).then(function() {
          // Update successful.
        }).catch(function(error) {
          // An error happened.
        });
    }

    return (
        <div style={{textAlign: 'center'}}>
                {/* email login */}
                <div className="registration">
                    <h4>Create an account</h4>
                    <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
                    <label htmlFor="newUser">New User Registration </label>
                    <form onSubmit={handleSubmit}>
                            {newUser && <input  name="name" type="text" onBlur={handleBlur} size="40" placeholder="First name"/>}
                            <br/>
                            {newUser && <input  name="name" type="text" onBlur={handleBlur} size="40" placeholder="last name"/>}
                            <br/>
                            <input  type="text" onBlur={handleBlur} name="email" size="40" placeholder="your email address" required/>
                            <br/>
                            <input  type="password" onBlur={handleBlur} name="password" size="40" placeholder="your password"required/>
                            <br/>
                            <input type="submit" value={newUser ? 'Register' : 'Log in'}/>
                    </form>
                    {user.error && <p style={{color: 'red'}}>Email address is already used</p>}
                    {user.success && <p style={{color: 'green'}}>user {newUser ? 'created' : 'logged in'} successfully</p>}
                </div>

                <div style={{marginTop: "40px", textAlign:"center", marginLeft: '20px'}}>
                
                {   user.isSignedIn ? <button onClick={handleGoogleSignOut}>Sign out</button> :
                    <button onClick={handleGoogleSignIn}><img src="https://i.ibb.co/Rj74nSj/google.png" alt="" width="18px"/>continue with google</button>
                    
                }
                {
                    user.isSignedIn && <p>WelCome, {user.name}</p>
                }
                </div>
            
        </div>
    );
};

export default Login;