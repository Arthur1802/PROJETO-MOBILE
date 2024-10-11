import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyBskMB-5rdeqH9CrfiBdIN9wi9iLcPbVDw',
    authDomain: 'am2v-learn.firebaseapp.com',
    databaseURL: 'https://am2v-learn-default-rtdb.firebaseio.com',
    projectId: 'am2v-learn',
    storageBucket: 'am2v-learn.appspot.com',
    messagingSenderId: '824187941056',
    appId: '1:824187941056:web:ab510a4511e1d9f748fd25',
    measurementId: 'G-BQCQE6KZZZ'
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth }