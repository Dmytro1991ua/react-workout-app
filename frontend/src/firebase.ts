import 'firebase/compat/auth';

import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { getStorage } from 'firebase/storage';

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_MESSAGING_APP_ID,
});

export const auth = getAuth(app);
export const storage = getStorage(app, process.env.REACT_APP_STORAGE_BUCKET);

export default app;
