import React, {useState } from 'react';
import './Alerts.css';
import Sidebar from "../dashboard/SideBar";

const Alerts = () => {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  const lowStockNotify = [
    { item: 'Milk', sales: 100 },
    { item: 'Eggs', sales: 50 },
    { item: 'Onions', sales: 80 },
    { item: 'Coffee', sales: 70 },
    { item: 'Rice', sales: 60 },
  ];

  const expiryStockNotify = [
    { item: 'Curd', sales: '23/12/05' },
    { item: 'Pulses', sales: '23/12/03'},
    { item: 'Rice flour', sales: '23/12/02' },
    { item: 'Chips', sales: '23/12/06' },
    { item: 'Milk', sales: '23/12/05'},
  ];


  const generateTable = (alerts, title, isLowStockNotify) => {
    const data = alerts.slice(0, 5); // Get the top 5 selling items

  return (
    <div className='grid-container'>
      <h1 className="h2title">{title}</h1>
      <div className="reports">
      <table className="reportsTable">
        <thead>
          <tr>
            <th>Item</th>
            <th>{isLowStockNotify ? 'Qty Left' : 'Expiry Date'}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.item}</td>
              <td>{item.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
  )
  }

  return (
    <div className='grid-container'>
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      {generateTable(lowStockNotify, 'Low Stock Items', true)}
      {generateTable(expiryStockNotify, 'Soon Expiring Items', false)}
    </div>
  );
}

export default Alerts;