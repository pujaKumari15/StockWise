package com.example.stockwise.controller;

import com.example.stockwise.dto.PurchaseOrdersDTO;
import com.example.stockwise.service.PurchaseOrdersService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/purchaseorders")
public class PurchaseOrdersController {

    @Autowired
    private PurchaseOrdersService PurchaseOrdersService;

    @GetMapping(value = "/all")
    public List<PurchaseOrdersDTO> getAllPurchaseOrders() {
        return PurchaseOrdersService.getAllPurchaseOrders();
    }

}
