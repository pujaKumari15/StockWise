package com.example.stockwise.entity;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @Column(name="product_id")
    private String productId;

    @Column(name="product_name")
    private String productName;

    @Column(name="brand")
    private String brand;

    @Column(name="quantity")
    private int quantity;

    @Enumerated
    @Column(name="category")
    private Product_Categories categories;

    @Column(name="store_id")
    private String storeId;

    @Column(name="expiry_date")
    private Date expiry_date;

    public Product() {
    }

    public Product(String productId, String productName, String brand, int quantity, Product_Categories categories, String storeId, Date expiry_date) {
        this.productId = productId;
        this.productName = productName;
        this.brand = brand;
        this.quantity = quantity;
        this.categories = categories;
        this.storeId = storeId;
        this.expiry_date = expiry_date;
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

    public Product_Categories getCategories() {
        return categories;
    }

    public void setCategories(Product_Categories categories) {
        this.categories = categories;
    }

    public String getStoreId() {
        return storeId;
    }

    public void setStoreId(String storeId) {
        this.storeId = storeId;
    }

    public Date getExpiry_date() {
        return expiry_date;
    }

    public void setExpiry_date(Date expiry_date) {
        this.expiry_date = expiry_date;
    }
}
