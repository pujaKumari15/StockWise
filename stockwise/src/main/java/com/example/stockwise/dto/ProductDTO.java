package com.example.stockwise.dto;

import com.example.stockwise.entity.Product_Categories;

import java.sql.Date;


public class ProductDTO {

    private String id;
    private String name;
    private String brand;

    private Product_Categories category;

    private int quantity;

    private Date expiryDate;

    public ProductDTO() {
    }

    public ProductDTO(String id, String name, String brand, Product_Categories category, int quantity, Date expiryDate) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.category = category;
        this.quantity = quantity;
        this.expiryDate = expiryDate;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Product_Categories getCategory() {
        return category;
    }

    public void setCategory(Product_Categories category) {
        this.category = category;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }
}
