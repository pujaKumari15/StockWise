import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from "../../components/sidebar/Sidebar";

function Vendor() {
  const [vendors, setVendors] = useState([]);
//  {"id": 123, "name": "test", "email": "xyz@gmail.com", "mobileNumber": "65000000000", "companyName": "SJSU"}
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
    <div>
    <Sidebar/>
      <h1>Vendor List</h1>
      <table>
        <tr>
          <th>Vendor Name</th>
          <th>Company Name</th>
          <th>Email</th>
          <th>Work Phone</th>
        </tr>
        {vendors.map(vendor => (
          <tr key={vendor.id}>
            <td>{vendor.vendorName}</td>
            <td>{vendor.companyName}</td>
            <td>{vendor.email}</td>
            <td>{vendor.mobileNumber}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Vendor;
