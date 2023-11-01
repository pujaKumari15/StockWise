import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PurchaseOrders() {
  const [purchaseOrders, setPurchaseOrders] = useState([]);

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
    <div>
      <h1>Purchase Orders</h1>
      <table>

          <tr>
            <th>Vendor Name</th>
            <th>Vendor Phone Number</th>
            <th>Last Purchased Date</th>
          </tr>
      </table>
    </div>
  );
}

export default PurchaseOrders;
