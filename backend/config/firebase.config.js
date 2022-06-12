const admin = require("firebase-admin");

const serviceAccount = {
  project_id: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  private_key_id: process.env.REACT_APP_FIREBASE_KEY_ID,
  private_key:
    process.env.REACT_APP_FIREBASE_PRIVATE_KEY && process.env.REACT_APP_FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  client_email: process.env.REACT_APP_FIREBASE_CLIENT_EMAIL,
  client_id: process.env.REACT_APP_FIREBASE_CLIENT_ID,
  auth_uri: process.env.REACT_APP_FIREBASE_AUTH_URI,
  token_uri: process.env.REACT_APP_FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.REACT_APP_FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.REACT_APP_FIREBASE_CLIENT_X509_CERT_URL,
};

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = { auth: firebase.auth() };
