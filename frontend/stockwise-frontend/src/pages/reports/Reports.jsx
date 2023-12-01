import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Reports.css';
import Sidebar from "../dashboard/SideBar";

const Reports = (data, tite) => {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  const topSalesData = [
    { item: 'Milk', sales: 4000 },
    { item: 'Eggs', sales: 3500 },
    { item: 'Onions', sales: 3200 },
    { item: 'Coffee', sales: 3000 },
    { item: 'Rice', sales: 2800 },
  ];

  const lowSalesData = [
    { item: 'Banana', sales: 500 },
    { item: 'Chocolates', sales: 600 },
    { item: 'Rice flour', sales: 700 },
    { item: 'Chips', sales: 1000 },
    { item: 'Carrot', sales: 1200 },
  ];


  const generateTable = (salesData, title) => {
    const data = salesData.slice(0, 5); // Get the top 5 selling items

  return (
    <div className='grid-container'>
      <h1 className="h2title">{title}</h1>
      <div className="reports">
      <table className="reportsTable">
        <thead>
          <tr>
            <th>Item</th>
            <th>Sales</th>
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
      {generateTable(topSalesData, 'Top 5 Selling Items')}
      {generateTable(lowSalesData, 'Low Selling Items')}
    </div>
  );
}

export default Reports;