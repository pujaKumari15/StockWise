package com.example.stockwise.service.impl;

import com.example.stockwise.service.VendorService;
import com.example.stockwise.dto.VendorDTO;
import com.example.stockwise.repository.VendorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VendorServiceImpl implements VendorService{

    private final VendorRepository vendorRepository;

    public VendorServiceImpl(VendorRepository vendorRepository) {
        this.vendorRepository = vendorRepository;
    }

    @Override
    public List<VendorDTO> getAllVendors() {
        return vendorRepository.getAllVendors().stream().map(
                vendor -> new VendorDTO(vendor.getVendorId(), vendor.getName())
        ).toList();
    }

    @Override
    public VendorDTO getVendorForId(String vendorId) {
        return new VendorDTO();
    }
}
