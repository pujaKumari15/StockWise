package com.example.stockwise.controller;

import com.example.stockwise.dto.VendorDTO;
import com.example.stockwise.service.VendorService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(MockitoExtension.class)
public class VendorControllerTest {

    @Mock
    private VendorService vendorService;

    @InjectMocks
    private VendorController vendorController;

    private MockMvc mockMvc;

    @BeforeEach
    public void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(vendorController).build();
    }

    @Test
    public void testGetAllVendors() throws Exception {
        List<VendorDTO> vendorList = Arrays.asList(new VendorDTO(), new VendorDTO());
        when(vendorService.getAllVendors()).thenReturn(vendorList);
        mockMvc.perform(get("/vendors/all")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
        verify(vendorService).getAllVendors();
    }

    @Test
    public void testGetVendorForId() throws Exception {
        int vendorId = 1;
        VendorDTO vendorDTO = new VendorDTO();
        when(vendorService.getVendorForId(vendorId)).thenReturn(vendorDTO);
        mockMvc.perform(get("/vendors/{vendorId}", vendorId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
        verify(vendorService).getVendorForId(vendorId);
    }
}

