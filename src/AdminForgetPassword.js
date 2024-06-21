import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminForgetPassword() {
  return (
      <div>
          <main>
              <div className="container">
                  <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                      <div className="container">
                          <div className="row justify-content-center">
                              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                  <div className="d-flex align-items-center justify-content-between">
                                      <div className="logo d-flex align-items-center">
                                          <img src="assets/img/logo1.png" alt />
                                          <span className="d-none d-lg-block">Online Shoping</span>
                                      </div>
                                      <i className="bi bi-list toggle-sidebar-btn" />
                                  </div>{/* End Logo */}
                                  <div className="card mb-3">
                                      <div className="card-body">
                                          <div className="pt-4 pb-2">
                                              <h5 className="card-title text-center pb-0 fs-4">Forgot Password? 🔒</h5>
                                              <p className="text-center small">Enter your email and we'll send you instructions to reset your password</p>
                                          </div>
                                          <form className="row g-3 needs-validation" noValidate>
                                              <div className="col-12">
                                                  <label htmlFor="yourUsername" className="form-label">Email</label>
                                                  <div className="input-group has-validation">
                                                      <input type="text" name="username" className="form-control" id="yourUsername" required />
                                                      <div className="invalid-feedback">Please enter your Email</div>
                                                  </div>
                                              </div>
                                              <div className="col-12">
                                                  <button className="btn btn-primary w-100" type="submit">Recover Account</button>
                                              </div>
                                              <div className="col-12">
                                                  <p className="small mb-0">Don't have account? <Link to="/admin-login">Back to login</Link></p>
                                              </div>
                                          </form>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
              </div>
          </main>{/* End #main */}
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
      </div>

  )
}
