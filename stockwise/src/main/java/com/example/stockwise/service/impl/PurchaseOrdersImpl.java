package com.example.stockwise.service.impl;

import com.example.stockwise.repository.PurchaseOrdersRepository;
import com.example.stockwise.dto.PurchaseOrdersDTO;
import com.example.stockwise.service.PurchaseOrdersService;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PurchaseOrdersImpl implements PurchaseOrdersService {
    private final PurchaseOrdersRepository purchaseOrdersRepository;

    public PurchaseOrdersImpl(PurchaseOrdersRepository purchaseOrdersRepository) {
        this.purchaseOrdersRepository = purchaseOrdersRepository;
    }

    @Override
    public List<PurchaseOrdersDTO> getAllPurchaseOrders() {
        return purchaseOrdersRepository.getAllPurchaseOrders().stream().map(
                purchaseOrder -> new PurchaseOrdersDTO(
                        purchaseOrder.getStockId(),
                        purchaseOrder.getName(),
                        purchaseOrder.getPhoneNumber(),
                        purchaseOrder.getLastPurchaseDate(),
                        purchaseOrder.getProductName(),
                        purchaseOrder.getQuantity()
                )
        ).toList();
    }


}
