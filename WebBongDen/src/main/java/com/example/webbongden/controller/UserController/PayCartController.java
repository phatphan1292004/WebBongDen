package com.example.webbongden.controller.UserController;

import com.example.webbongden.dao.model.*;
import com.example.webbongden.services.OrderSevices;
import com.example.webbongden.services.PromotionService;
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
    private static final PromotionService promotionService;
    static {
        orderServices = new OrderSevices();
        promotionService = new PromotionService();
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
            request.getRequestDispatcher("/user/cart.jsp").forward(request, response);
            return;
        }

        try {
            // Tạo hóa đơn
            Invoices invoice = new Invoices();
            invoice.setAccountId(account.getId());
            invoice.setCreatedAt(new Date());
            invoice.setTotalPrice(cart.getTotalPriceNumber());
            invoice.setPaymentStatus("Pending");

            Integer promotionId = null; // Để lưu promotionId (nếu có)
            List<OrderDetail> orderDetails = new ArrayList<>();

            for (CartItem item : cart.getItems()) {
                OrderDetail detail = new OrderDetail();
                detail.setProductId(item.getProductId());
                detail.setQuantity(item.getQuantity());
                detail.setUnitPrice(item.getPrice());
                detail.setItemDiscount(0);
                detail.setAmount(item.getPrice() * item.getQuantity());

                // Kiểm tra khuyến mãi
                Promotion gift = promotionService.getPromotionById(item.getProductId());
                if (gift != null) {
                    if (promotionId == null) {
                        promotionId = gift.getId(); // Lưu promotionId đầu tiên tìm được
                    }
                }

                orderDetails.add(detail);
            }

            // Gắn promotionId cho hóa đơn (nếu có)
            invoice.setPromotionId(promotionId);

            // Lưu hóa đơn và chi tiết đơn hàng
            orderServices.createOrderAndInvoice(invoice, orderDetails, customerInfo);

            // Xóa giỏ hàng khỏi session sau khi thanh toán
            session.removeAttribute("cart");

            // Điều hướng tới trang hoàn tất
            response.sendRedirect("/WebBongDen_war/cart#finish");
        } catch (Exception e) {
            e.printStackTrace();
            // Xử lý lỗi và quay lại trang giỏ hàng
            request.setAttribute("errorMessage", "Thanh toán thất bại. Đã xảy ra lỗi trong quá trình xử lý.");
            request.getRequestDispatcher("/user/cart.jsp").forward(request, response);
        }
    }
}
