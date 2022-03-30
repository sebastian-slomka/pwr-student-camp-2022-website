import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyA9kldK7s9Q0DNh0M6p4Bmh9HQOJstHyFk',
    authDomain: 'camp-auth-2022-test.firebaseapp.com',
    projectId: 'camp-auth-2022-test',
    storageBucket: 'camp-auth-2022-test.appspot.com',
    messagingSenderId: '61576236684',
    appId: '1:61576236684:web:c5e001e9a3863d5ae475a9'
  };

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth()
export const db = firebase.firestore()

export default app