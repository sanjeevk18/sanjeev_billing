import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/LoginPart/Login";
import Registation from "./Components/LoginPart/Registation";
import Forgetpas from "./Components/LoginPart/Forgetpas";
import Home from "./Components/Home";
import AddProduct from "./Components/Products/AddProduct";
import ProductList from "./Components/Products/ProductList";
import Variation from "./Components/Products/Variation";
import Product_Units from "./Components/Products/Product_Units";
import Product_categories from "./Components/Products/Product_categories";
import Product_Brands from "./Components/Products/Product_Brands";
import UpdateAddProduct from "./Components/Products/UpdateAddProduct";
import AddCustomer from "./Components/Customers/AddCustomer";
import CustomerList from "./Components/Customers/CustomerList";
import CustomerGrup from "./Components/Customers/CustomerGrup";
import NewDeposit from "./Components/Transaction/NewDeposit";
import NewExpernse from "./Components/Transaction/NewExpernse";
import Trasnfer from "./Components/Transaction/Trasnfer";
import ViewTrnsaction from "./Components/Transaction/ViewTrnsaction";
import Balance from "./Components/Transaction/Balance";
import React from "react";
import TransferReport from "./Components/Transaction/TransferReport";
// import Agents from './Components/UserMaster/Agents';
// sales components
import Invoice from "./Components/Sales/Invoice";
import NewInvoices from "./Components/Sales/NewInvoices";
import RecurringInvoices from "./Components/Sales/RecurringInvoices";
import NewRrecurringInvoice from "./Components/Sales/NewRrecurringInvoice";
import RunnugTask from "./Components/Task/RunnugTask";
import AchieveTask from "./Components/Task/AchieveTask";
import User from "./Components/UserMaster/User";
import Roles from "./Components/UserMaster/Roles";
// import SalesAgents from "./Components/UserMaster/SalesAgents"
import AddNewUser from "./Components/UserMaster/AddNewUser";
import SalesAgents from "./Components/UserMaster/SalesAgents";
import AddNewRole from "./Components/UserMaster/AddNewRole";
import AddnewUserUpdate from "./Components/UserMaster/AddnewUserUpdates"
import Supplier from "./Components/Contacts/Supplier";
import ContactCustomer from "./Components/Contacts/ContactCustomer";
import ContactCustomerGroup from "./Components/Contacts/ContactCustomerGroup";
import ContactImportGroup from "./Components/Contacts/ContactImportGroup";
// const Invoice = React.lazy(() =>
//   import("./Components/Sales/Invoice")
// );
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registaion" element={<Registation />} />
      <Route path="/forget-password" element={<Forgetpas />} />
      <Route path="/Home" element={<Home />} />

      {/* user routes  */}
      <Route path="/user-management" element={<User />} />
      <Route path="/addnewUpdate/:id" element={<AddnewUserUpdate />} />
      <Route path="/addnewuser" element={<AddNewUser />} />
      <Route path="/role-management" element={<Roles />} />
      <Route path="/addnewRole" element={<AddNewRole />} />
      <Route path="/sales-commission" element={<SalesAgents />} />
      {/*  contact routes */}
      <Route path="/contact-supplier" element={<Supplier />} />
      <Route path="/contact-customer" element={<ContactCustomer />} />
      <Route path="/contact-customer-group" element={<ContactCustomerGroup />}/>
      <Route path="/contact-import-contact" element={<ContactImportGroup />} />

      {/* products Routes */}
      <Route path="/Add-product" element={<AddProduct />} />
      <Route path="/Product-list" element={<ProductList />} />
      <Route path="/update/:id" element={<UpdateAddProduct />} />
      <Route path="/Prodct-variation" element={<Variation />} />
      <Route path="/product-units" element={<Product_Units />} />
      <Route path="/product-categories" element={<Product_categories />} />
      <Route path="/product-brands" element={<Product_Brands />} />

      {/* customer routes  */}
      <Route path="/add-customer" element={<AddCustomer />} />
      <Route path="/list-customer" element={<CustomerList />} />
      <Route path="/group-customer" element={<CustomerGrup />} />

      {/* transaction routes */}
      <Route path="/new-deposit" element={<NewDeposit />} />
      <Route path="/new-expernes" element={<NewExpernse />} />
      <Route path="/transfer" element={<Trasnfer />} />
      <Route path="/view-transaction" element={<ViewTrnsaction />} />
      <Route path="/balance-sheet" element={<Balance />} />
      <Route path="/transfer-report" element={<TransferReport />} />

      {/* sales routes */}
      <Route path="/sales-invoice" element={<Invoice />} />
      <Route path="/sales-new-invoices" element={<NewInvoices />} />
      <Route path="/sales-recurring-invoice" element={<RecurringInvoices />} />
      <Route
        path="/sales-new-recurring-voice"
        element={<NewRrecurringInvoice />}
      />
      {/* task routes */}
      <Route path="/running-task-duration" element={<RunnugTask />} />
      <Route path="/achieve-task-duration" element={<AchieveTask />} />
    </Routes>
  );
}

export default App;
