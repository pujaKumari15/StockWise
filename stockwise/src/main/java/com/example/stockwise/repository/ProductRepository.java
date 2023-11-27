package com.example.stockwise.repository;

import com.example.stockwise.dto.ProductDTO;
import com.example.stockwise.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@EnableJpaRepositories
public interface ProductRepository extends JpaRepository<Product,String> {

    @Query("SELECT p FROM Product p WHERE p.storeId = ?1")
    List<Product> findByStoreId(String storeId);

    @Query("SELECT p FROM Product p WHERE p.productId = ?1")
    Product findByProductId(String productId);
}
