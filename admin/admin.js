import { auth, db } from "./firebaseConfig.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists() && userDoc.data().role === "admin") {
      document.getElementById("adminDashboard").style.display = "block";
      document.getElementById("loadingIndicator").style.display = "none";
    } else {
      alert("Access denied!");
      window.location.href = "auth.html";
    }
  } else {
    window.location.href = "auth.html";
  }
});
