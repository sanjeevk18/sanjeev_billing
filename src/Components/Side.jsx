import React from 'react'
import {  Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';
const Side = () => {
  return (
    <div>
      <Sidebar className='slider_css' >
                <Menu className='huu' >
                   
                    <MenuItem component={<Link to="/doctor-dashboard" />}   >
                        <HomeIcon  className='dashbord_icon' />  DashBoard </MenuItem>
                    <SubMenu icon={<CreditCardIcon className='dashbord_icon' />} label="Master" >
                        <SubMenu icon={<CreditCardIcon className='dashbord_icon' />} label="Hospitals">
                            <MenuItem className='' component={<Link to="/add-hospital" />}>Add  Hospitals </MenuItem>
                            <MenuItem className='' component={<Link to="/all-hospital" />}>All Hospitals </MenuItem>
                        </SubMenu>

                        {/* <SubMenu icon={<CreditCardIcon className='dashbord_icon' />} label="IPD">
                        <MenuItem className='' component={<Link to="/Ipd_registation" />}> Registation </MenuItem>
                        <MenuItem className='' component={<Link to="/Ipd_details" />}> Details </MenuItem>
                        </SubMenu> */}
                        {/* <MenuItem component={<Link to="/reception-enquiry" />} > Reception Enquire </MenuItem> */}
                    </SubMenu>
                    <SubMenu icon={<CreditCardIcon className='dashbord_icon' />} label="Report">

                        <MenuItem component={<Link to="/daily-collection" />} > Daily Collection </MenuItem>
                    </SubMenu>

                </Menu>
            </Sidebar>
    </div>
  )
}

export default Side
