package com.example.stockwise.controller;

import com.example.stockwise.dto.VendorDTO;
import com.example.stockwise.service.ProductService;
import com.example.stockwise.service.VendorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/vendors")
public class VendorController {

    @Autowired
    private VendorService vendorService;

    @GetMapping(value = "/all")
    public List<VendorDTO> getAllVendors() {
        return vendorService.getAllVendors();
    }
    @GetMapping(value = "{vendorId}")
    public VendorDTO getVendorForId(@PathVariable("vendorId")int vendorId) {
        return vendorService.getVendorForId(vendorId);

    }
}
