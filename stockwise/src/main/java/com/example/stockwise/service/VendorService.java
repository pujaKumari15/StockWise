package com.example.stockwise.service;

import com.example.stockwise.dto.VendorDTO;

import java.util.List;
public interface VendorService {
    List<VendorDTO> getAllVendors();

    VendorDTO getVendorForId(int vendorId);
}
