<%@ page import="com.example.webbongden.dao.model.SubCategory" %>
<%@ page import="java.util.List" %><%--
  Created by IntelliJ IDEA.
  User: Admin
  Date: 12/19/2024
  Time: 8:25 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" href="./img/logo-fold.png" sizes="180x180" />
  <title>Admin</title>
  <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
  />
  <link
          rel="stylesheet"
          href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css"
  />
  <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/reset.css">
  <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/admin.css">
</head>
<body>
<div class="wrapper">
  <%@ include file="header.jsp" %>

  <div class="main">
    <%@ include file="sidebar.jsp" %>

    <div class="main-content">
      <div class="tab-content" id="account-content">
        <div class="account-management">
          <!-- Form thêm tài khoản mới -->
          <div class="account-form">
            <h3>THÊM TÀI KHOẢN MỚI</h3>
            <form id="add-account-form" action="add-account" method="post">
              <div class="form-group">
                <label for="cus_name">Tên khách hàng:</label>
                <input type="text" id="cus_name" name="cusName" placeholder="Nhập tên khách hàng" required />
              </div>
              <!-- Tên đăng nhập -->
              <div class="form-group">
                <label for="username">Tên đăng nhập:</label>
                <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Nhập tên đăng nhập"
                        required
                />
              </div>

              <!-- Email -->
              <div class="form-group">
                <label for="email">Email:</label>
                <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Nhập email"
                        required
                />
              </div>

              <!-- Mật khẩu -->
              <div class="form-group">
                <label for="password">Mật khẩu:</label>
                <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Nhập mật khẩu"
                        required
                />
              </div>


              <!-- Vai trò -->
              <div class="form-group">
                <label for="role">Phân quyền:</label>
                <select id="role" name="role" required>
                  <option value="" disabled selected>Chọn vai trò</option>
                  <option value="admin">Quản trị viên</option>
                  <option value="editor">Người chỉnh sửa</option>
                  <option value="customer">Khách hàng</option>
                </select>
              </div>

              <!-- Nút thêm tài khoản -->
              <button
                      type="submit"
                      id="add-account-btn"
                      class="primary-button"
              >
                Thêm tài khoản
              </button>
            </form>
          </div>
        </div>

        <div class="header-tab">
          <div class="search-container">
            <input
                    type="text"
                    id="account-search"
                    placeholder="Tìm kiếm tài khoản..."
            />
            <button id="search-btn-account">Tìm kiếm</button>
          </div>
        </div>

        <!-- Danh sách tài khoản -->
        <div id="account-list">
          <h3>DANH SÁCH TÀI KHOẢN</h3>
          <table id="account-table">
            <thead>
            <tr>
              <th>ID</th>
              <th>Tên đăng nhập</th>
              <th>Email</th>
              <th>Phân quyền</th>
              <th>Hành động</th>
            </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<%--<script>--%>
<%--  document.addEventListener("DOMContentLoaded", function () {--%>
<%--    $(document).ready(function () {--%>
<%--      const table = $("#account-table").DataTable({--%>
<%--        ajax: {--%>
<%--          url: "/WebBongDen_war/list-account", // URL Servlet trả về JSON--%>
<%--          type: "GET", // Phương thức HTTP--%>
<%--          dataSrc: "", // DataTables sẽ lấy dữ liệu từ gốc JSON--%>
<%--          data: function (d) {--%>
<%--            d.searchValue = $("#account-search").val(); // Truyền giá trị tìm kiếm--%>
<%--          },--%>
<%--        },--%>
<%--        error: function (xhr, error, thrown) {--%>
<%--          console.log("Error:", error);--%>
<%--          console.log("Response Text:", xhr.responseText);--%>
<%--        },--%>
<%--        destroy: true, // Đảm bảo bảng được làm mới khi reload--%>
<%--        autoWidth: false,--%>
<%--        paging: true,--%>
<%--        pageLength: 10,--%>
<%--        columns: [--%>
<%--          { data: "id" }, // ID tài khoản--%>
<%--          { data: "username" }, // Tên người dùng--%>
<%--          { data: "email" }, // Email--%>
<%--          { data: "role" }, // Vai trò--%>
<%--          {--%>
<%--            data: null, // Hành động: Nút xem chi tiết--%>
<%--            render: function (data, type, row) {--%>
<%--              return `<button class="view-details" data-index="${row.customerId}">Xem chi tiết</button>`;--%>
<%--            },--%>
<%--          },--%>
<%--        ],--%>
<%--        lengthChange: false,--%>
<%--        searching: false,--%>
<%--        ordering: true,--%>
<%--        info: true,--%>
<%--        language: {--%>
<%--          paginate: {--%>
<%--            previous: "Trước",--%>
<%--            next: "Tiếp",--%>
<%--          },--%>
<%--          info: "Hiển thị _START_ đến _END_ của _TOTAL_ sản phẩm",--%>
<%--        },--%>
<%--      });--%>
<%--      $("#search-btn-account").on("click", function () {--%>
<%--        table.ajax.reload(); // Reload lại bảng với dữ liệu lọc mới--%>
<%--      });--%>
<%--    })--%>
<%--    document.querySelector("#account-table").addEventListener("click", function (event) {--%>
<%--      // Kiểm tra xem phần tử được click có chứa class "delete-account" không--%>
<%--      if (event.target.classList.contains("delete-account")) {--%>
<%--        // Lấy ID tài khoản từ thuộc tính data-id--%>
<%--        const accountId = event.target.dataset.id;--%>

<%--        if (accountId) {--%>
<%--          console.log("Account ID:", accountId); // Log ID để kiểm tra--%>

<%--          // Xác nhận xóa tài khoản--%>
<%--          if (confirm("Bạn có chắc chắn muốn xóa tài khoản này không?")) {--%>
<%--            // Gửi yêu cầu xóa qua AJAX--%>
<%--            fetch("deleteAccount", {--%>
<%--              method: "POST",--%>
<%--              headers: {--%>
<%--                "Content-Type": "application/x-www-form-urlencoded"--%>
<%--              },--%>
<%--              body: new URLSearchParams({--%>
<%--                action: "delete-account",--%>
<%--                id: accountId--%>
<%--              })--%>
<%--            })--%>
<%--                    .then(response => {--%>
<%--                      // Kiểm tra phản hồi từ server--%>
<%--                      if (!response.ok) {--%>
<%--                        throw new Error("Có lỗi xảy ra trong quá trình xóa!");--%>
<%--                      }--%>
<%--                      return response.json();--%>
<%--                    })--%>
<%--                    .then(data => {--%>
<%--                      // Kiểm tra trạng thái phản hồi--%>
<%--                      if (data.status === "success") {--%>
<%--                        alert(data.message); // Hiển thị thông báo thành công--%>

<%--                        // Tìm dòng chứa nút xóa và xóa khỏi DataTables--%>
<%--                        const row = event.target.closest("tr");--%>
<%--                        if (row) {--%>
<%--                          const table = $('#account-table').DataTable();--%>
<%--                          table.row(row).remove().draw(false); // Xóa dòng và cập nhật lại bảng--%>
<%--                        }--%>
<%--                      } else {--%>
<%--                        alert(data.message); // Hiển thị thông báo lỗi từ server--%>
<%--                      }--%>
<%--                    })--%>
<%--                    .catch(error => {--%>
<%--                      // Xử lý lỗi--%>
<%--                      console.error("Error:", error);--%>
<%--                      alert("Có lỗi xảy ra khi xóa tài khoản!");--%>
<%--                    });--%>
<%--          }--%>
<%--        } else {--%>
<%--          console.error("Không tìm thấy accountId!"); // Log lỗi nếu không có ID--%>
<%--        }--%>
<%--      } else {--%>
<%--        console.log("Không phải nút xóa tài khoản."); // Log nếu click không phải vào nút xóa--%>
<%--      }--%>
<%--    });--%>


<%--    // document.querySelector("#account-table").addEventListener("click", function (event) {--%>
<%--    //   if (event.target.classList.contains("delete-account")) {--%>
<%--    //     const accountId = event.target.dataset.id; // Lấy ID sản phẩm từ data-id--%>
<%--    //--%>
<%--    //     // Hiển thị SweetAlert2 để xác nhận--%>
<%--    //     Swal.fire({--%>
<%--    //       title: "Bạn có chắc chắn muốn xóa tài khoản này không?",--%>
<%--    //       text: "Hành động này không thể hoàn tác!",--%>
<%--    //       icon: "warning",--%>
<%--    //       showCancelButton: true,--%>
<%--    //       confirmButtonColor: "#3085d6",--%>
<%--    //       cancelButtonColor: "#d33",--%>
<%--    //       confirmButtonText: "Xóa",--%>
<%--    //       cancelButtonText: "Hủy",--%>
<%--    //     }).then((result) => {--%>
<%--    //       if (result.isConfirmed) {--%>
<%--    //         // Gửi yêu cầu xóa qua AJAX--%>
<%--    //         fetch("deleteAccount", {--%>
<%--    //           method: "POST",--%>
<%--    //           body: new URLSearchParams({--%>
<%--    //             action: "delete-account",--%>
<%--    //             id: accountId,--%>
<%--    //           }),--%>
<%--    //         })--%>
<%--    //                 .then((response) => {--%>
<%--    //                   if (!response.ok) {--%>
<%--    //                     throw new Error("Có lỗi xảy ra trong quá trình xóa!");--%>
<%--    //                   }--%>
<%--    //                   return response.json();--%>
<%--    //                 })--%>
<%--    //                 .then((data) => {--%>
<%--    //                   if (data.status === "success") {--%>
<%--    //                     Swal.fire(--%>
<%--    //                             "Đã xóa!",--%>
<%--    //                             data.message,--%>
<%--    //                             "success"--%>
<%--    //                     );--%>
<%--    //--%>
<%--    //                     // Xóa dòng trong bảng--%>
<%--    //                     const row = event.target.closest("tr");--%>
<%--    //                     if (row) {--%>
<%--    //                       const table = $("#account-table").DataTable();--%>
<%--    //                       table.row(row).remove().draw(false);--%>
<%--    //                     }--%>
<%--    //                   } else {--%>
<%--    //                     Swal.fire("Lỗi!", data.message, "error");--%>
<%--    //                   }--%>
<%--    //                 })--%>
<%--    //                 .catch((error) => {--%>
<%--    //                   console.error("Error:", error);--%>
<%--    //                   Swal.fire("Lỗi!", "Có lỗi xảy ra khi xóa sản phẩm!", "error");--%>
<%--    //                 });--%>
<%--    //       }--%>
<%--    //     });--%>
<%--    //   }--%>
<%--    // });--%>

<%--    document.getElementById("add-account-form").addEventListener("submit", async (event) => {--%>
<%--      event.preventDefault(); // Ngăn hành động submit mặc định--%>

<%--      try {--%>
<%--        const formData = new FormData(event.target);--%>

<%--        // Gửi yêu cầu POST đến server và nhận JSON response--%>
<%--        const response = await fetch("add-account", {--%>
<%--          method: "POST",--%>
<%--          body: formData,--%>
<%--        });--%>

<%--        if (!response.ok) throw new Error("Có lỗi xảy ra trong quá trình gửi yêu cầu!");--%>

<%--        const data = await response.json();--%>

<%--        // Hiển thị thông báo SweetAlert--%>
<%--        Swal.fire({--%>
<%--          icon: data.success ? "success" : "error",--%>
<%--          title: data.success ? "Thành công" : "Lỗi",--%>
<%--          text: data.message,--%>
<%--        });--%>

<%--        // Reset form nếu thành công--%>
<%--        if (data.success) event.target.reset();--%>
<%--      } catch (error) {--%>
<%--        console.error("Error:", error);--%>
<%--        Swal.fire({--%>
<%--          icon: "error",--%>
<%--          title: "Lỗi",--%>
<%--          text: "Không thể thêm tài khoản. Vui lòng thử lại!",--%>
<%--        });--%>
<%--      }--%>
<%--    });--%>
<%--  })--%>
<%--</script>--%>

<script type="module" src="${pageContext.request.contextPath}/admin/admin_js/accountAdmin.js" defer></script>
</body>
</html>
