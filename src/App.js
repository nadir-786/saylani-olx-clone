import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import UserAction from './store/actions/UserActions';
import DefaultRoute from './utili/DefaultRoute';
import firebase from './firebase';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'
import Header from './components/Header/Header';
import './App.css'
// import Test from './components/TEST/Test';
class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref('/users').once('value').then((snapshot) => {
          let userData = snapshot.val()
          this.props.setUser(userData)
        })
      } else {
        this.props.unsetUser()
      }
    })
  }
  render() {
    
    return (
      <>
        <Router>
          {/* <Header /> */}
          <Switch>
            {/* <PrivateRoute redirect="/login" exact path="/" component={Home} /> */}
            {/* <DefaultRoute path="/" component={Home} /> */}
            <Route path="/" exact component={Home} />
            {/* <Route path="/test" component={Test} /> */}
            <Route path="/item/:productId" component={Home} />
          </Switch>
        </Router>
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentUser: state.UserReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: (data) => dispatch(UserAction.setUser(data)),
    unsetUser: (data) => dispatch(UserAction.unsetUser(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)