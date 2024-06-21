import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebarMenu from './AdminSidebarMenu'
import AdminFooter from './AdminFooter'
import { Link } from 'react-router-dom'

export default function AdminViewProduct() {
  return (
      <div>
          {/* ======= Header ======= */}
          <AdminHeader/>
          <AdminSidebarMenu/>
         {/* End Sidebar*/}
          <main id="main" className="main">
              <div className="pagetitle">
                  <h1>Product Management</h1>
                  <nav>
                      <ol className="breadcrumb">
                          <li className="breadcrumb-item"><Link to="/admin-dashboard">Home</Link></li>
                          <li className="breadcrumb-item active">View Product</li>
                      </ol>
                  </nav>
              </div>
              <div className="container-xxl flex-grow-1 container-p-y">
                  <div className="card shadow">
                      <div className="card-header  p-3 d-flex justify-content-between " style={{ "background-color": "#FFF455" }}>
                          <h4 className="text-dark mb-0"><b> IPHONE </b></h4>
                          <Link to="/admin-product" className="btn btn-outline-dark">Back</Link>
                      </div>
                      <div className="row">
                          <div className="col-12">
                              <div className="card mt-3">
                                  <div className="card-body">
                                      <div className="table-responsive">
                                          <table className="table table-bordered">
                                              <tbody className="top-text">
                                                  <tr>
                                                      <td width="25%">Product Id</td>
                                                      <td>1</td>
                                                  </tr>
                                                
                                                  <tr>
                                                      <td width="25%">Price</td>
                                                      <td>25000</td>
                                                  </tr>
                                                  <tr>
                                                      <td width="25%">Stock</td>
                                                      <td>12</td>
                                                  </tr>
                                                  <tr>
                                                      <td width="25%">Weight</td>
                                                      <td>1Kg</td>
                                                  </tr>
                                                  <tr>
                                                      <td width="25%">Size</td>
                                                      <td>full</td>
                                                  </tr>
                                                  <tr>
                                                      <td width="25%">IS Live</td>
                                                      <td>Yes</td>
                                                  </tr>
                                                  <tr>
                                                      <td width="25%">Detail</td>
                                                      <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla deserunt voluptatum repudiandae minus sapiente iusto nihil hic praesentium accusamus? Officiis.</td>
                                                  </tr>
                                                  <tr>
                                                      <td width="25%">Photo</td>
                                                      <td>
                                                          <a classname="example-image-link" href="https://picsum.photos/400" data-lightbox="example-set" >
                                                              <img src="https://picsum.photos/100 " classname="img-fluid example-image rounded-2 d-block mx-auto  mt-2 shadow" />
                                                          </a>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* End Page Title */}
          </main>{/* End #main */}
          {/* ======= Footer ======= */}
        <AdminFooter/>
        {/* End Footer */}
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
      </div>

  )
}
