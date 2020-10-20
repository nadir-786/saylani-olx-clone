import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
function DefaultRoute({ component: Component, redirect, currentUser, ...rest }) {
    // if (currentUser.loading) {
    //     return <div />
    // }

    return (
        <Route
            {...rest}
            render={(props) => !currentUser.loading ?
                (
                    <Component
                        {...props}
                    />
                )
                :
                (
                   <div />
                )}
        />
    )
}

function mapStateToProps(state) {
    return {
        currentUser: state.UserReducer
    }
}
export default connect(mapStateToProps)(DefaultRoute)