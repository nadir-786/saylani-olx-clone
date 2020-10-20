import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
function PrivateRoute({ component: Component, redirect, currentUser, ...rest }) {
    if (currentUser.loading) {
        return <div />
    }

    return (
        <Route
            {...rest}
            render={(props) => currentUser.isLogged ?
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

function mapStateToProps(state) {
    return {
        currentUser: state.UserReducer
    }
}
export default connect(mapStateToProps)(PrivateRoute)