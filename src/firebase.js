import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDyJjaT6zILTDbrwcRBOyXi7Sf98los1o4",
    authDomain: "olx-clone-assignment.firebaseapp.com",
    databaseURL: "https://olx-clone-assignment.firebaseio.com",
    projectId: "olx-clone-assignment",
    storageBucket: "olx-clone-assignment.appspot.com",
    messagingSenderId: "155806810556",
    appId: "1:155806810556:web:ab7cde05463a571e70ebb9"
  };

  firebase.initializeApp(firebaseConfig);


  export default firebase;