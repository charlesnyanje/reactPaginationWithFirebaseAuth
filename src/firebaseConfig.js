import { initializeApp } from "firebase/app";


import {getAuth} from 'firebase/auth'

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDgdhAgWHWvIU7lcvOfSIe14AmN9pa3m_Y",
    authDomain: "reactvitepagination.firebaseapp.com",
    projectId: "reactvitepagination",
    storageBucket: "reactvitepagination.appspot.com",
    messagingSenderId: "826801178395",
    appId: "1:826801178395:web:db0395c5c903f42e5ef5be",
    measurementId: "G-6M4Y4QERM8"
  };


  const app = initializeApp(firebaseConfig);

  const auth=getAuth(app);

  const db = getFirestore()

  export {auth,db}