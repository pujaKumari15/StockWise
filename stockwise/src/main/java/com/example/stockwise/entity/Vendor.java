package com.example.stockwise.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.sql.Date;

@Entity
@Table(name = "vendors")
public class Vendor {
    @Id
    @Column(name="vendorId")
    private String vendorId;

    @Column(name="name")
    private String name;

    public Vendor(){
    }

    public Vendor(String vendorId, String name) {
        this.vendorId = vendorId;
        this.name = name;
    }

    public String getVendorId() {
        return vendorId;
    }

    public String getName() {
        return name;
    }

    public void setVendorId(String vendorId) {
        this.vendorId = vendorId;
    }

    public void setName(String name) {
        this.name = name;
    }
}
