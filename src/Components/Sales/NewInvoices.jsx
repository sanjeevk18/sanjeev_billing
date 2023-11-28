import React from 'react'
import Bussiness_Sidebar from '../Bussiness_Sidebar'
import Navbar from '../Navbar'

const NewInvoices = () => {
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
                                            <h1 className='headindclass'> Add new Invoice</h1>
                                            <hr className="my-0" />
                                            <div className="card-body">
                                                {/* form start */}
                                                <div >
                                                    <div className="row">
                                                        <div className="mb-3 col-md-3">
                                                            <label for="productName" className="form-label">Item Code</label>
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
                                                            <label for="lastname" className="form-label">Item name </label>
                                                            <input className="form-control" type="text"
                                                                placeholder='Enter Last name ..'
                                                            // value={skuname} onChange={(e) => { setSkuName(e.target.value) }}
                                                            />
                                                        </div>


                                                        <div className="mb-3 col-md-3">
                                                            <label for="lastname" className="form-label">Quantity</label>
                                                            <input className="form-control" type="number"
                                                                placeholder='Enter Last name ..'
                                                            // value={skuname} onChange={(e) => { setSkuName(e.target.value) }}
                                                            />
                                                        </div>

                                                        <div className="mb-3 col-md-3">
                                                            <label for="lastname" className="form-label">Price</label>
                                                            <input className="form-control" type="number"
                                                                placeholder='Enter Bank details ..'
                                                            // value={skuname} onChange={(e) => { setSkuName(e.target.value) }}
                                                            />
                                                        </div>

                                                        <div className="mb-3 col-md-3">
                                                            <label for="subcategory" className="form-label">Tax </label>
                                                            <select id="subcategory" className="select2 form-select"
                                                            //   onChange={subcategoryHandel}
                                                            >
                                                                <option value="">Select</option>
                                                                <option value="Sub Category-A">Yes </option>
                                                                <option value="Sub Category-B">No </option>

                                                            </select>
                                                        </div>

                                                        <div className="mb-3 col-md-3">
                                                            <label for="lastname" className="form-label">Discount </label>
                                                            <input className="form-control" type="number"
                                                                placeholder='Enter facebook id  ..'
                                                            // value={skuname} onChange={(e) => { setSkuName(e.target.value) }}
                                                            />
                                                        </div>


                                                        <div className="mb-3 col-md-3">
                                                            <label for="lastname" className="form-label">Total</label>
                                                            <input className="form-control" type="number"
                                                                placeholder='Enter Date of birth  ..'
                                                            // value={skuname} onChange={(e) => { setSkuName(e.target.value) }}
                                                            />
                                                        </div>



                                                        







                                                        
                                                        

                                                    </div>
                                                    <div className="mt-2">
                                                        <button type="submit" className="btn btn-primary me-2 "
                                                        //  onClick={Add_product_bussiness}
                                                        >ADD Invoices</button>
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

export default NewInvoices