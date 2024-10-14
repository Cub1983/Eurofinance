"use strict";

function checkLoginState() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userEmail = localStorage.getItem("userEmail");
  const loginLink = document.querySelector('a[href="login.html"]');

  if (isLoggedIn === "true" && userEmail) {
    // User is logged in
    if (loginLink) {
      loginLink.textContent = "Dashboard";
      loginLink.href = "account-dashboard.html";
    }
  } else {
    // User is not logged in
    if (window.location.pathname.endsWith("account-dashboard.html")) {
      // Redirect to login page if trying to access dashboard while not logged in
      window.location.href = "login.html";
    }
  }
}

// Run the check when the page loads
window.addEventListener("load", checkLoginState);
