import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBnKr55oa7tZIrMEJv1CI0X4TJpDg-CB-k",
  authDomain: "todo-app-cp-2f694.firebaseapp.com",
  databaseURL: "https://todo-app-cp-2f694.firebaseio.com",
  projectId: "todo-app-cp-2f694",
  storageBucket: "todo-app-cp-2f694.appspot.com",
  messagingSenderId: "540773520315",
  appId: "1:540773520315:web:5b91c936f159624bc76a9e",
  measurementId: "G-GYRH696Y5Q",
});

const db = firebaseApp.firestore();

export { db };
