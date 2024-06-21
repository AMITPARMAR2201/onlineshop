import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminHeader() {
  return (
      <header id="header" className="header fixed-top d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-between">
              <div className="logo d-flex align-items-center">
                  <img src="assets/img/logo1.png" alt />
                  <span className="d-none d-lg-block">Online Shoping</span>
              </div>
              <i className="bi bi-list toggle-sidebar-btn" />
          </div>{/* End Logo */}
          <nav className="header-nav ms-auto">
              <ul className="d-flex align-items-center">
                  <li className="nav-item dropdown pe-3">
                      <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                          <img src="assets/img/profile-logo1.jpeg" alt="Profile" className="rounded-circle" />
                          <span className="d-none d-md-block dropdown-toggle ps-2">Amit Parmar</span>
                      </a>
                      {/* End Profile Iamge Icon */}
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                          <li className="dropdown-header">
                              <h6>Amit Parmar</h6>
                              <span>Web Designer</span>
                          </li>
                          <li>
                              <hr className="dropdown-divider" />
                          </li>
                          <li>
                              <Link className="dropdown-item d-flex align-items-center" to="/admin-profile">
                                  <i className="bi bi-person" />
                                  <span>My Profile</span>
                              </Link>
                          </li>
                          <li>
                              <hr className="dropdown-divider" />
                          </li>
                          <li>
                              <hr className="dropdown-divider" />
                          </li>
                          <li>
                              <a className="dropdown-item d-flex align-items-center" href="#">
                                  <i className="bi bi-box-arrow-right" />
                                  <span>Sign Out</span>
                              </a>
                          </li>
                      </ul>{/* End Profile Dropdown Items */}
                  </li>{/* End Profile Nav */}
              </ul>
          </nav>
          {/* End Icons Navigation */}
      </header>
  )
}
