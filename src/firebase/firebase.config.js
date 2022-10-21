// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDqPxx5XIBbJUfHcEiSBkjcNOyr4nBdsn8',
  authDomain: 'news-portal-reactjs.firebaseapp.com',
  projectId: 'news-portal-reactjs',
  storageBucket: 'news-portal-reactjs.appspot.com',
  messagingSenderId: '48059998166',
  appId: '1:48059998166:web:fa3c45dbc2805558bd0e77',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
