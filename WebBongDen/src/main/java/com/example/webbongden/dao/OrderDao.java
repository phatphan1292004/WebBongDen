package com.example.webbongden.dao;

import com.example.webbongden.dao.db.JDBIConnect;
import org.jdbi.v3.core.Jdbi;

public class OrderDao {
    private final Jdbi jdbi;

    public OrderDao() {
        jdbi = JDBIConnect.get();
    }

    public int totalOrderInLastedMonth() {
        String sql = "SELECT COUNT(*) " +
                "FROM orders " +
                "WHERE created_at BETWEEN " +
                "DATE_SUB(DATE_FORMAT(NOW(), '%Y-%m-01'), INTERVAL 1 MONTH) " +
                "AND LAST_DAY(DATE_SUB(NOW(), INTERVAL 1 MONTH))";

        return jdbi.withHandle(handle ->
                handle.createQuery(sql)
                        .mapTo(int.class)
                        .one()
        );
    }


}
