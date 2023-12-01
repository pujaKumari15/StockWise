package com.example.stockwise.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.LocalDate;

@Entity
@Table(name = "vendors")
public class Vendor {
    @Id
    @Column(name = "vendorId", nullable = false)
    private int vendorId;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private int phone;

    @Column(name = "start_date")
    private LocalDate startDate;

    @Column(name = "last_purchase_date")
    private LocalDate lastPurchaseDate;

    @Column(name = "is_active")
    private boolean isActive;

    @Column(name = "category_id")
    private int categoryId;


    public Vendor() {
    }

    public Vendor(int vendorId, String name, String email, int phone, LocalDate startDate, LocalDate lastPurchaseDate, boolean isActive, int categoryId) {
        this.vendorId = vendorId;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.startDate = startDate;
        this.lastPurchaseDate = lastPurchaseDate;
        this.isActive = isActive;
        this.categoryId = categoryId;
    }

    public int getVendorId() {
        return vendorId;
    }

    public void setVendorId(int vendorId) {
        this.vendorId = vendorId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getLastPurchaseDate() {
        return lastPurchaseDate;
    }

    public void setLastPurchaseDate(LocalDate lastPurchaseDate) {
        this.lastPurchaseDate = lastPurchaseDate;
    }

    public boolean getIsActive() {
        return isActive;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }
}
