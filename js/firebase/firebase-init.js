import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
/* firebase초기화 */
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
/* 사용자정보를 가져오는 정보 */
/* 노드를 설치 안하고 진행하기 위해 cdn방식? */

//본인거로해야함(firebase 프로젝트 > 프로젝트설정)
const firebaseConfig = {
    apiKey: "AIzaSyBJZkaOuzuqrmiRxLJItHvmHimNIua3ocQ",
    authDomain: "auth-demo-c5f70.firebaseapp.com",
    projectId: "auth-demo-c5f70",
    storageBucket: "auth-demo-c5f70.firebasestorage.app",
    messagingSenderId: "537191312626",
    appId: "1:537191312626:web:faff967e52d67690ce346b",
    measurementId: "G-H1GESCGKVQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

  export {app, auth}
