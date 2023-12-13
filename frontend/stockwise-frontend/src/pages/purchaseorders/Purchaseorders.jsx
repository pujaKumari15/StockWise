import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Purchaseorders.css';
import Sidebar from "../dashboard/SideBar";

function PurchaseOrders() {
  const [purchaseOrders, setPurchaseOrders] = useState([


      {"id": 1, "mobileNumber": "(857) 555-0101", "vendorName": "Fresh Farms", "lastPurchaseDate": "2023-01-15", "companyName": "Fresh Farms", "categoryPurchased": "Chicken"},
      {"id": 12, "mobileNumber": "(202) 555-0102", "vendorName": "Organic Origins", "lastPurchaseDate": "2023-02-20", "companyName": "Organic Origins", "categoryPurchased": "Flour, rice and cereals"},
      {"id": 5, "mobileNumber": "(510) 555-0105", "vendorName": "Veggie Variety", "lastPurchaseDate": "2023-02-28", "companyName": "Veggie Variety", "categoryPurchased":"Dairy"},
      {"id": 4, "mobileNumber": "(512) 555-0104", "vendorName": "Bakery Bliss", "lastPurchaseDate": "2023-01-05", "companyName": "Bakery Bliss", "categoryPurchased": "Snacks and Bakery"},
      {"id": 5, "mobileNumber": "(202) 555-0105", "vendorName": "Veggie Variety", "lastPurchaseDate": "2023-02-28", "companyName": "Veggie Variety", "categoryPurchased": "Vegetables"},
    {"id": 6, "mobileNumber": "(202) 555-0106", "vendorName": "Quality Meats", "lastPurchaseDate": "2023-03-15", "companyName": "Quality Meats", "categoryPurchased": "Meat"},
    {"id": 7, "mobileNumber": "(202) 555-0107", "vendorName": "Seafood Source", "lastPurchaseDate": "2023-01-25", "companyName": "Seafood Source", "categoryPurchased": "Seafood"}
  ]);
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

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
      <div className='grid-container'>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <h1>Purchase Orders</h1>
      <div className="orderList">
      <table className="orderTable">
      <thead>
          <tr>
            <th>Vendor Name</th>
            <th>Vendor Phone Number</th>
            <th>Last Purchased Date</th>
              <th>Category Purchased</th>
          </tr>
          </thead>
        <tbody>
        {purchaseOrders.map(order => (
          <tr key={order.id}>
            <td>{order.vendorName}</td>
            <td>{order.mobileNumber}</td>
            <td>{order.lastPurchaseDate}</td>
              <td>{order.categoryPurchased}</td>
          </tr>
        ))}
        </tbody>
      </table>
      </div>
      </div>
    </>
  );
}

export default PurchaseOrders;
