import React from "react";
import Bussiness_Sidebar from "../Bussiness_Sidebar";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import "../Customers/Customer.css"
import CloseIcon from '@mui/icons-material/Close';
const CustomerGrup = () => {
  const [open, setOpen] = React.useState(false);
  const handelclickopendialog = () => {
    setOpen(true);
  };
  const handleToClose = () => {
    setOpen(false);
  };
  const AddHandel =()=>[
    setOpen(false)
  ]
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* <!-- Menu --> */}

          <aside
            id="layout-menu"
            className="layout-menu menu-vertical menu bg-menu-theme"
          >
            <div className="menu-inner-shadow"></div>

            <Bussiness_Sidebar/>
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
                <div className="">
                  <button
                    className="btn btn-primary  w-10 btn_group"
                    onClick={handelclickopendialog}
                  >
                    Add New Group{" "}
                  </button>
                  <button className="btn btn-primary  w-10 btn_group">
                    Pdf
                  </button>
                  <button className="btn btn-primary  w-10 btn_group">
                    Excel
                  </button>
                </div>

                {/* dialog part  */}

                <Dialog open={open} onClose={handleToClose}>
                  <DialogTitle>Update Customer  <CloseIcon className='dailogbtnclose' onClick={handleToClose} /> </DialogTitle>
                  <DialogContent className="ss">
                    <DialogContentText>
                      <div className="row">
                        <hr />
                        <div className="mb-3 col-md-6">
                          <label for="productName" className="form-label">
                            Customer Name:
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter Customer  Name.."
                            id="productName"
                            name="First Name"
                            // value={productName} onChange={(e) => { setProductName(e.target.value) }}
                            autofocus
                          />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label for="productName" className="form-label">
                            CID:
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter CID Name.."
                            id="productName"
                            name="First Name"
                            // value={productName} onChange={(e) => { setProductName(e.target.value) }}
                            autofocus
                          />
                        </div>

                        <div className="mb-3 col-md-6">
                          <label for="productName" className="form-label">
                            Price :
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter price Name.."
                            id="productName"
                            name="First Name"
                            // value={productName} onChange={(e) => { setProductName(e.target.value) }}
                            autofocus
                          />
                        </div>

                        <div className="mb-3 col-md-6">
                          <label for="productName" className="form-label">
                            description:
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter Description Name.."
                            id="productName"
                            name="First Name"
                            // value={productName} onChange={(e) => { setProductName(e.target.value) }}
                            autofocus
                          />
                        </div>
                      </div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <button type="submit" className="btn btn-primary me-2 " onClick={AddHandel}>
                      Add
                    </button>
                    <button type="cancel" className="btn btn-primary me-2 " onClick={handleToClose}>
                      Cancel
                    </button>
                  </DialogActions>
                </Dialog>
                {/* <!-- Striped Rows --> */}
                <div className="card">
                  <h1 className="headindclass"> Customer Group</h1>
                  <div className="table-responsive text-nowrap">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>No.</th>

                          <th>Customer name </th>
                          <th>CID</th>
                          <th>Price</th>
                          <th>Description</th>
                          <th>Date</th>

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
  );
};

export default CustomerGrup;
