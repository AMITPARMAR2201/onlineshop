import React from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebarMenu from './AdminSidebarMenu';
import AdminFooter from './AdminFooter';
import { Link } from 'react-router-dom';
export default function AdminOrders() {
  return (
    <div>
      {/* ======= Header ======= */}
      <AdminHeader />{/* End Header */}
      {/* ======= Sidebar ======= */}
      <AdminSidebarMenu />
      {/* End Sidebar*/}
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
              <h4 className="text-dark mb-0"><b>All Orders</b></h4>
            </div>
            <div className="card-body pt-3">
              <div className="table-responsive">
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Order Status</th>
                      <th>Delivery Address</th>
                      <th width="5%" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Fri 34-06-2024</td>
                      <td>25000</td>
                      <td>confirmed</td>
                      <td>
                        Amit Parmar <br />
                        Bhavnagar - 364301
                      </td>
                      <td>
                        <Link className="btn btn-outline-success" to="/admin-orders-detail">view</Link>
                       
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
     <AdminFooter/>
     {/* End Footer */}
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
    </div>


  )
}
