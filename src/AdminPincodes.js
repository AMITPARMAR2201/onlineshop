import React from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebarMenu from './AdminSidebarMenu';
import AdminFooter from './AdminFooter';
import { Link } from 'react-router-dom';
export default function AdminPincodes() {
  return (
      <div>
          <AdminHeader />{/* End Header */}
          {/* ======= Sidebar ======= */}
          <AdminSidebarMenu />
          {/* End Sidebar*/}{/* End Sidebar*/}
          <main id="main" className="main">
              <div className="pagetitle">
                  <h1>Pincodes management</h1>
                  <nav>
                      <ol className="breadcrumb">
                          <li className="breadcrumb-item"><Link to="/admin-dashboard">Home</Link></li>
                          <li className="breadcrumb-item active">Pincodes</li>
                      </ol>
                  </nav>
              </div>{/* End Page Title */}
              <div className="container-xxl flex-grow-1 container-p-y">
                  <div className="card shadow">
                      <div className="card-header  p-3 d-flex justify-content-between " style={{ "background-color": "#FFF455" }}>
                          <h4 className="text-dark mb-0"><b>Pincodes</b></h4>
                          <Link to="/admin-add-Pincodes" className="btn btn-outline-dark">Add new
                              Pincodes</Link>
                      </div>
                      <div className="card-body pt-3">
                          <div className="table-responsive">
                              <table className="table table-striped table-bordered">
                                  <thead>
                                      <tr>
                                          <th>Id</th>
                                          <th>City</th>
                                          <th>Atera</th>
                                          <th>Pincode</th>
                                          <th>State</th>
                                          <th>Is Live </th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>1</td>
                                          <td>Bhavnagar</td>
                                          <td>Vithal vadi</td>
                                          <td>364240</td>
                                          <td>
                                              Gujrat
                                          </td>
                                          <td>Yes</td>
                                          <td className="text-end">
                                              <Link className="btn btn-outline-primary " to="/admin-edit-Pincodes">Edit</Link>
                                              <a className="btn btn-outline-danger ">Delete</a>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
          </main>{/* End #main */}
          {/* ======= Footer ======= */}
          <AdminFooter/>{/* End Footer */}
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
      </div>

  )
}
