import React from 'react'
import
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
    from 'react-icons/bs'
import
{ BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, LineChart,Line }
    from 'recharts';

function MainContent() {

    const data = [
        {
            name: 'Page A',
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            pv: 4300,
            amt: 2100,
        },
    ];

    const salesData = [
        { month: 'Jan', sales: 2000 },
        { month: 'Feb', sales: 3000 },
        { month: 'Mar', sales: 4000 },
        { month: 'Apr', sales: 2800 },
        { month: 'May', sales: 1400 },
        { month: 'Jun', sales: 2200 },
        { month: 'Jul', sales: 3200 },
        { month: 'Aug', sales: 5000 },
        { month: 'Sept', sales: 2400 },
        { month: 'Oct', sales: 3000 },
        { month: 'Nov', sales: 4500 },
        { month: 'Dec', sales: 3500 },
      ];

      const salesByCategories = [
        { category: 'Dairy', sales: 3000 },
        { category: 'Vegetables', sales: 3200 },
        { category: 'Staples', sales: 4000 },
        { category: 'Fruits', sales: 2800 },
        { category: 'Bakery', sales: 3500 },
       {/*} { category: 'Beverages', sales: 2000 },
        { category: 'Meat & Seafood', sales: 2000 },
        { category: 'Frozen Food', sales: 2000 },
        { category: 'Condiments', sales: 2000 },
        { category: 'Cleaning & Household', sales: 2000 },
        { category: 'Personal Hygiene', sales: 2000 },
      { category: 'Cooking Essentials', sales: 2000 } */}
      ];

      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#008042'];



    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>PRODUCTS</h3>
                        <BsFillArchiveFill className='card_icon'/>
                    </div>
                    <h1>300</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>CATEGORIES</h3>
                        <BsFillGrid3X3GapFill className='card_icon'/>
                    </div>
                    <h1>12</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>VENDORS</h3>
                        <BsPeopleFill className='card_icon'/>
                    </div>
                    <h1>33</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>ALERTS</h3>
                        <BsFillBellFill className='card_icon'/>
                    </div>
                    <h1>42</h1>
                </div>
            </div>

            <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={salesData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sales" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer>
                <PieChart width={200} height={100}>
      <Pie
        data={salesByCategories}
        dataKey="sales"
        nameKey="category"
        cx="50%"
        cy="50%"
        outerRadius={110}
        fill="#8884d8"
        label
      >
        {salesData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
                </ResponsiveContainer>


            {/*}    <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer> 8/}

              {/*  <ResponsiveContainer width="100%" height="100%">
                <PieChart width={500} height={300}>
                <Pie data={salesByCategories} dataKey="sales" nameKey="category" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" label />
                <Tooltip />
                <Legend />
                </PieChart>
    </ResponsiveContainer> */}

            </div>
        </main>
    )
}

export default MainContent