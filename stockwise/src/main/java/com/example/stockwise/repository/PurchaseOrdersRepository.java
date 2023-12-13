package com.example.stockwise.repository;


import com.example.stockwise.entity.PurchaseOrders;
import com.example.stockwise.entity.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@EnableJpaRepositories
public interface PurchaseOrdersRepository extends JpaRepository<Vendor, Integer> {

    @Query("SELECT po FROM PurchaseOrders po WHERE 1=1")
    List<PurchaseOrders> getAllPurchaseOrders();

}
