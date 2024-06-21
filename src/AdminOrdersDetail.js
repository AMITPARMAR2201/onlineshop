import React from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebarMenu from './AdminSidebarMenu';
import AdminFooter from './AdminFooter';
import { Link } from 'react-router-dom';
export default function AdminOrdersDetail() {
  return (
      <div>
          {/* ======= Header ======= */}
          <AdminHeader />{/* End Header */}
          {/* ======= Sidebar ======= */}
          <AdminSidebarMenu />
          {/* End Sidebar*/}{/* End Sidebar*/}
          <main id="main" className="main">
              <div className="pagetitle">
                  <h1>Orders Management</h1>
                  <nav>
                      <ol className="breadcrumb">
                          <li className="breadcrumb-item"><Link to="/admin-dashboard">Home</Link></li>
                          <li className="breadcrumb-item active">Orders</li>
                      </ol>
                  </nav>
              </div>{/* End Page Title */}
              <div className="container-xxl flex-grow-1 container-p-y">
                  <div className="card shadow">
                      <div className="card-header  p-3 d-flex justify-content-between " style={{ "background-color": "#FFF455" }}>
                          <h4 className="text-dark mb-0"><b>Orders Details</b> </h4>
                          <h6> <b className="text-dark">Bill No :- 1</b></h6>
                          <Link to="print-bill" className="btn btn-outline-secondary">Print</Link>
                      </div>
                      <div className="card-body pt-1">
                          <div className="table-responsive">
                              <table className="table table-striped table-bordered table-sm">
                                  <tbody>
                                      <tr>
                                          <td width="25%">id</td>
                                          <td width="25%" />
                                          <td width="25%">Customer id</td>
                                          <td width="25%" />
                                      </tr>
                                      <tr>
                                          <td width="25%">Date</td>
                                          <td width="25%" />
                                          <td width="25%">Name</td>
                                          <td width="25%" />
                                      </tr>
                                      <tr>
                                          <td width="25%">Status</td>
                                          <td width="25%">
                                              Currently :- Dispatched
                                              <form action>
                                                  <select className="form-select">
                                                      <option value={1}>confirm</option>
                                                      <option value={2}>Dispatched</option>
                                                      <option value={3}>Delivered</option>
                                                      <option value={4}>Returned</option>
                                                  </select>
                                              </form>
                                          </td>
                                          <td width="25%">Address</td>
                                          <td width="25%" />
                                      </tr>
                                      <tr>
                                          <td width="25%">Amount</td>
                                          <td width="25%" />
                                          <td width="25%">City Pincode</td>
                                          <td width="25%" />
                                      </tr>
                                      <tr>
                                          <td width="25%">Payment Status</td>
                                          <td width="25%" />
                                          <td width="25%">Remarks</td>
                                          <td width="25%" />
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                          <b>Order Detail</b>
                          <div className="table-responsive">
                              <table className="table table-striped table-bordered table-sm">
                                  <thead>
                                      <tr>
                                          <td>Sr</td>
                                          <td>Name</td>
                                          <td>Price</td>
                                          <td>Quantity</td>
                                          <td>Total</td>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>1</td>
                                          <td>IPhone</td>
                                          <td>125000</td>
                                          <td>2</td>
                                          <td>250000</td>
                                      </tr>
                                  </tbody>
                                  <tfoot>
                                      <tr>
                                          <td colSpan={4}>Total</td>
                                          <td>250000</td>
                                      </tr>
                                  </tfoot>
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
