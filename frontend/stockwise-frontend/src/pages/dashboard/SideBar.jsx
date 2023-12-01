import React from 'react'
import
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
    BsListCheck, BsMenuButtonWideFill, BsFillBellFill}
    from 'react-icons/bs'
import {BiSolidHome, BiSolidShoppingBag} from "react-icons/bi";
import {AiFillAlert} from "react-icons/ai";

function Sidebar({openSidebarToggle, OpenSidebar}) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
         {/*  <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BiSolidHome  className='icon_header'/> Home
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
    </div> */}

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsGrid1X2Fill className='icon'/> Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGrid3X3GapFill className='icon'/> Categories
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillArchiveFill className='icon'/> Products
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsCart3 className='icon'/> Sales
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BiSolidShoppingBag className='icon'/> Purchases
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsPeopleFill className='icon'/> Vendors
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsMenuButtonWideFill className='icon'/> Reports
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillBellFill className='icon'/> Alerts
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar