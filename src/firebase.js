import firebase from 'firebase'

 const config = {
    apiKey: "AIzaSyBqnf7RE-9V9ln3jjioe0RNvZUjVCuRj5A",
    authDomain: "entrecor-3259d.firebaseapp.com",
    databaseURL: "https://entrecor-3259d.firebaseio.com",
    projectId: "entrecor-3259d",
    storageBucket: "entrecor-3259d.appspot.com",
    messagingSenderId: "244861581662"
  };
  firebase.initializeApp(config);

  export default new firebase;