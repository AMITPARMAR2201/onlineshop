import React from 'react'

export default function AdminLogin() {
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
                                              <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                              <p className="text-center small">Enter your Email &amp; Password to login</p>
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
                                                  <label htmlFor="yourPassword" className="form-label">Password</label>
                                                  <input type="password" name="password" className="form-control" id="yourPassword" required />
                                                  <div className="invalid-feedback">Please enter your password!</div>
                                              </div>
                                              <div className="col-12">
                                                  <button className="btn btn-primary w-100" type="submit">Login</button>
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
