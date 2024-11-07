  
  // lấy ra element của thuộc tính
  const signInForm = document.getElementById("signInForm")
  const username = document.getElementById("cus-name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const RePassword = document.getElementById("rePassword");
  
  signInForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const agreement = document.getElementById("agreement").checked;

  if (password.value !== RePassword.value) {
      alert("Mật khẩu không khớp!");
      return;
  }
  if (!agreement) {
      alert("Bạn phải chấp nhận thỏa thuận!");
      return;
  }
  // Proceed with form submission (e.g., send data to the server)
  alert("Đăng kí thành công!");
});