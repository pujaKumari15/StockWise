import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import Sidebar from './SideBar'
import MainContent from './MainContent'
import { useKeycloak } from '@react-keycloak/web';

function Dashboard() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    const { keycloak } = useKeycloak();

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    useEffect(() => {
    }, [keycloak?.authenticated, keycloak?.token]);

    return (
        <div className='grid-container'>
            {/*  <Header OpenSidebar={OpenSidebar}/> */}
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <MainContent />
        </div>
    )
}

export default Dashboard