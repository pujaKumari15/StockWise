package com.example.stockwise.service;

import com.example.stockwise.dto.PurchaseOrdersDTO;
import com.example.stockwise.dto.VendorDTO;

import java.util.List;

public interface PurchaseOrdersService {
    List<PurchaseOrdersDTO> getAllPurchaseOrders();
}
