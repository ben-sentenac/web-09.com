// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, CollectionReference, doc,getDoc, collection, setDoc, getDocs, QuerySnapshot } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAep2e0ZjgmXLwdd-I3Es03gv0eWVVwFIQ",
  authDomain: "webd-09.firebaseapp.com",
  projectId: "webd-09",
  storageBucket: "webd-09.appspot.com",
  messagingSenderId: "880750813098",
  appId: "1:880750813098:web:b1084abcecb83c93ccd5d3",
  measurementId: "G-PG0LFWV965"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore(app);


export const createProjectDocument = async (uid,data = {}) => {

    console.log(uid);

    const projectsRef = doc(db,'projects',uid);

    const projectsSnapshot = await getDoc(projectsRef);

    console.log(projectsSnapshot);

    if(!projectsSnapshot.exists()) {
        try {
            setDoc(projectsRef,data)
        } catch (error) {
            console.log('error creating database',error.message);
        }
    }

    return projectsRef;

};

export const getProjectDocument = async () => {

    const projectsSnapshot = await getDocs(collection(db,'projects'));

    return projectsSnapshot;
}



