package com.example.stockwise.dto;

import java.sql.Date;

public class VendorDTO {
    private String vendorId;
    private String name;

    public VendorDTO() {

    }

    public VendorDTO(
            String vendorId,
            String name
    ) {
        this.vendorId = vendorId;
        this.name = name;
    }

    public String getVendorId() {
        return this.vendorId;
    }

    public String getName() {
        return this.name;
    }

}
