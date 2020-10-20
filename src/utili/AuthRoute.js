import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
function AuthRoute({ component: Component, redirect, currentUser,...rest }) {
    if(currentUser.loading){
        return <h1>Loading</h1>
    }
    return (
        <Route
            {...rest}
            render={(props) => !currentUser.isLogged ?
                (
                    <Component
                        {...props}
                      
                    />
                )
                :
                (
                    <Redirect
                        to={{
                            pathname: redirect,
                        }}
                    />
                )}
        />
    )
}

function mapStateToProps(state){
    return{
        currentUser: state.UserReducer
    }
}
export default connect(mapStateToProps)(AuthRoute)