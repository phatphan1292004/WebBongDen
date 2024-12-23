package com.example.webbongden.controller.UserController;

import com.example.webbongden.dao.model.*;
import com.example.webbongden.services.OrderSevices;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@WebServlet(name = "PayCartController", value = "/PayCartController")
public class PayCartController extends HttpServlet {
    private static final OrderSevices orderServices;

    static {
        orderServices = new OrderSevices();
    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();

        // Lấy thông tin từ session
        Cart cart = (Cart) session.getAttribute("cart");
        Customer customerInfo = (Customer) session.getAttribute("customerInfo");
        Account account = (Account) session.getAttribute("account");

        if (cart == null || customerInfo == null || account == null) {
            // Nếu thiếu thông tin cần thiết, quay lại trang giỏ hàng và báo lỗi
            request.setAttribute("errorMessage", "Thanh toán thất bại. Vui lòng kiểm tra lại thông tin giỏ hàng và khách hàng.");
            System.out.println("Thanh toán thất bại");
            request.getRequestDispatcher("/user/cart.jsp").forward(request, response);
        }
        try {
            // Tạo hóa đơn
            Invoices invoice = new Invoices();
            invoice.setPromotionId(1);
            invoice.setAccountId(account.getId());
            invoice.setCreatedAt(new Date());
            invoice.setTotalPrice(cart.getTotalPriceNumber());
            invoice.setPaymentStatus("Pending");

            // Chuyển đổi giỏ hàng thành danh sách chi tiết đơn hàng
            List<OrderDetail> orderDetails = new ArrayList<>();
            cart.getItems().forEach(item -> {
                OrderDetail detail = new OrderDetail();
                detail.setProductId(item.getProductId());
                detail.setQuantity(item.getQuantity());
                detail.setUnitPrice(item.getPrice());
                detail.setItemDiscount(0); // Giả sử không áp dụng chiết khấu
                detail.setAmount(item.getPrice() * item.getQuantity());
                orderDetails.add(detail);
            });

            orderServices.createOrderAndInvoice(invoice, orderDetails, customerInfo);
            session.removeAttribute("cart");
            response.sendRedirect("/WebBongDen_war/cart#finish");
        } catch (Exception e) {
            e.printStackTrace();
            // Xử lý lỗi và quay lại trang giỏ hàng
            request.setAttribute("errorMessage", "Thanh toán thất bại. Đã xảy ra lỗi trong quá trình xử lý.");
            request.getRequestDispatcher("user/cart.jsp").forward(request, response);
        }
    }
}
