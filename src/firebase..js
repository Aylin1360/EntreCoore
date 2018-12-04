import firebase from 'firebase'

 const config = {
    apiKey: "AIzaSyCaa2Giws-CcFDGushuApB0cc-vxscXZVI",
    authDomain: "deneme-pl.firebaseapp.com",
    databaseURL: "https://deneme-pl.firebaseio.com",
    projectId: "deneme-pl",
    storageBucket: "deneme-pl.appspot.com",
    messagingSenderId: "407354484165"
  };
  firebase.initializeApp(config);

  export default new firebase;