import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBOtSqgnefh34xHeMeuwhWkNbyx8dvzwgw",
  authDomain: "testing-bff3e.firebaseapp.com",
  databaseURL: "https://testing-bff3e-default-rtdb.firebaseio.com",
  projectId: "testing-bff3e",
  storageBucket: "testing-bff3e.appspot.com",
  messagingSenderId: "147058413683",
  appId: "1:147058413683:web:076d7012239666fd49da06",
  measurementId: "G-NKK88P3QEV"
};


const app = initializeApp(firebaseConfig);

export default  app
