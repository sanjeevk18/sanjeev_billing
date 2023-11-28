import React from 'react'
import Bussiness_Sidebar from './Bussiness_Sidebar'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
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
              <div className="row">
                {/* <!-- Total Revenue --> */}
                <div className="col-lg-12 col-md-4 order-0">
                  <div className="row">
                    <div className="col-lg-3 col-md-12 col-6 mb-4">
                      <div className="card">
                        <div className="card-body">
                         <span className="fw-medium d-block mb-1">TOTAL SALES</span>
                          <h3 className="card-title mb-2">12</h3>
                          <small className="text-success fw-medium"><i className="bx bx-up-arrow-alt"></i> +72.80%</small>
                        </div>
                      </div>
                    </div>
					<div className="col-lg-3 col-md-12 col-6 mb-4">
                      <div className="card">
                        <div className="card-body">
                         <span className="fw-medium d-block mb-1">NET </span>
                          <h3 className="card-title mb-2">12</h3>
                          <small className="text-success fw-medium"><i className="bx bx-up-arrow-alt"></i> +72.80%</small>
                        </div>
                      </div>
                    </div>
					<div className="col-lg-3 col-md-12 col-6 mb-4">
                      <div className="card">
                        <div className="card-body">
                         <span className="fw-medium d-block mb-1">INVOICE DUE</span>
                          <h3 className="card-title mb-2">12</h3>
                          <small className="text-success fw-medium"><i className="bx bx-up-arrow-alt"></i> +72.80%</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-6 mb-4">
                      <div className="card">
                        <div className="card-body">
                         <span className="fw-medium d-block mb-1">TOTAL SELL RETURN</span>
                          <h3 className="card-title mb-2">12</h3>
                          <small className="text-success fw-medium"><i className="bx bx-up-arrow-alt"></i> +72.80%</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
				{/* <!-- Total Revenue --> */}
                <div className="col-lg-12 col-md-4 order-0">
                  <div className="row">
                    <div className="col-lg-3 col-md-12 col-6 mb-4">
                      <div className="card">
                        <div className="card-body">
                         <span className="fw-medium d-block mb-1">TOTAL PURCHASE</span>
                          <h3 className="card-title mb-2">12</h3>
                          <small className="text-success fw-medium"><i className="bx bx-up-arrow-alt"></i> +72.80%</small>
                        </div>
                      </div>
                    </div>
					<div className="col-lg-3 col-md-12 col-6 mb-4">
                      <div className="card">
                        <div className="card-body">
                         <span className="fw-medium d-block mb-1">PUR. DUE </span>
                          <h3 className="card-title mb-2">12</h3>
                          <small className="text-success fw-medium"><i className="bx bx-up-arrow-alt"></i> +72.80%</small>
                        </div>
                      </div>
                    </div>
					<div className="col-lg-3 col-md-12 col-6 mb-4">
                      <div className="card">
                        <div className="card-body">
                         <span className="fw-medium d-block mb-1">TOTAL PUR. RETURN</span>
                          <h3 className="card-title mb-2">12</h3>
                          <small className="text-success fw-medium"><i className="bx bx-up-arrow-alt"></i> +72.80%</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-6 mb-4">
                      <div className="card">
                        <div className="card-body">
                         <span className="fw-medium d-block mb-1">EXPENSE</span>
                          <h3 className="card-title mb-2">12</h3>
                          <small className="text-success fw-medium"><i className="bx bx-up-arrow-alt"></i> +72.80%</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* <!-- Order Statistics --> */}
                <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
                  <div className="card h-100">
                    <div className="card-header d-flex align-items-center justify-content-between pb-0">
                      <div className="card-title mb-0">
                        <h5 className="m-0 me-2">Order Statistics</h5>
                        <small className="text-muted">42.82k Total Sales</small>
                      </div>
                      <div className="dropdown">
                        <button
                          className="btn p-0"
                          type="button"
                          id="orederStatistics"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false">
                          <i className="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics">
                          <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                          <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                          <a className="dropdown-item" href="javascript:void(0);">Share</a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex flex-column align-items-center gap-1">
                          <h2 className="mb-2">8,258</h2>
                          <span>Total Orders</span>
                        </div>
                        <div id="orderStatisticsChart"></div>
                      </div>
                      <ul className="p-0 m-0">
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-primary"
                              ><i className="bx bx-mobile-alt"></i
                            ></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Electronic</h6>
                              <small className="text-muted">Mobile, Earbuds, TV</small>
                            </div>
                            <div className="user-progress">
                              <small className="fw-medium">82.5k</small>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-success"><i className="bx bx-closet"></i></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Fashion</h6>
                              <small className="text-muted">T-shirt, Jeans, Shoes</small>
                            </div>
                            <div className="user-progress">
                              <small className="fw-medium">23.8k</small>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt"></i></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Decor</h6>
                              <small className="text-muted">Fine Art, Dining</small>
                            </div>
                            <div className="user-progress">
                              <small className="fw-medium">849k</small>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex">
                          <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-secondary"
                              ><i className="bx bx-football"></i
                            ></span>
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Sports</h6>
                              <small className="text-muted">Football, Cricket Kit</small>
                            </div>
                            <div className="user-progress">
                              <small className="fw-medium">99</small>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!--/ Order Statistics --> */}
{/* 
                <!-- Expense Overview --> */}
                <div className="col-md-6 col-lg-4 order-1 mb-4">
                  <div className="card h-100">
                    <div className="card-header">
                      <ul className="nav nav-pills" role="tablist">
                        <li className="nav-item">
                          <button
                            type="button"
                            className="nav-link active"
                            role="tab"
                            data-bs-toggle="tab"
                            data-bs-target="#navs-tabs-line-card-income"
                            aria-controls="navs-tabs-line-card-income"
                            aria-selected="true">
                            Income
                          </button>
                        </li>
                        <li className="nav-item">
                          <button type="button" className="nav-link" role="tab">Expenses</button>
                        </li>
                        <li className="nav-item">
                          <button type="button" className="nav-link" role="tab">Profit</button>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body px-0">
                      <div className="tab-content p-0">
                        <div className="tab-pane fade show active" id="navs-tabs-line-card-income" role="tabpanel">
                          <div className="d-flex p-4 pt-3">
                            <div className="avatar flex-shrink-0 me-3">
                              <img src="../assets/img/icons/unicons/wallet.png" alt="User" />
                            </div>
                            <div>
                              <small className="text-muted d-block">Total Balance</small>
                              <div className="d-flex align-items-center">
                                <h6 className="mb-0 me-1">$459.10</h6>
                                <small className="text-success fw-medium">
                                  <i className="bx bx-chevron-up"></i>
                                  42.9%
                                </small>
                              </div>
                            </div>
                          </div>
                          <div id="incomeChart"></div>
                          <div className="d-flex justify-content-center pt-4 gap-2">
                            <div className="flex-shrink-0">
                              <div id="expensesOfWeek"></div>
                            </div>
                            <div>
                              <p className="mb-n1 mt-1">Expenses This Week</p>
                              <small className="text-muted">$39 less than last week</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--/ Expense Overview --> */}

                {/* <!-- Transactions --> */}
                <div className="col-md-6 col-lg-4 order-2 mb-4">
                  <div className="card h-100">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="card-title m-0 me-2">Transactions</h5>
                      <div className="dropdown">
                        <button
                          className="btn p-0"
                          type="button"
                          id="transactionID"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false">
                          <i className="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="transactionID">
                          <a className="dropdown-item" href="javascript:void(0);">Last 28 Days</a>
                          <a className="dropdown-item" href="javascript:void(0);">Last Month</a>
                          <a className="dropdown-item" href="javascript:void(0);">Last Year</a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <ul className="p-0 m-0">
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <img src="../assets/img/icons/unicons/paypal.png" alt="User" className="rounded" />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <small className="text-muted d-block mb-1">Paypal</small>
                              <h6 className="mb-0">Send money</h6>
                            </div>
                            <div className="user-progress d-flex align-items-center gap-1">
                              <h6 className="mb-0">+82.6</h6>
                              <span className="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <img src="../assets/img/icons/unicons/wallet.png" alt="User" className="rounded" />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <small className="text-muted d-block mb-1">Wallet</small>
                              <h6 className="mb-0">Mac'D</h6>
                            </div>
                            <div className="user-progress d-flex align-items-center gap-1">
                              <h6 className="mb-0">+270.69</h6>
                              <span className="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <img src="../assets/img/icons/unicons/chart.png" alt="User" className="rounded" />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <small className="text-muted d-block mb-1">Transfer</small>
                              <h6 className="mb-0">Refund</h6>
                            </div>
                            <div className="user-progress d-flex align-items-center gap-1">
                              <h6 className="mb-0">+637.91</h6>
                              <span className="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <img src="../assets/img/icons/unicons/cc-success.png" alt="User" className="rounded" />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <small className="text-muted d-block mb-1">Credit Card</small>
                              <h6 className="mb-0">Ordered Food</h6>
                            </div>
                            <div className="user-progress d-flex align-items-center gap-1">
                              <h6 className="mb-0">-838.71</h6>
                              <span className="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                            <img src="../assets/img/icons/unicons/wallet.png" alt="User" className="rounded" />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <small className="text-muted d-block mb-1">Wallet</small>
                              <h6 className="mb-0">Starbucks</h6>
                            </div>
                            <div className="user-progress d-flex align-items-center gap-1">
                              <h6 className="mb-0">+203.33</h6>
                              <span className="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex">
                          <div className="avatar flex-shrink-0 me-3">
                            <img src="../assets/img/icons/unicons/cc-warning.png" alt="User" className="rounded" />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <small className="text-muted d-block mb-1">Mastercard</small>
                              <h6 className="mb-0">Ordered Food</h6>
                            </div>
                            <div className="user-progress d-flex align-items-center gap-1">
                              <h6 className="mb-0">-92.45</h6>
                              <span className="text-muted">USD</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!--/ Transactions --> */}
              </div>
            </div>
            {/* <!-- / Content --> */}

            

            <div className="content-backdrop fade"></div>
          </div>
        {/* //   <!-- Content wrapper --> */}
        </div>
        {/* <!-- / Layout page --> */}
      </div>

      {/* <!-- Overlay --> */}
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
    </div>
    </>
  )
}

export default Home
