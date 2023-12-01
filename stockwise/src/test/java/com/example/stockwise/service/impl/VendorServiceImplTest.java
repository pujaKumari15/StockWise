package com.example.stockwise.service.impl;

import com.example.stockwise.dto.VendorDTO;
import com.example.stockwise.entity.Vendor;
import com.example.stockwise.repository.VendorRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class VendorServiceImplTest {
    @Mock
    private VendorRepository vendorRepository;

    @InjectMocks
    private VendorServiceImpl vendorService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetInventoryForStore() {
        // Arrange
        Vendor vendor = new Vendor();
        int vendorId = 123;
        String vendorName = "VendorName";
        String vendorEmail="abcd@xyz.com";
        int vendorPhone=9942;
        String vendorStartDateString = "2017-01-13";
        LocalDate vendorStartDate = LocalDate.parse(vendorStartDateString);
        String vendorLastPurchaseDateString="2023-10-12";
        LocalDate vendorLastPurchaseDate = LocalDate.parse(vendorLastPurchaseDateString);
        boolean vendorIsActive=true;
        int vendorCategoryId=2;

        vendor.setVendorId(vendorId);
        vendor.setName(vendorName);
        vendor.setEmail(vendorEmail);
        vendor.setPhone(vendorPhone);
        vendor.setStartDate(vendorStartDate);
        vendor.setLastPurchaseDate(vendorLastPurchaseDate);
        vendor.setActive(vendorIsActive);
        vendor.setCategoryId(vendorCategoryId);


        when(vendorRepository.getAllVendors()).thenReturn(Collections.singletonList(vendor));

        // Act
        List<VendorDTO> result = vendorService.getAllVendors();

        // Assert
        assertEquals(1, result.size());
        assertEquals(vendorId, result.get(0).getVendorId());
        assertEquals(vendorName, result.get(0).getName());
//        assertEquals(vendorEmail, result.get(0).getEmail());
//        assertEquals(vendorPhone, result.get(0).getPhone());
//        assertEquals(vendorStartDate, result.get(0).getStartDate());
//        assertEquals(vendorLastPurchaseDate, result.get(0).getLastPurchaseDate());
//        assertEquals(vendorIsActive, result.get(0).getIsActive());
//        assertEquals(vendorId, result.get(0).getCategoryId());

    }
}
