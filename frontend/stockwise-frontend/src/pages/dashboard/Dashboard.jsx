import React, { useState } from 'react'
import './Dashboard.css'
import Header from './Header'
import Sidebar from './SideBar'
import MainContent from './MainContent'

function Dashboard() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <div className='grid-container'>
            {/*  <Header OpenSidebar={OpenSidebar}/> */}
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <MainContent />
        </div>
    )
}

export default Dashboard