import React, { useEffect, useState } from "react";
import Bussiness_Sidebar from "../Bussiness_Sidebar";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CreateIcon from "@mui/icons-material/Create";
const User = () => {
  const [usermanagementdetail, setUserManagementDetail] = useState([]);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    let result = await fetch("http://localhost:8000/user-get-detail", {
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
    result = await result.json();
    setUserManagementDetail(result);
    // setItems(opdDetails.item)
  };
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
                <div className="">
                  <Link to={"/addnewuser"}>
                    {" "}
                    <button
                      className="btn btn-primary  w-10 btn_group"
                      // onClick={handelclickopendialog}
                    >
                      Add New User{" "}
                    </button>{" "}
                  </Link>
                  <button className="btn btn-primary  w-10 btn_group">
                    Pdf
                  </button>
                  <button className="btn btn-primary  w-10 btn_group">
                    Excel
                  </button>
                </div>

                {/* dialog part  */}

                {/* <!-- Striped Rows --> */}
                <div className="card">
                  <h1 className="headindclass">All User </h1>
                  <div className="table-responsive text-nowrap">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>No.</th>

                          <th>Username </th>
                          <th>Name </th>

                          <th>Role </th>
                          <th>Email</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody className="table-border-bottom-0">
                        {usermanagementdetail.length > 0 ? (
                          usermanagementdetail.map((item, index) => (
                            <tr key={item._id}>
                              <td>{index + 1}</td>
                              <td>{item.username}</td>
                              <td>{item.userfirst}</td>
                              <td>{item.UserTaxPay}</td>
                              <td>{item.UserBankIdentifi}</td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    type="button"
                                    className="btn p-0 dropdown-toggle hide-arrow"
                                    data-bs-toggle="dropdown"
                                  >
                                    <MoreVertIcon />
                                  </button>
                                  <div className="dropdown-content">
                                    {/* <Link to={"/nbn"} <CreateIcon className='editpencil' />Edit </Link> */}

                                    <Link to={"/addnewUpdate/" + item._id}>
                                      <CreateIcon className="editpencil" />
                                      Edit
                                    </Link>
                                    <a href="#">
                                      {" "}
                                      <CreateIcon className="editpencil" />
                                      Print{" "}
                                    </a>
                                    <a href="#">
                                      {" "}
                                      <CreateIcon className="editpencil" />
                                      Cancel
                                    </a>
                                  </div>
                                </div>

                                {/* <div className="mt-4">
                                  <Link to={"/update/" + item._id} > <button className="btn btn-primary me-2"  > Update</button> </Link>
                                </div> */}
                              </td>
                            </tr>
                          ))
                        ) : (
                          <h1>No Result Found</h1>
                        )}
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

export default User;
