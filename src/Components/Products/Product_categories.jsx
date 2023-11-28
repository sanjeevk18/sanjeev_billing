import React from 'react'
import Bussiness_Sidebar from '../Bussiness_Sidebar'
import Navbar from '../Navbar'
import "../Products/Product.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CreateIcon from '@mui/icons-material/Create';
const Product_categories = () => {
    return (
        <div>
            <div class="layout-wrapper layout-content-navbar">
                <div class="layout-container">
                    {/* <!-- Menu --> */}

                    <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
                        <div class="menu-inner-shadow"></div>

                        <Bussiness_Sidebar />
                    </aside>
                    {/* <!-- / Menu --> */}

                    {/* <!-- Layout container --> */}
                    <div class="layout-page">
                        {/* <!-- Navbar --> */}

                        <Navbar />

                        {/* <!-- / Navbar --> */}

                        {/* <!-- Content wrapper --> */}
                        <div class="content-wrapper">
                            {/* <!-- Content --> */}

                            <div class="container-xxl flex-grow-1 container-p-y">
                                <button class="btn btn-primary  w-10 btn_group">Add</button>
                                <button class="btn btn-primary  w-10 btn_group">Pdf</button>
                                <button class="btn btn-primary  w-10 btn_group">Excel</button>
                                {/* <!-- Striped Rows --> */}
                                <div class="card">
                                    <div class="table-responsive text-nowrap">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>Category</th>
                                                    <th>Category Code</th>
                                                    <th>Description</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody class="table-border-bottom-0">
                                                <tr>
                                                    <td>
                                                        <i class="fab fa-angular fa-lg text-danger me-3"></i>
                                                        <span class="fw-medium">1</span>
                                                    </td>
                                                    <td>
                                                        <i class="fab fa-angular fa-lg text-danger me-3"></i>
                                                        <span class="fw-medium">Angular Project</span>
                                                    </td>
                                                    <td>Albert Cook</td>
                                                    <td>LKG</td>
                                                    <td>
                                                        {/* <div class="dropdown">
                                                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                                <i class="bx bx-dots-vertical-rounded"></i>
                                                            </button>
                                                            <div class="dropdown-menu">
                                                                <a class="dropdown-item" href="javascript:void(0);">
                                                                    <i class="bx bx-edit-alt me-1"></i> Edit</a>
                                                                <a class="dropdown-item" href="javascript:void(0);">
                                                                    <i class="bx bx-edit-alt me-1"></i> Print</a>
                                                                <a class="dropdown-item" href="javascript:void(0);">
                                                                    <i class="bx bx-edit-alt me-1"></i> Cancel</a>
                                                            </div>
                                                        </div> */}


                                                        <div className="dropdown">
                                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                                <MoreVertIcon />
                                                            </button>
                                                            <div className="dropdown-content">
                                                                <a href="#"> <CreateIcon className='editpencil' />Edit</a>
                                                                <a href="#"> <CreateIcon className='editpencil' />Print </a>
                                                                <a href="#" > <CreateIcon className='editpencil' />Cancel</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <i class="fab fa-angular fa-lg text-danger me-3"></i>
                                                        <span class="fw-medium">2</span>
                                                    </td>
                                                    <td>
                                                        <i class="fab fa-react fa-lg text-info me-3"></i> <span class="fw-medium">React Project</span>
                                                    </td>
                                                    <td>Barry Hunter</td>
                                                    <td>LKG</td>
                                                    <td>
                                                    <div className="dropdown">
                                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                                <MoreVertIcon />
                                                            </button>
                                                            <div className="dropdown-content">
                                                                <a href="#"> <CreateIcon className='editpencil' />Edit</a>
                                                                <a href="#"> <CreateIcon className='editpencil' />Print </a>
                                                                <a href="#" > <CreateIcon className='editpencil' />Cancel</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* <!--/ Striped Rows --> */}

                            </div>
                            {/* <!-- / Content --> */}



                            <div class="content-backdrop fade"></div>
                        </div>
                        {/* <!-- Content wrapper --> */}
                    </div>
                    {/* <!-- / Layout page --> */}
                </div>

                {/* <!-- Overlay --> */}
                <div class="layout-overlay layout-menu-toggle"></div>
            </div>
        </div>
    )
}

export default Product_categories
