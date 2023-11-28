import React from 'react'
import Bussiness_Sidebar from '../Bussiness_Sidebar'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import "../Customers/Customer.css"
const CustomerList = () => {
  return (
    <>
       <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    {/* <!-- Menu --> */}

                    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                        <div className="menu-inner-shadow"></div>

                        <Bussiness_Sidebar />
                    </aside>
                    {/* <!-- / Menu --> */}

                    {/* <!-- Layout container --> */}
                    <div className="layout-page">
                        {/* <!-- Navbar --> */}

                        <Navbar />

                        {/* <!-- / Navbar --> */}

                        {/* <!-- Content wrapper --> */}
                        <div className="content-wrapper">
                            {/* <!-- Content --> */}

                            <div className="container-xxl flex-grow-1 container-p-y">
                           
                                <div className=''>
                                    <Link    to={"/Add-product"}> <button className="btn btn-primary  w-10 btn_group">Add customer </button> </Link>
                                    <button className="btn btn-primary  w-10 btn_group">Pdf</button>
                                    <button className="btn btn-primary  w-10 btn_group">Excel</button>
                                </div>

                                {/* <!-- Striped Rows --> */}
                                <div className="card">
                                <h1 className='headindclass'> Customer List</h1> 
                                    <div className="table-responsive text-nowrap">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>photo   </th>
                                                    <th>Customer name   </th>
                                                    <th>mobile</th>
                                                    <th>Email</th>
                                                    <th>Address</th>
                                                    <th>type</th>
                                                    <th>join</th>
                                                    <th>status</th>
                                                    
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="table-border-bottom-0">



                                                {/* {
                                                    productdetail.length > 0 ? productdetail.map((item, index) =>
                                                        <tr key={item._id}>
                                                            <td>{index + 1}</td>
                                                            <td>{item.productName}</td>
                                                            <td>{item.skuname}</td>
                                                            <td>{item.proHsn}</td>
                                                            <td>{item.ProUnit}</td>
                                                            <td>{item.ProBrand}</td>
                                                            <td>{item.Procategory}</td>

                                                            <td>{item.proBatchno}</td>
                                                            <td>{item.proPacking}</td>

                                                            <td>{item.proTax}</td>

                                                            <div className="dropdown">
                                                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                                    <MoreVertIcon />
                                                                </button>
                                                                <div className="dropdown-content">
                                                                <Link to={"/update/" + item._id} > <CreateIcon className='editpencil' />Edit</Link>
                                                                    <a href="#"> <CreateIcon className='editpencil' />Print </a>
                                                                    <a href="#" > <CreateIcon className='editpencil' />Cancel</a>
                                                                </div>
                                                            </div>
                                                        </tr>
                                                    )
                                                        : <h1>No Result Found</h1>
                                                } */}



                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* <!--/ Striped Rows --> */}

                            </div>
                            {/* <!-- / Content --> */}



                            <div className="content-backdrop fade"></div>
                        </div>
                        {/* <!-- Content wrapper --> */}
                    </div>
                    {/* <!-- / Layout page --> */}
                </div>

                {/* <!-- Overlay --> */}
                <div className="layout-overlay layout-menu-toggle"></div>
            </div>
    </>
  )
}

export default CustomerList
