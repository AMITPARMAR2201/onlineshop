import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebarMenu from './AdminSidebarMenu'
import AdminFooter from './AdminFooter'
import { Link } from 'react-router-dom'

export default function AdminCategory() {
  return (
      <div>
          {/* ======= Header ======= */}
         <AdminHeader/>
         {/* End Header */}
          {/* ======= Sidebar ======= */}
         <AdminSidebarMenu/>{/* End Sidebar*/}
          <main id="main" className="main">
              <div className="pagetitle">
                  <h1>Category Management</h1>
                  <nav>
                      <ol className="breadcrumb">
                          <li className="breadcrumb-item"><Link to="/admin-dashboard">Home</Link></li>
                          <li className="breadcrumb-item active">Category Management</li>
                      </ol>
                  </nav>
              </div>{/* End Page Title */}
              <div className="container-xxl flex-grow-1 container-p-y">
                  <div className="card shadow">
                      <div className="card-header  p-3 d-flex justify-content-between " style={{ "background-color": "#FFF455" }}>
                          <h4 className="text-dark mb-0"><b>Categories</b></h4>
                          <Link to="/admin-add-category" className="btn btn-outline-dark">Add new
                              category</Link>
                      </div>
                      <div className="card-group mt-3 ">
                          <div className="col-4 px-2">
                              <div className="card px-3">
                                  <div className=" border-0 mb-0 rounded-5 shadow">
                                      <h2 style={{ "-webkit-text-align": "center", "text-align": "center" }}>ID : 1</h2>
                                  </div>
                                  <a className="example-image-link" href="https://picsum.photos/400" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                                      <img src="https://picsum.photos/200/100 " className="img-fluid example-image rounded-2 d-block mx-auto  mt-2 shadow" />
                                  </a>
                                  <h5 className="mt-2 text-center rounded-5 shadow">
                                      Title : Mobile
                                  </h5>
                                  <h6 className=" text-center mb-1 rounded-5 shadow"><b>Is Live</b> : Yes</h6>
                                  <div className="d-flex justify-content-center shadow rounded-5 ">
                                      <Link className="btn btn-outline-primary me-1 " to="/admin-edit-category">Edit</Link>
                                      <a className="btn btn-outline-danger " >Delete</a>
                                  </div>
                              </div>
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
