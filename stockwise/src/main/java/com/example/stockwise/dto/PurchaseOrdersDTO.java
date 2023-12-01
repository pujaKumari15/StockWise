package com.example.stockwise.dto;

import java.time.LocalDate;

public class PurchaseOrdersDTO {

    private int stockId;
    private String vendorName;
    private int phoneNumber;
    private LocalDate lastPurchaseDate;
    private String productName;
    private int quantity;


    public PurchaseOrdersDTO(int stockId, String vendorName, int phoneNumber, LocalDate lastPurchaseDate, String productName, int quantity) {
        this.stockId = stockId;
        this.vendorName = vendorName;
        this.phoneNumber = phoneNumber;
        this.lastPurchaseDate = lastPurchaseDate;
        this.productName = productName;
        this.quantity = quantity;
    }

    public String getVendorName() {
        return vendorName;
    }

    public void setVendorName(String vendorName) {
        this.vendorName = vendorName;
    }

    public int getStockId() {
        return stockId;
    }

    public void setStockId(int stockId) {
        this.stockId = stockId;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public LocalDate getLastPurchaseDate() {
        return lastPurchaseDate;
    }

    public void setLastPurchaseDate(LocalDate lastPurchaseDate) {
        this.lastPurchaseDate = lastPurchaseDate;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}