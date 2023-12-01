package com.example.stockwise.dto;

import java.sql.Date;
import java.time.LocalDate;

public class VendorDTO {
    private int vendorId;
    private String name;

    private String email;
    private int phone;
    private LocalDate startDate;
    private LocalDate lastPurchaseDate;
    private boolean isActive;
    private int categoryId ;

    public VendorDTO(int vendorId, String name, String email, int phone, LocalDate startDate, LocalDate lastPurchaseDate, boolean active, int categoryId) {
        this.vendorId = vendorId;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.startDate = startDate;
        this.lastPurchaseDate = lastPurchaseDate;
        this.isActive = active;
        this.categoryId = categoryId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public void setLastPurchaseDate(LocalDate lastPurchaseDate) {
        this.lastPurchaseDate = lastPurchaseDate;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public int getPhone() {
        return phone;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public LocalDate getLastPurchaseDate() {
        return lastPurchaseDate;
    }

    public boolean getIsActive() {
        return isActive;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public VendorDTO() {
    }

    public VendorDTO(
            int vendorId,
            String name
    ) {
        this.vendorId = vendorId;
        this.name = name;
    }

    public int getVendorId() {
        return this.vendorId;
    }

    public String getName() {
        return this.name;
    }
    public void setVendorId(int vendorId) {
        this.vendorId = vendorId;
    }

    public void setName(String name) {
        this.name = name;
    }

}
