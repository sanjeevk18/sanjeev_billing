import React from 'react'
import { Link } from 'react-router-dom'

const Forgetpas = () => {
  return (
    <div>
      <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner py-4">
          {/* <!-- Forgot Password --> */}
          <div className="card">
            <div className="card-body">
              <div >
                <div className="mb-3">
                  <label for="email" className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    autofocus />
                </div>
                <button className="btn btn-primary d-grid w-100">Send Reset Link</button>
              </div>
              <div className="text-center">
                <Link to={"/"} className="d-flex align-items-center justify-content-center">
                  <i className="bx bx-chevron-left scaleX-n1-rtl bx-sm"></i>
                  Back to login
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- /Forgot Password --> */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Forgetpas
