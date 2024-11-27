import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
} from "@env";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

// Inicializa o Firebase apenas uma vez
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  console.log("Firebase já inicializado.");
}

// Exporta os serviços do Firebase
export const auth = firebase.auth();
export const db = firebase.database();
export default firebase;



//----------–––––––– CÓDIGO ANTIGO ––––––––––––––––//

// import firebase from "firebase"
// import { FIREBASE_API_KEY, 
//          FIREBASE_AUTH_DOMAIN,
//          FIREBASE_DATABASE_URL,
//          FIREBASE_PROJECT_ID,
//          FIREBASE_STORAGE_BUCKET,
//          FIREBASE_MESSAGING_SENDER_ID,
//          FIREBASE_APP_ID, 
//          FIREBASE_MEASUREMENT_ID
//         } from "@env"

// const firebaseConfig = {
//     apiKey: FIREBASE_API_KEY,
//     authDomain: FIREBASE_AUTH_DOMAIN,
//     databaseURL: FIREBASE_DATABASE_URL,
//     projectId: FIREBASE_PROJECT_ID,
//     storageBucket: FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
//     appId: FIREBASE_APP_ID,
//     measurementId: FIREBASE_MEASUREMENT_ID
// }

// if (firebase.app.lenth) {
//     console.log("Firebase initializing...")
//     firebase.initializeApp(firebaseConfig)
// } else {
//     console.log("Something went wrong")
// }

// export default firebase