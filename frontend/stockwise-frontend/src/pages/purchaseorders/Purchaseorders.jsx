import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from "../../components/sidebar/Sidebar";
import './Purchaseorders.css';

function PurchaseOrders() {
  const [purchaseOrders, setPurchaseOrders] = useState([
  { "id": 123, "mobileNumber": 12345678, "vendorName": "Test Vendor Name 1", "lastPurchaseDate": '2023-10-28'}]);

  useEffect(() => {
    axios.get('/purchase_orders')
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }
        return response.data;
      })
      .then(data => {
        setPurchaseOrders(data);
      })
      .catch(error => {
        console.error('Error fetching purchase orders: ' + error);
      });
  }, []);

  return (
  <>
      <Sidebar/>
      <h1>Purchase Orders</h1>
      <div className="orderList">
      <table className="orderTable">
      <thead>
          <tr>
            <th>Vendor Name</th>
            <th>Vendor Phone Number</th>
            <th>Last Purchased Date</th>
          </tr>
          </thead>
        <tbody>
        {purchaseOrders.map(order => (
          <tr key={order.id}>
            <td>{order.vendorName}</td>
            <td>{order.mobileNumber}</td>
            <td>{order.lastPurchaseDate}</td>
          </tr>
        ))}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default PurchaseOrders;
