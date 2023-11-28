import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate("/")
    }
  }, [])

  const bussiness_login = async () => {
    let result = await fetch("http://localhost:8000/bussiness-login", {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.warn(result)
    if (result.auth) {
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('token', JSON.stringify(result.auth));
      navigate("/home")
    } else {
      alert("Please enter connect details")
    }
    // navigate("/")
  }
  return (
    <>
      <div>
        <div className="container-xxl">
          <div className="authentication-wrapper authentication-basic container-p-y">
            <div className="authentication-inner">
              {/* <!-- Register --> */}
              <div className="card">
                <div className="card-body">
                  <div >
                    <div className="mb-3">
                      <label for="email" className="form-label">Email or Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email-username"
                        placeholder="Enter your email or username"
                        autofocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3 form-password-toggle">
                      <div className="d-flex justify-content-between">
                        <label className="form-label" for="password">Password</label>
                        {/* </a> */}
                      </div>
                      <div className="input-group input-group-merge">
                        <input
                          type="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}

                          className="form-control"
                          name="password"
                          placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                          aria-describedby="password" />
                        <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="remember-me" />
                        <label className="form-check-label" for="remember-me"> Remember Me </label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-primary d-grid w-100" type="submit" onClick={bussiness_login}>Login </button>
                    </div>
                    {/* </form> */}
                  </div>
                </div>
                <p className="text-center">
                  <span>New on our platform?</span>
                  <Link to="/registaion">
                    <span>Create an account</span>
                  </Link>
                  <Link to="/forget-password">
                    <button className="btn btn-primary">Forget password</button>
                  </Link>
                </p>
                {/* <!-- /Register --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
