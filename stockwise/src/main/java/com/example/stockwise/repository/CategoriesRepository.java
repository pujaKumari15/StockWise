package com.example.stockwise.repository;

import com.example.stockwise.entity.Categories;
import com.example.stockwise.entity.Product;
import com.example.stockwise.entity.Product_Categories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CategoriesRepository extends JpaRepository<Categories,String> {

    @Query("SELECT c FROM Categories c WHERE c.categoryName = ?1")
    Categories findByCategoryName(String categoryName);

    @Query("SELECT c FROM Categories c WHERE c.categoryId = ?1")
    Categories findByCategoryId(int id);
}
