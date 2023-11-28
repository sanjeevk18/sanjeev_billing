import React from "react";
import Bussiness_Sidebar from "../Bussiness_Sidebar";
import Navbar from "../Navbar";

const AddNewRole = () => {
  return (
    <>
      <div>
        <div>
          <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
              <Bussiness_Sidebar />

              <div className="layout-page">
                <Navbar />
                <div className="content-wrapper">
                  <div className="container-xxl flex-grow-1 container-p-y">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card mb-4">
                          <h5 className="card-header">Add Role</h5>
                          <div className="card-body"></div>
                          <hr className="my-0" />
                          <div className="card-body">
                            <div>
                              <div className="row">
                                <div className="mb-3 col-md-6">
                                  <label for="title" className="form-label">
                                    Role Name
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="patientfirstName"
                                    // value={title}
                                    // onChange={(e) => {
                                    //   setTitle(e.target.value);
                                    // }}
                                    placeholder="Enter Role  here.."
                                    autofocus
                                  />
                                </div>
                                {/* <div className="mb-3 col-md-4">
                                  <label
                                    for="patientfirstName"
                                    className="form-label"
                                  >
                                    First Name
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="patientfirstName"
                                    // value={userfirst}
                                    // onChange={(e) => {
                                    //   setUserFirst(e.target.value);
                                    // }}
                                    placeholder="First name here.."
                                    autofocus
                                  />
                                </div>
                                <div className="mb-3 col-md-4">
                                  <label
                                    for="patientlastName"
                                    className="form-label"
                                  >
                                    Last Name
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="patientlastName"
                                    placeholder="Last name here.."
                                    // value={Userlast}
                                    // onChange={(e) => {
                                    //   setUserLast(e.target.value);
                                    // }}
                                  />
                                </div>
                                <div className="mb-3 col-md-4">
                                  <label
                                    for="patientlastName"
                                    className="form-label"
                                  >
                                    Email :
                                  </label>
                                  <input
                                    className="form-control"
                                    type="email"
                                    name="patientlastName"
                                    placeholder="Enter your Email here.."
                                    // value={UserEmail}
                                    // onChange={(e) => {
                                    //   setUserEmail(e.target.value);
                                    // }}
                                  />
                                </div> */}
                                <hr />

                                <div className=" mb-4">
                                  <h5 className="card-header">Permission</h5>
                                  <div className="card-body"></div>
                                  <hr className="my-0" />
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="mb-3 col-md-4">

                                      <h5> hgh</h5>
                                        {/* <label
                                          for="country"
                                          className="form-label"
                                        >
                                          Username
                                        </label>

                                        <input
                                          className="form-control"
                                          type="checkbox"
                                          name="patientfirstName"
                                        //   value={username}
                                        //   onChange={(e) => {
                                        //     setUsername(e.target.value);
                                        //   }}
                                          placeholder="Enter your Username.."
                                          autofocus
                                        /> */}

                                        <input
                                          type="checkbox"
                                          id="vehicle1"
                                          name="vehicle1"
                                          value="Bike"
                                        />
                                        <label for="vehicle1">
                                          {" "}
                                          I have a bike
                                        </label>
                                      </div>
                                      <div className="mb-3 col-md-4">
                                        <label
                                          for="state"
                                          className="form-label"
                                        >
                                          Password
                                        </label>

                                        <input
                                          className="form-control"
                                          type="password"
                                          name="patientfirstName"
                                          //   value={Userpassword}
                                          //   onChange={(e) => {
                                          //     setUserPassword(e.target.value);
                                          //   }}
                                          placeholder="Enter your password .."
                                          autofocus
                                        />
                                      </div>
                                      <div className="mb-3 col-md-4">
                                        <label
                                          for="city"
                                          className="form-label"
                                        >
                                          C Password
                                        </label>

                                        <input
                                          className="form-control"
                                          type="text"
                                          name="patientfirstName"
                                          //   value={UsercPassword}
                                          //   onChange={(e) => {
                                          //     setUserCPassword(e.target.value);
                                          //   }}
                                          placeholder="Enteer your Confirm password  here.."
                                          autofocus
                                        />
                                      </div>
                                      <div className="mb-3 col-md-5">
                                        <label
                                          for="address"
                                          className="form-label"
                                        >
                                          Role{" "}
                                        </label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          name="address"
                                          placeholder="Enter your role"
                                          //   value={UserRole}
                                          //   onChange={(e) => {
                                          //     setUserRole(e.target.value);
                                          //   }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className=" mb-4">
                                  <h5 className="card-header">Sales </h5>
                                  <div className="card-body"></div>
                                  <hr className="my-0" />
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="mb-3 col-md-4">
                                        <label
                                          for="patientType"
                                          className="form-label"
                                        >
                                          Sales Commission Percentage (%):{" "}
                                        </label>

                                        <input
                                          className="form-control"
                                          type="text"
                                          name="patienttype"
                                          //   value={UserSalesCommision}
                                          //   onChange={(e) => {
                                          //     setUserSalesCommission(
                                          //       e.target.value
                                          //     );
                                          //   }}
                                          placeholder=" Enter Sales Comision here.."
                                          autofocus
                                        />
                                      </div>
                                      <div className="mb-3 col-md-4">
                                        <label
                                          for="consultant"
                                          className="form-label"
                                        >
                                          Max sales discount percent:{" "}
                                        </label>

                                        <input
                                          className="form-control"
                                          type="text"
                                          name="patientfirstName"
                                          //   value={UserMaxsalesDiscount} onChange={(e) => { setUserMaxSalesDiscount(e.target.value) }}
                                          placeholder="Max sales Discout  here.."
                                          autofocus
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className=" mb-4">
                                  <h5 className="card-header">
                                    More information
                                  </h5>
                                  <div className="card-body"></div>
                                  <hr className="my-0" />
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="mb-3 col-md-4">
                                        <label
                                          for="patientType"
                                          className="form-label"
                                        >
                                          Date of Birth:{" "}
                                        </label>

                                        <input
                                          className="form-control"
                                          type="text"
                                          name="patienttype"
                                          //   value={UserBirth} onChange={(e) => { setUserBirth(e.target.value) }}
                                          placeholder="First name here.."
                                          autofocus
                                        />
                                      </div>
                                      <div className="mb-3 col-md-4">
                                        <label
                                          for="state"
                                          className="form-label"
                                        >
                                          Gender
                                        </label>
                                        <select
                                          id="state"
                                          //   className="select2 form-select" onClick={userGender}
                                        >
                                          <option value="-1">Select</option>
                                          <option value="Male">Male</option>
                                          <option value="Female">Female</option>
                                        </select>
                                      </div>
                                      <div className="mb-3 col-md-4">
                                        <label
                                          for="state"
                                          className="form-label"
                                        >
                                          Marital Status{" "}
                                        </label>
                                        <select
                                          id="state"
                                          className="select2 form-select"
                                        >
                                          <option value="-1">Select</option>
                                          <option value="Married">
                                            Married
                                          </option>
                                          <option value="Unmarried">
                                            Unmarried
                                          </option>
                                          <option value="Divoce">Divoce</option>
                                        </select>
                                      </div>

                                      <div className="mb-3 col-md-4">
                                        <label
                                          for="consultant"
                                          className="form-label"
                                        >
                                          Blood group
                                        </label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          name="patientfirstName"
                                          //   value={UserBloodGroup} onChange={(e) => { setUserBloodGroup(e.target.value) }}
                                          placeholder="First name here.."
                                          autofocus
                                        />
                                      </div>
                                      <div className="mb-3 col-md-4">
                                        <label
                                          for="consultant"
                                          className="form-label"
                                        >
                                          Mobile number
                                        </label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          name="patientfirstName"
                                          //   value={UserNumber} onChange={(e) => { setUserNumber(e.target.value) }}
                                          placeholder="First name here.."
                                          autofocus
                                        />
                                      </div>

                                      <div className="mb-3 col-md-4">
                                        <label
                                          for="fees"
                                          className="form-label"
                                        >
                                          Family contact number{" "}
                                        </label>
                                        <input
                                          className="form-control"
                                          type="number"
                                          name="fees"
                                          //    value={UserFamilyNumber} onChange={(e) => { setUserFamilyNumber(e.target.value) }}
                                        />
                                      </div>
                                      <div className="mb-3 col-md-4">
                                        <label
                                          for="total"
                                          className="form-label"
                                        >
                                          Current adrress
                                        </label>
                                        <textarea />
                                      </div>
                                      <div className="mb-3 col-md-4">
                                        <label
                                          for="total"
                                          className="form-label"
                                        >
                                          Current adrress
                                        </label>

                                        <textarea />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className=" mb-4">
                                  <h5 className="card-header">Bank Details </h5>
                                  <div className="card-body"></div>
                                  <hr className="my-0" />
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="mb-3 col-md-4">
                                        <label
                                          for="patientType"
                                          className="form-label"
                                        >
                                          Account Holder's Name
                                        </label>

                                        <input
                                          className="form-control"
                                          type="text"
                                          name="patienttype"
                                          //   value={UserAccountHolder} onChange={(e) => { setUserAccountHolder(e.target.value) }}
                                          placeholder=" Account Holder name  here.."
                                          autofocus
                                        />
                                      </div>
                                      <div className="mb-3 col-md-4">
                                        <label
                                          for="consultant"
                                          className="form-label"
                                        >
                                          Account Number
                                        </label>

                                        <input
                                          className="form-control"
                                          type="text"
                                          name="patientfirstName"
                                          //   value={UserAccountNumber} onChange={(e) => { setUserAccountNumber(e.target.value) }}
                                          placeholder="Account Number  here.."
                                          autofocus
                                        />
                                      </div>
                                      <div className="mb-3 col-md-4">
                                        <label
                                          for="consultant"
                                          className="form-label"
                                        >
                                          Bank name
                                        </label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          name="patientfirstName"
                                          //   value={UserBankName} onChange={(e) => { setUserBankName(e.target.value) }}
                                          placeholder="Bank Name here.."
                                          autofocus
                                        />
                                      </div>

                                      <div className="mb-3 col-md-4">
                                        <label
                                          for="consultant"
                                          className="form-label"
                                        >
                                          Bank Identificate code
                                        </label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          name="patientfirstName"
                                          //   value={UserBankIdentifi} onChange={(e) => { setUserBankIdentifi(e.target.value) }}
                                          placeholder="Bank Identification code here.."
                                          autofocus
                                        />
                                      </div>
                                      <div className="mb-3 col-md-4">
                                        <label
                                          for="consultant"
                                          className="form-label"
                                        >
                                          Branch
                                        </label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          name="patientfirstName"
                                          //   value={UserBranch} onChange={(e) => { setUserBranch(e.target.value) }}
                                          placeholder="Branch Name here.."
                                          autofocus
                                        />
                                      </div>

                                      <div className="mb-3 col-md-4">
                                        <label
                                          for="fees"
                                          className="form-label"
                                        >
                                          Tax Payer ID:
                                        </label>
                                        <input
                                          className="form-control"
                                          type="number"
                                          name="fees"
                                          placeholder="Tax payer id"
                                          //    value={UserTaxPay} on/Change={(e) => { setUserTaxPay(e.target.value) }}
                                        />
                                      </div>
                                      {/* <div className="mb-3 col-md-2">
                                        <label
                                          for="discount"
                                          className="form-label"
                                        >
                                          Discount
                                        </label>
                                        <input
                                          className="form-control"
                                          type="Number"
                                          name="discount"
                                          //  value={feesdiscount} onChange={(e) => { setFeesDiscount(e.target.value) }}
                                        />
                                      </div>
                                      <div className="mb-3 col-md-2">
                                        <label
                                          for="total"
                                          className="form-label"
                                        >
                                          Total
                                        </label>
                                        <input
                                          className="form-control"
                                          type="Number"
                                          name="total"
                                          // value={totals} onChange={(e) => { setTotals(e.target.value) }}
                                        />
                                      </div>
                                      <div className="mb-3 col-md-3">
                                        <label
                                          for="receiptMode"
                                          className="form-label"
                                        >
                                          Receipt Mode
                                        </label>

                                        <input
                                          className="form-control"
                                          type="text"
                                          name="patientfirstName"
                                          // value={receiptmode} onChange={(e) => { setReceiptMode(e.target.value) }}
                                          placeholder="First name here.."
                                          autofocus
                                        />
                                      </div> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4">
                              <button
                                className="btn btn-primary me-2"
                                //  onClick={AddNewUserHandler}
                              >
                                Add User
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-backdrop fade"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewRole;
