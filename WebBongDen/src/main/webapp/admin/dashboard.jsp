<%--
  Created by IntelliJ IDEA.
  User: Admin
  Date: 12/19/2024
  Time: 12:53 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
  <head>
    <title>Title</title>
  </head>
  <body>
  <div class="card-revenue">
    <div class="container-left">
      <div class="card" id="revenue-card">
        <div class="top-card">
          <div class="top-card-title">
            <p>Tổng doanh thu</p>
            <div class="percentage up">↑ 6.71%</div>
          </div>
          <div class="value">107950.00</div>
        </div>

        <div class="bottom-card">
          <div class="goal">
            <div class="goal-title">
              Monthly Goal
              <div class="goal-progress">70%</div>
            </div>
            <div class="bar blue">
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <div class="card" id="orders-card">
        <div class="top-card">
          <div class="top-card-title">
            <p>Số đơn hàng</p>
            <div class="percentage down">↓ 3.26%</div>
          </div>
          <div class="value">16</div>
        </div>

        <div class="bottom-card">
          <div class="goal">
            <div class="goal-title">
              Monthly Goal
              <div class="goal-progress">60%</div>
            </div>
            <div class="bar green">
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <div class="card" id="customers-card">
        <div class="top-card">
          <div class="top-card-title">
            <p>Số khách hàng</p>
            <div class="percentage down">↓ 2.71%</div>
          </div>
          <div class="value">5</div>
        </div>

        <div class="bottom-card">
          <div class="goal">
            <div class="goal-title">
              Monthly Goal
              <div class="goal-progress">45%</div>
            </div>
            <div class="bar yellow">
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <div class="card" id="visits-card">
        <div class="top-card">
          <div class="top-card-title">
            <p>Lượt truy cập</p>
            <div class="percentage na">↑ N/A</div>
          </div>
          <div class="value">N/A</div>
        </div>

        <div class="bottom-card">
          <div class="goal">
            <div class="goal-title">
              Monthly Goal
              <div class="goal-progress">50%</div>
            </div>
            <div class="bar purple">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="top-product">
      <div class="top-product-header">
        <p>Top 5 sản phẩm bán chạy</p>
      </div>
      <div class="top-product-list">
        <table class="top-product-table">
          <thead>
          <tr>
            <th>Tên SP</th>
            <th>Số lượng bán</th>
            <th>Tổng tiền thu được</th>
            <th>Số lượng tồn kho</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Đèn ngủ LED phong cách hiện đại DK04530</td>
            <td>150</td>
            <td>1,500,000 VND</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Đèn bàn trang trí phong cách nghệ thuật DK04529</td>
            <td>120</td>
            <td>1,200,000 VND</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Đèn LED chiếu sáng nội thất sang trọng DK04527</td>
            <td>100</td>
            <td>1,000,000 VND</td>
            <td>20</td>
          </tr>
          <tr>
            <td>
              Đèn quạt trần hiện đại cho không gian mở QV04525
            </td>
            <td>90</td>
            <td>900,000 VND</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Đèn quạt trần phòng bếp QV04523</td>
            <td>80</td>
            <td>800,000 VND</td>
            <td>5</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="card-container">
    <div class="recent-order">
      <div class="recent-order-header">
        <p>Đơn hàng gần đây</p>
      </div>
      <table class="order-table">
        <thead>
        <tr>
          <th>ID Khách Hàng</th>
          <th>Khách Hàng</th>
          <th>Ngày Đặt</th>
          <th>Trạng Thái</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>#CUST001</td>
          <td class="customer-info">
            <img
                    src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww"
                    alt="Avatar"
                    class="customer-avatar"
            />
            <span>Phạm Minh Duy</span>
          </td>
          <td>10/11/2024</td>
          <td class="status completed">
            <span>Hoàn thành</span>
          </td>
        </tr>

        <tr>
          <td>#CUST002</td>
          <td class="customer-info">
            <img
                    src="https://images.unsplash.com/photo-1623582854588-d60de57fa33f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Avatar"
                    class="customer-avatar"
            />
            <span>Nguyễn Thị Lan</span>
          </td>
          <td>09/11/2024</td>
          <td class="status pending">
            <span>Đang chờ</span>
          </td>
        </tr>

        <tr>
          <td>#CUST003</td>
          <td class="customer-info">
            <img
                    src="https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Avatar"
                    class="customer-avatar"
            />
            <span>Lê Anh Tuấn</span>
          </td>
          <td>08/11/2024</td>
          <td class="status canceled">
            <span>Đã hủy</span>
          </td>
        </tr>

        <tr>
          <td>#CUST004</td>
          <td class="customer-info">
            <img
                    src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Avatar"
                    class="customer-avatar"
            />
            <span>Trần Quốc Khang</span>
          </td>
          <td>07/11/2024</td>
          <td class="status completed">
            <span>Hoàn thành</span>
          </td>
        </tr>

        <tr>
          <td>#CUST005</td>
          <td class="customer-info">
            <img
                    src="https://media.istockphoto.com/id/1401980646/photo/3d-rendered-classic-sculpture-metaverse-avatar-with-network-of-low-poly-glowing-purple-lines.webp?a=1&b=1&s=612x612&w=0&k=20&c=ktqSUQjjCAu9keEW0BYhrnVSiOZQWqk7kv_x29NmHP0="
                    alt="Avatar"
                    class="customer-avatar"
            />
            <span>Võ Minh Tâm</span>
          </td>
          <td>06/11/2024</td>
          <td class="status pending">
            <span>Đang chờ</span>
          </td>
        </tr>

        <tr>
          <td>#CUST006</td>
          <td class="customer-info">
            <img
                    src="https://images.unsplash.com/photo-1728577740843-5f29c7586afe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Avatar"
                    class="customer-avatar"
            />
            <span>Đinh Thị Kim</span>
          </td>
          <td>05/11/2024</td>
          <td class="status canceled">
            <span>Đã hủy</span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="customer-chart">
      <div class="cus-chart-header">
        <p>Khách hàng</p>
        Đơn vị tính: %
      </div>
      <canvas id="customerPieChart"></canvas>
    </div>
  </div>

  <div class="card-container2">
    <div class="revenue-year">
      <div class="revenue-year-header">Doanh thu trong năm</div>
      <canvas id="revenueChart"></canvas>
    </div>

    <div class="review-customer">
      <div class="review-header">Đánh giá</div>
      <div class="review-content">
        <div class="review-item">
          <div class="img-user">
            <img
                    src="https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="User Image"
            />
          </div>
          <div class="user-info">
            <h4>Sarah Graves</h4>
            <p>Highly recommend</p>
          </div>
          <div class="rating">★★★★★</div>
        </div>
        <div class="review-item">
          <div class="img-user">
            <img
                    src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="User Image"
            />
          </div>
          <div class="user-info">
            <h4>Garbease sha</h4>
            <p>Awesome Pro</p>
          </div>
          <div class="rating">★★★★☆</div>
        </div>

        <div class="review-item">
          <div class="img-user">
            <img
                    src="https://images.unsplash.com/photo-1633957897986-70e83293f3ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="User Image"
            />
          </div>
          <div class="user-info">
            <h4>Sarah Graves</h4>
            <p>Highly recommend</p>
          </div>
          <div class="rating">★★★★★</div>
        </div>
        <div class="review-item">
          <div class="img-user">
            <img
                    src="https://images.unsplash.com/photo-1636041282694-aa4e52370419?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="User Image"
            />
          </div>
          <div class="user-info">
            <h4>Garbease sha</h4>
            <p>Awesome Pro</p>
          </div>
          <div class="rating">★★★★☆</div>
        </div>
      </div>
    </div>
  </div>
  </body>
</html>
