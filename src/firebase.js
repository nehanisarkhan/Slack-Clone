import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCCLs_LnnKbDbbam-QfGKm_AiRk-dsffdk",
  authDomain: "slack-clone-70fa1.firebaseapp.com",
  databaseURL: "https://slack-clone-70fa1.firebaseio.com",
  projectId: "slack-clone-70fa1",
  storageBucket: "slack-clone-70fa1.appspot.com",
  messagingSenderId: "81973401999",
  appId: "1:81973401999:web:ec008fdd46d59bac5493fa",
  measurementId: "G-XD1527BP17",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
