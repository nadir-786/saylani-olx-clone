import React, { Component } from 'react'
import {connect} from 'react-redux'
import Header from '../components/Header/Header'
import firebase from '../firebase'
class Home extends Component {
    signInUser(){
        firebase.auth().signInWithEmailAndPassword("nadir@gmail.com","123456").then(()=>{
            console.log("User has just signed in ")
        }).catch((err)=>{
            console.log("User has just signed out ",err)
        })
    }
    render() {
        return (
            <div className="home-page">
                
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        currentUser: state.UserReducer
    }
}
export default connect(mapStateToProps)(Home)
