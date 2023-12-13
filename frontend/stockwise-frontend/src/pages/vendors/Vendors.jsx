import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Vendors.css';
import Sidebar from "../dashboard/SideBar";

function Vendors() {
  const [vendors, setVendors] = useState([
    {"id": 1, "vendorName": "Fresh Farms", "email": "contact@freshfarms.com", "mobileNumber": "(202) 555-0101", "companyName": "Fresh Farms"},
    {"id": 2, "vendorName": "Organic Origins", "email": "sales@organicorigins.net", "mobileNumber": "(202) 555-0102", "companyName": "Organic Origins"},
    {"id": 3, "vendorName": "Daily Dairy", "email": "info@dailydairy.co", "mobileNumber": "(202) 555-0103", "companyName": "Daily Dairy"},
    {"id": 4, "vendorName": "Bakery Bliss", "email": "orders@bakerybliss.org", "mobileNumber": "(202) 555-0104", "companyName": "Bakery Bliss"},
    {"id": 5, "vendorName": "Veggie Variety", "email": "support@veggievariety.com", "mobileNumber": "(202) 555-0105", "companyName": "Veggie Variety"},
    {"id": 6, "vendorName": "Quality Meats", "email": "hello@qualitymeats.net", "mobileNumber": "(202) 555-0106", "companyName": "Quality Meats"},
    {"id": 7, "vendorName": "Seafood Source", "email": "inquiry@seafoodsource.co", "mobileNumber": "(202) 555-0107", "companyName": "Seafood Source"}

  ]);

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  useEffect(() => {
    axios.get('/vendors')
      .then(response => {
        if (!response.data.success) {
          throw new Error('Network response was not ok');
        }
        return response.data.vendors;
      })
      .then(data => {
        setVendors(data);
      })
      .catch(error => {
        console.error('Error fetching data: ' + error);
      });
  }, []);

  return (
  <>
    <div className='grid-container'>
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <h1>Vendor List</h1>
      <div className="vendorList">
      <table className="vendorTable">
      <thead>
        <tr>
          <th>Vendor Name</th>
          <th>Company Name</th>
          <th>Email</th>
          <th>Work Phone</th>
        </tr>
        </thead>
        <tbody>
        {vendors.map(vendor => (
          <tr key={vendor.id}>
            <td>{vendor.vendorName}</td>
            <td>{vendor.companyName}</td>
            <td>{vendor.email}</td>
            <td>{vendor.mobileNumber}</td>
          </tr>
        ))}
        </tbody>
      </table>
      </div>
    </div>
    </>
  );
}

export default Vendors;
