package com.example.stockwise.service.impl;

import com.example.stockwise.dto.PurchaseOrdersDTO;
import com.example.stockwise.entity.PurchaseOrders;
import com.example.stockwise.repository.PurchaseOrdersRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class PurchaseOrdersImplTest {

    @Mock
    private PurchaseOrdersRepository purchaseOrdersRepository;

    @InjectMocks
    private PurchaseOrdersImpl purchaseOrdersService;

    @BeforeEach
    void setUp() {
    }

    @Test
    void getAllPurchaseOrders_ShouldReturnListOfDTOs() {
        List<PurchaseOrders> mockOrders = IntStream.range(0, 5)
                .mapToObj(i -> new PurchaseOrders(/* construct your PurchaseOrder entity here */))
                .collect(Collectors.toList());
        when(purchaseOrdersRepository.getAllPurchaseOrders()).thenReturn(mockOrders);
        List<PurchaseOrdersDTO> result = purchaseOrdersService.getAllPurchaseOrders();
        assertEquals(mockOrders.size(), result.size());
    }
}
