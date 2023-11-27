package com.example.stockwise.entity;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @Column(name="id")
    private String productId;

    @Column(name="product_name")
    private String productName;

    @Column(name="brand")
    private String brand;

    @Column(name="quantity")
    private int quantity;

    @Column(name = "category_id")
    private int categoryId;

    @Column(name="store_id")
    private String storeId;

    @Column(name="date_of_expiry")
    private Date expiryDate;

    public Product() {
    }

    public Product(String productId, String productName, String brand, int quantity, int categoryId, String storeId, Date expiryDate) {
        this.productId = productId;
        this.productName = productName;
        this.brand = brand;
        this.quantity = quantity;
        this.categoryId = categoryId;
        this.storeId = storeId;
        this.expiryDate = expiryDate;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }


    public String getStoreId() {
        return storeId;
    }

    public void setStoreId(String storeId) {
        this.storeId = storeId;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }
}
