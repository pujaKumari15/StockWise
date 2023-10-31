import React, { useEffect, useState } from 'react';

function VendorList() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetch('/vendors/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
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

  export default VendorList;
