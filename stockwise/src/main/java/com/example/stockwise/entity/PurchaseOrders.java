package com.example.stockwise.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name="stocks")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseOrders {
    @Id
    @Column(name = "Stock_id", nullable = false)
    private int stockId;
    @Column(name = "name")
    private String vendorName;

    @Column(name = "last_purchase_date")
    private LocalDate lastPurchaseDate;
    @Column(name = "product_name")
    private String productName;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "phone_number")
    private int phoneNumber;

    public PurchaseOrders(int stockID, String name, int phoneNumber, LocalDate lastPurchaseDate, String productName, int quantity) {
        this.stockId = stockID;
        this.vendorName = name;
        this.phoneNumber = phoneNumber;
        this.lastPurchaseDate = lastPurchaseDate;
        this.productName = productName;
        this.quantity = quantity;
    }

    public int getStockId() {
        return stockId;
    }

    public void setStockId(int stockId) {
        stockId = stockId;
    }

    public String getName() {
        return vendorName;
    }

    public void setName(String vendorName) {
        this.vendorName = vendorName;
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

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}

