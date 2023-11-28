import React from 'react'
import Bussiness_Sidebar from '../Bussiness_Sidebar'
import Navbar from '../Navbar'
import "../Customers/Customer.css"
const AddCustomer = () => {
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

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card mb-4">
                                            <h1 className='headindclass'> Add Customer</h1>
                                            <hr className="my-0" />
                                            <div className="card-body">
                                                {/* form start */}
                                                <div >
                                                    <div className="row">
                                                        <div className="mb-3 col-md-6">
                                                            <label for="productName" className="form-label">First Name</label>
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                placeholder='Enter Product Name..'
                                                                id="productName"
                                                                name="First Name"
                                                                // value={productName} onChange={(e) => { setProductName(e.target.value) }}
                                                                autofocus />
                                                        </div>
                                                        <div className="mb-3 col-md-3">
                                                            <label for="lastname" className="form-label">Last name </label>
                                                            <input className="form-control" type="text"
                                                                placeholder='Enter Last name ..'
                                                            // value={skuname} onChange={(e) => { setSkuName(e.target.value) }}
                                                            />
                                                        </div>


                                                        <div className="mb-3 col-md-3">
                                                            <label for="lastname" className="form-label">Mobile no</label>
                                                            <input className="form-control" type="number"
                                                                placeholder='Enter Last name ..'
                                                            // value={skuname} onChange={(e) => { setSkuName(e.target.value) }}
                                                            />
                                                        </div>

                                                        <div className="mb-3 col-md-3">
                                                            <label for="lastname" className="form-label">Bank Details</label>
                                                            <input className="form-control" type="text"
                                                                placeholder='Enter Bank details ..'
                                                            // value={skuname} onChange={(e) => { setSkuName(e.target.value) }}
                                                            />
                                                        </div>

                                                        <div className="mb-3 col-md-3">
                                                            <label for="lastname" className="form-label">Passport </label>
                                                            <input className="form-control" type="text"
                                                                placeholder='Enter passport  ..'
                                                            // value={skuname} onChange={(e) => { setSkuName(e.target.value) }}
                                                            />
                                                        </div>

                                                        <div className="mb-3 col-md-3">
                                                            <label for="lastname" className="form-label">facebook Id </label>
                                                            <input className="form-control" type="text"
                                                                placeholder='Enter facebook id  ..'
                                                            // value={skuname} onChange={(e) => { setSkuName(e.target.value) }}
                                                            />
                                                        </div>


                                                        <div className="mb-3 col-md-3">
                                                            <label for="lastname" className="form-label">Date of Birth </label>
                                                            <input className="form-control" type="date"
                                                                placeholder='Enter Date of birth  ..'
                                                            // value={skuname} onChange={(e) => { setSkuName(e.target.value) }}
                                                            />
                                                        </div>



                                                        <div className="mb-3 col-md-3">
                                                            <label for="lastname" className="form-label">address </label>
                                                            <input className="form-control" type="text"
                                                                placeholder='Enter adress  ..'
                                                            // value={skuname} onChange={(e) => { setSkuName(e.target.value) }}
                                                            />
                                                        </div>







                                                        <div className="mb-3 col-md-3">
                                                            <label for="brand" className="form-label">Customer type </label>
                                                            <select id="brand" className="select2 form-select"
                                                            //   onChange={BrandHandelChange}
                                                            >
                                                                <option value="">Select</option>
                                                                <option value="vender">vender </option>
                                                                <option value="vip">Vip </option>
                                                                <option value="Regular">Regular </option>
                                                            </select>
                                                        </div>
                                                        <div className="mb-3 col-md-3">
                                                            <label for="category" className="form-label">Gender</label>
                                                            <select id="category" className="select2 form-select"
                                                            //    onChange={CategoryHandelChange}
                                                            >
                                                                <option value="">Select</option>
                                                                <option value="male">male</option>
                                                                <option value="female">female</option>
                                                                <option value="others">others</option>
                                                            </select>
                                                        </div>
                                                        <div className="mb-3 col-md-3">
                                                            <label for="subcategory" className="form-label">Status </label>
                                                            <select id="subcategory" className="select2 form-select"
                                                            //   onChange={subcategoryHandel}
                                                            >
                                                                <option value="">Select</option>
                                                                <option value="Sub Category-A">Active </option>
                                                                <option value="Sub Category-B">InAcive </option>

                                                            </select>
                                                        </div>

                                                    </div>
                                                    <div className="mt-2">
                                                        <button type="submit" className="btn btn-primary me-2 "
                                                        //  onClick={Add_product_bussiness}
                                                        >ADD Customer</button>
                                                        <button type="submit" className="btn btn-primary me-2 "
                                                        //  onClick={Add_product_bussiness}
                                                        >Reset</button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- /Account --> */}
                                        </div>

                                    </div>
                                </div>
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

export default AddCustomer
