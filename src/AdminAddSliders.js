import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebarMenu from './AdminSidebarMenu'
import AdminFooter from './AdminFooter'
import { Link } from 'react-router-dom'

export default function AdminAddSliders() {
  return (
      <div>
          {/* ======= Header ======= */}
         <AdminHeader/>
         {/* End Header */}
          {/* ======= Sidebar ======= */}
         <AdminSidebarMenu/>
         {/* End Sidebar */}
          <main id="main" className="main">
              <div className="pagetitle">
                  <h1>Slider Management</h1>
                  <nav>
                      <ol className="breadcrumb">
                          <li className="breadcrumb-item"><Link to="/admin-dashboard">Home</Link></li>
                          <li className="breadcrumb-item active">Add Sliders</li>
                      </ol>
                  </nav>
              </div>{/* End Page Title */}
              <div className="container-xxl flex-grow-1 container-p-y">
                  <div className="card shadow">
                      <div className="card-header p-3 d-flex justify-content-between" style={{ backgroundColor: "#FFF455" }}>
                          <h4 className="text-dark mb-0"><b>Add Sliders</b></h4>
                          <Link to="/admin-slider" className="btn btn-outline-dark">Back</Link>
                      </div>
                      <div className="card-body">
                          <form>
                              <div className="row mb-3 mt-3">
                                  {/* Title */}
                                  <div className="col-md-6">
                                      <label htmlFor="title" className="form-label">Title</label>
                                      <input type="text" className="form-control" id="title" required />
                                  </div>
                                  <div className="col-md-6">
                                      <label htmlFor="productId" className="form-label">Product Id</label>
                                      <input type="text" className="form-control" id="productId" required />
                                  </div>
                              </div>
                              <div className="row mb-3">
                                  {/* Start Date */}
                                  <div className="col-md-4">
                                      <label htmlFor="startDate" className="form-label">Start Date</label>
                                      <input type="date" className="form-control" id="startDate" required />
                                  </div>
                                  {/* End Date */}
                                  <div className="col-md-4">
                                      <label htmlFor="endDate" className="form-label">End Date</label>
                                      <input type="date" className="form-control" id="endDate" required />
                                  </div>
                                  {/* Photo */}
                                  <div className="col-md-4">
                                      <label htmlFor="photo" className="form-label">Photo</label>
                                      <input type="file" className="form-control" id="photo" accept="image/*" required />
                                  </div>
                              </div>
                              <div className="row mb-3">
                                  <div className="col-12 text-end">
                                      <button type="submit" className="btn btn-outline-primary">Save</button>
                                      <button type="reset" className="btn btn-outline-dark">Clear all</button>
                                  </div>
                              </div>
                          </form>
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
