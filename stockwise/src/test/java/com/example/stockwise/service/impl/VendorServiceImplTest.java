package com.example.stockwise.service.impl;

import com.example.stockwise.dto.VendorDTO;
import com.example.stockwise.entity.Vendor;
import com.example.stockwise.repository.VendorRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Collections;
import java.util.List;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.openMocks;

public class VendorServiceImplTest {
    @Mock
    private VendorRepository vendorRepository;

    @InjectMocks
    private VendorServiceImpl vendorService;

    @BeforeEach
    void setUp() {
        openMocks(this);
    }

    @Test
    void testGetInventoryForStore() {
        // Arrange
        Vendor vendor = new Vendor();
        String vendorId = "123";
        String vendorName = "VendorName";
        vendor.setVendorId(vendorId);
        vendor.setName(vendorName);

        when(vendorRepository.getAllVendors()).thenReturn(Collections.singletonList(vendor));

        // Act
        List<VendorDTO> result = vendorService.getAllVendors();

        // Assert
        assertEquals(1, result.size());
        assertEquals(vendorId, result.get(0).getVendorId());
        assertEquals(vendorName, result.get(0).getName());
    }
}
