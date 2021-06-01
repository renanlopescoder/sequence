import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { FIREBASE_CONFIG } from "../constants";

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(FIREBASE_CONFIG)
  : firebase.app();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export async function subscribe({
  email,
  firstName,
  lastName,
  projectWebsite,
  about,
}) {
  await firestore.collection("subscriptions").doc(email).set({
    email,
    firstName,
    lastName,
    projectWebsite,
    about,
  });
}

export default firebase;
