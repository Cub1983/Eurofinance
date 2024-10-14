function checkLoginState() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userEmail = localStorage.getItem("userEmail");
  const loginLink = document.querySelector('a[href="login.html"]');

  console.log("Checking login state:", { isLoggedIn, userEmail });

  if (isLoggedIn === "true" && userEmail) {
    console.log("User is logged in");
    if (loginLink) {
      console.log("Updating login link to Dashboard");
      loginLink.textContent = "Dashboard";
      loginLink.href = "account-dashboard.html";
    }
  } else {
    console.log("User is not logged in");
    if (window.location.pathname.endsWith("account-dashboard.html")) {
      console.log("Redirecting to login page");
      window.location.href = "login.html";
    }
  }
}

window.addEventListener("load", checkLoginState);
console.log("Script loaded and event listener added");
