import React from 'react'
import Bussiness_Sidebar from '../Bussiness_Sidebar'
import Navbar from '../Navbar'
import "../Products/Product.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CreateIcon from '@mui/icons-material/Create';
const Variation = () => {
    return (
        <div>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    {/* <!-- Menu --> */}

                    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                        <div className="menu-inner-shadow"></div>

                        <Bussiness_Sidebar/>
                    </aside>
                    {/* <!-- / Menu --> */}

                    {/* <!-- Layout container --> */}
                    <div className="layout-page">
                        {/* <!-- Navbar --> */}

                        <Navbar/>

                        {/* <!-- / Navbar --> */}

                        {/* <!-- Content wrapper --> */}
                        <div className="content-wrapper">
                            {/* <!-- Content --> */}

                            <div className="container-xxl flex-grow-1 container-p-y">
                                <button className="btn btn-primary  w-10 btn_group">Add</button>
                                <button className="btn btn-primary  w-10 btn_group">Pdf</button>
                                <button className="btn btn-primary  w-10 btn_group">Excel</button>
                                {/* <!-- Striped Rows --> */}
                                <div className="card">
                                    <div className="table-responsive text-nowrap">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>Variation</th>
                                                    <th>Variation Valus</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="table-border-bottom-0">
                                                <tr>
                                                    <td>
                                                        <i className="fab fa-angular fa-lg text-danger me-3"></i>
                                                        <span className="fw-medium">1</span>
                                                    </td>
                                                    <td>
                                                        <i className="fab fa-angular fa-lg text-danger me-3"></i>
                                                        <span className="fw-medium">Angular Project</span>
                                                    </td>
                                                    <td>Albert Cook</td>
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
                                                <tr>
                                                    <td>
                                                        <i className="fab fa-angular fa-lg text-danger me-3"></i>
                                                        <span className="fw-medium">2</span>
                                                    </td>
                                                    <td>
                                                        <i className="fab fa-react fa-lg text-info me-3"></i> <span className="fw-medium">React Project</span>
                                                    </td>
                                                    <td>Barry Hunter</td>
                                                    <td>
                                                        {/* <div classNameName="dropdown">
                                                            <button type="button" classNameName="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                                <MoreVertIcon />
                                                            </button>
                                                            <div classNameName="dropdown-menu">
                                                                <a classNameName="dropdown-item" href="javascript:void(0);">
                                                                    <i classNameName="bx bx-edit-alt me-1"></i> Edit</a>
                                                                <a classNameName="dropdown-item" href="javascript:void(0);">
                                                                    <i classNameName="bx bx-edit-alt me-1"></i> Print</a>
                                                                <a classNameName="dropdown-item" href="javascript:void(0);">
                                                                    <i classNameName="bx bx-edit-alt me-1"></i> Cancel</a>
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
        </div>
    )
}

export default Variation
