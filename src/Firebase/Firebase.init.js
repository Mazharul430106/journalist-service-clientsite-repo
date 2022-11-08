// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRfAu6VAxPC7dkRyHYxIpoMnIAkRWFPOM",
  authDomain: "journalist-service-project.firebaseapp.com",
  projectId: "journalist-service-project",
  storageBucket: "journalist-service-project.appspot.com",
  messagingSenderId: "761329431414",
  appId: "1:761329431414:web:e2786715891be052e9c057"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;