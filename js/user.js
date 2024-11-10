  // Show the modal
  function showLogoutModal() {
    document.getElementById("logout").style.display = "flex";
}

// Cancel logout and close the modal
function cancelLogout() {
    document.getElementById("logout").style.display = "none";
}

// Confirm logout and redirect to the login page
function confirmLogout() {
    window.location.href = "login.html"; // Replace 'login.html' with the actual login page URL
}