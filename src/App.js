import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import UserAction from './store/actions/UserActions';
import ProductActions from './store/actions/ProductActions';
import DefaultRoute from './utili/DefaultRoute';
import firebase from './firebase';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'
import Header from './components/Header/Header';
import './App.css'
import PostScreen from './pages/PostScreen/PostScreen';
import ProductScreen from './pages/ProductScreen/ProductScreen';
import PostFormScreen from './pages/PostFormScreen/PostFormScreen';
import MyAdsScreen from './pages/MyAdsScreen/MyAdsScreen';
import ChatScreen from './pages/ChatScreen/ChatScreen';
// import Test from './components/TEST/Test';
class App extends Component {
  componentDidMount() {
    this.setAllProducts(8);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref(`/users/${user.uid}`).once('value').then((snapshot) => {
          let userData = snapshot.val();
          this.props.setUser(userData)
        })
      } else {
        this.props.unsetUser()
      }
    })
  }
  setAllProducts=(limit)=> {
    let products = []
    firebase.database().ref("/products/").limitToLast(limit).once("value", (snapshot) => {
      let gotData = snapshot.val();
      for (var key in gotData) {
        products.push(gotData[key]);
      }
    }).then(() => {
      this.props.setProducts(products)
    })
  }
  render() {

    return (
      <>
        <Router>
          <Switch>
            {/* <PrivateRoute redirect="/login" exact path="/" component={Home} /> */}
            {/* <DefaultRoute path="/" component={Home} /> */}
            <Route path="/" exact render={(props) => <Home {...props} handleProducts={(e) => this.setAllProducts(e)} />} />
            <Route path="/post" exact component={PostScreen} />
            <Route path="/post/:category" exact component={PostFormScreen} />
            <Route path="/item/:productId" component={ProductScreen} />
            <Route path="/myAds" component={MyAdsScreen} />
            <Route path="/chat" component={ChatScreen} />
          </Switch>
        </Router>
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentUser: state.UserReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: (data) => dispatch(UserAction.setUser(data)),
    unsetUser: (data) => dispatch(UserAction.unsetUser(data)),
    setProducts: (data) => dispatch(ProductActions.setProducts(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)