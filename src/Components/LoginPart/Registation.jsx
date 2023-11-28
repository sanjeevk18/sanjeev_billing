import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../LoginPart/Login.css"
const Registation = () => {
  const [name, setName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();


  const Bussiness_Registation = async () => {
    if (!name) {
      setFirstNameError(true);
    }
    if (!email) {
      setEmailError(true);
    }
    if (!password) {
      setPasswordError(true);
    }
    if (
      !name || !email || !password

    ) {
      return;
    }

    let result = await fetch("http://localhost:8000/bussiness-register", {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));

    navigate('/')

  }
  return (
    <div>
      <div className="container-xxl">
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner">

            <div className="card">
              <div className="card-body">
                <div >
                  <div className="mb-3">
                    <label for="username" className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Enter your username"

                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autofocus />
                    {firstNameError && (
                      <span className="login_vlidation">UserName is Required</span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email" name="email" value={email}
                      onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                    {emailError && (
                      <span className="login_vlidation">Email is Required</span>
                    )}
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <label className="form-label" for="password">Password</label>
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password" />

                      {/* <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span> */}

                    </div>
                    {passwordError && (
                      <span className="login_vlidation">Password is Required</span>
                    )}
                  </div>

                  <div className="mb-3">
                    <div className="form-check">
                      {/* <input className="form-check-input" type="checkbox" id="terms-conditions" name="terms" /> */}
                      {/* <label className="form-check-label" for="terms-conditions">
                      I agree to
                      <a href="javascript:void(0);">privacy policy & terms</a>
                    </label> */}
                    </div>
                  </div>
                  <button className="btn btn-primary d-grid w-100" onClick={Bussiness_Registation}>Sign up</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Registation
