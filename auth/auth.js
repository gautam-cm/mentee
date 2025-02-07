import { auth, db } from "./firebaseConfig.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Handle User Signup
async function handleSignUp(event) {
  event.preventDefault();

  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("signup-password").value;
  const role = document.getElementById("role-signup").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store user details in Firestore
    await setDoc(doc(db, "users", user.uid), {
      username: username,
      email: email,
      role: role
    });

    alert("Signup successful! Redirecting to login.");
    window.location.href = "auth.html"; // Redirect to login page
  } catch (error) {
    document.getElementById("signup-error").innerText = error.message;
  }
}

// Handle User Login
async function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Get user role from Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      const role = userDoc.data().role;

      if (role === "admin") {
        window.location.href = "D:/mentor-mentee-app/admin/admin.html";
      } else if (role === "mentor") {
        window.location.href = "D:/mentor-mentee-app/faculty/faculty.html";
      } else {
        window.location.href = "D:/mentor-mentee-app/student/student_dashboard.html";
      }
    }
  } catch (error) {
    document.getElementById("login-error").innerText = error.message;
  }
}

// Logout Function
function handleLogout() {
  signOut(auth).then(() => {
    window.location.href = "auth.html";
  });
}

// Export functions for use in HTML
export { handleSignUp, handleLogin, handleLogout };
