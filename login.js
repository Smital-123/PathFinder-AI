import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// 🔥 तुझा config
const firebaseConfig = {
  apiKey: "AIzaSyDO6cEL7gSfviVkFO_Fb62Dj25kp3iUzFE",
  authDomain: "pathfinder-75cdc.firebaseapp.com",
  projectId: "pathfinder-75cdc",
  storageBucket: "pathfinder-75cdc.firebasestorage.app",
  messagingSenderId: "623565291331",
  appId: "1:623565291331:web:6b18e017a86884c573b9f6"
};

// init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 🔥 CLICK EVENT
document.getElementById("googleLoginBtn").addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    alert("Login Successful ✅");

    console.log(user);

    // redirect
    window.location.href = "dashboard.html";

  } catch (error) {
    console.error(error);
    alert(error.message);
  }
});