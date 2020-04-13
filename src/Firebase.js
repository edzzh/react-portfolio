import * as firebase from 'firebase/app';
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyC1ZwGya5hHBbagTKKMBmTnQ4XVMAgAXjM",
  authDomain: "reactbakalaurs.firebaseapp.com",
  databaseURL: "https://reactbakalaurs.firebaseio.com",
  projectId: "reactbakalaurs",
  storageBucket: "reactbakalaurs.appspot.com",
  messagingSenderId: "470544479732",
  appId: "1:470544479732:web:f394470bbfcb72ca7575a1",
  measurementId: "G-SXDSSJHKFH"
};

firebase.initializeApp(config);

export default firebase;
