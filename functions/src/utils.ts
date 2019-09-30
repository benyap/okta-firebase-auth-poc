import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

const firebase = admin.initializeApp();

export default firebase;

export const store = firebase.firestore();
export const auth = firebase.auth();
export const config = functions.config;
