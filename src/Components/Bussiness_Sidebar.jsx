import React from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import HomeIcon from "@mui/icons-material/Home";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import "./Bussinees_Sidebar.css";

const Bussiness_Sidebar = () => {
  //     const [collapsed,setCollapsed]=useState(false);
  // const handleToggleSidebar=()=>{
  //     setCollapsed(!collapsed);
  // }
  return (
    <>
      <div>
        <Sidebar className="slider_css">
          <Menu className="huu">
            <MenuItem component={<Link to="/Home" />}>
              <HomeIcon className="dashbord_icon" /> DashBoard{" "}
            </MenuItem>
            <SubMenu
              icon={<CreditCardIcon className="dashbord_icon" />}
              label="User Managements"
            >
              <MenuItem className="" component={<Link to="/user-management" />}>
                Users{" "}
              </MenuItem>
              <MenuItem className="" component={<Link to="/role-management" />}>
                Roles
              </MenuItem>
              <MenuItem className="" component={<Link to="/sales-commission" />}>
               sales commission Agents 
              </MenuItem>
            </SubMenu>
            {/* <SubMenu
              icon={<CreditCardIcon className="dashbord_icon" />}
              label="Customer"
            >
              <MenuItem className="" component={<Link to="/add-customer" />}>
                Add Customer{" "}
              </MenuItem>
              <MenuItem className="" component={<Link to="/list-customer" />}>
                List{" "}
              </MenuItem>
              <MenuItem className="" component={<Link to="/group-customer" />}>
                Group{" "}
              </MenuItem>
            </SubMenu> */}


{/* contact */}
<SubMenu
              icon={<CreditCardIcon className="dashbord_icon" />}
              label="Contacts"
            >
              <MenuItem className="" component={<Link to="/contact-supplier" />}>
               Supplier
              </MenuItem>
              <MenuItem className="" component={<Link to="/contact-customer" />}>
               Customer
              </MenuItem>
              <MenuItem className="" component={<Link to="/contact-customer-group" />}>
              customer  Group{" "}
              </MenuItem>
              <MenuItem className="" component={<Link to="/contact-import-contact" />}>
              Import Contacts
              </MenuItem>
            </SubMenu>


            <SubMenu
              icon={<CreditCardIcon className="dashbord_icon" />}
              label="Transaction"
            >
              <MenuItem
                className="menuitemcss"
                component={<Link to="/new-deposit" />}
              >
                {" "}
                New Deposit{" "}
              </MenuItem>
              <MenuItem
                className="menuitemcss"
                component={<Link to="/new-expernes" />}
              >
                {" "}
                new Expernes{" "}
              </MenuItem>
              <MenuItem
                className="menuitemcss"
                component={<Link to="/transfer" />}
              >
                {" "}
                Transfer{" "}
              </MenuItem>
              <MenuItem
                className="menuitemcss"
                component={<Link to="/view-transaction" />}
              >
                {" "}
                view transaction{" "}
              </MenuItem>
              <MenuItem
                className="menuitemcss"
                component={<Link to="/balance-sheet" />}
              >
                {" "}
                balance Shet{" "}
              </MenuItem>
              <MenuItem
                className="menuitemcss"
                component={<Link to="/transfer-report" />}
              >
                {" "}
                Transfer Report{" "}
              </MenuItem>
            </SubMenu>
            <SubMenu
              icon={<CreditCardIcon className="dashbord_icon" />}
              label="Sales"
            >
              <MenuItem component={<Link to="/sales-invoice" />}>
                {" "}
               InVoices
              </MenuItem>
              <MenuItem component={<Link to="/sales-new-invoices" />}>
                {" "}
         New InVoices
              </MenuItem>
              <MenuItem component={<Link to="/sales-recurring-invoice" />}>
                {" "}
           Recurring InVoices
              </MenuItem>
              <MenuItem component={<Link to="/sales-new-recurring-voice" />}>
                {" "}
                New Recurring Invoice   
              </MenuItem>
              <MenuItem component={<Link to="/product-categories" />}>
                {" "}
                Quotes
              </MenuItem>
              <MenuItem component={<Link to="/product-brands" />}>
                {" "}
                New Quotes
              </MenuItem>
              <MenuItem component={<Link to="/product-brands" />}>
                {" "}
                Payments
              </MenuItem>
              <MenuItem component={<Link to="/product-brands" />}>
                {" "}
               Tax Rates 
              </MenuItem>
            </SubMenu>
            <SubMenu
              icon={<CreditCardIcon className="dashbord_icon" />}
              label="Task"
            >
              <MenuItem component={<Link to="/running-task-duration" />}>
                {" "}
                Running Task{" "}
              </MenuItem>
              {/* <MenuItem component={<Link to="/" />}> Add Purchase </MenuItem> */}
              <MenuItem component={<Link to="/achieve-task-duration" />}>
                {" "}
                Achieve Task{" "}
              </MenuItem>
            </SubMenu>
            <SubMenu
              icon={<CreditCardIcon className="dashbord_icon" />}
              label="Sales"
            >
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                All Sales{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Add Sales{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                List POS{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                POS{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Add Quotation{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                List Quotation{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                List Sale Return{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Shipments{" "}
              </MenuItem>
            </SubMenu>
            <SubMenu
              icon={<CreditCardIcon className="dashbord_icon" />}
              label="Stock Transfer"
            >
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Add Stock Transfer{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                List Stock Transfer{" "}
              </MenuItem>
            </SubMenu>
            <SubMenu
              icon={<CreditCardIcon className="dashbord_icon" />}
              label="Stock Adjustment"
            >
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Add Stock Adjustment
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                List Stock Adjustment
              </MenuItem>
            </SubMenu>
            <SubMenu
              icon={<CreditCardIcon className="dashbord_icon" />}
              label="Expenses"
            >
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Add Expenses{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                List Expenses
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Expenses Categories{" "}
              </MenuItem>
            </SubMenu>
            <SubMenu
              icon={<CreditCardIcon className="dashbord_icon" />}
              label="Payment Account"
            >
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                List Account{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Balance Sheet{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Trail Balance{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Cash Flow{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Payment Account Register{" "}
              </MenuItem>
            </SubMenu>
            <SubMenu
              icon={<CreditCardIcon className="dashbord_icon" />}
              label="Reports"
            >
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Profit & Loss{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Purchase & Sale{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Tax Report{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Suppliers{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Customers{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Stock{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Stock Adjustment{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Trading Product{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Item Report{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Product Purchase{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Product Sale{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Expenses{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                Suppliers Payment{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Refund Register{" "}
              </MenuItem>
            </SubMenu>
            <SubMenu
              icon={<CreditCardIcon className="dashbord_icon" />}
              label="Authentications"
            >
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Login{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Register{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Forget Password{" "}
              </MenuItem>
              <MenuItem component={<Link to="/daily-collection" />}>
                {" "}
                Organization{" "}
              </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
};

export default Bussiness_Sidebar;
