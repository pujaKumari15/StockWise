import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from "../../components/sidebar/Sidebar";
import './Vendors.css';

function Vendors() {
  const [vendors, setVendors] = useState([
  {"id": 123, "vendorName": "Vendor Test Name 1", "email": "xyz@gmail.com", "mobileNumber": "65000000000", "companyName": "SJSU"},
  {"id": 123, "vendorName": "Vendor Test Name 2", "email": "xyz@gmail.com", "mobileNumber": "65000000000", "companyName": "SJSU"}]);

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
    <Sidebar/>
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
    </>
  );
}

export default Vendors;
