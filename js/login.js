const formOpenBtn = document.getElementById("form-open");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");

// Lắng nghe sự kiện click vào nút đăng nhập để mở form
formOpenBtn.addEventListener("click", () => {
  formContainer.classList.add("show");  // Thêm class "show" để hiển thị form
});

// Lắng nghe sự kiện click vào nút đóng form để ẩn form
formCloseBtn.addEventListener("click", () => {
  formContainer.classList.remove("show");  // Xóa class "show" để ẩn form
});

// Đóng form khi người dùng nhấn vào bên ngoài form
window.addEventListener("click", (event) => {
  if (event.target === formContainer) {
    formContainer.classList.remove("show");
  }
});



