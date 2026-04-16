function handleLogin() {
  const pass = document.getElementById('adminPass').value;

  if (pass === "admin123") {
    loggedIn = true;
    loadPage('admin');
  } else {
    alert("Wrong password");
  }
}

window.handleLogin = handleLogin;