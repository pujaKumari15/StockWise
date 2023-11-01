import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Vendor() {
  const [vendors, setVendors] = useState([]);

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