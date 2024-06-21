import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebarMenu from './AdminSidebarMenu'
import AdminFooter from './AdminFooter'
import { Link } from 'react-router-dom'

export default function AdminAddPincodes() {
  return (
    <div>
      <div>
        {/* ======= Header ======= */}
        <AdminHeader/>
       {/* End Header */}
        {/* ======= Sidebar ======= */}
        <AdminSidebarMenu/>
     {/* End Sidebar*/}
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
          <div className="container-xxl flex-grow-1 container-p-y shadow">
            <div className="card shadow">
              <div className="card-header p-3 d-flex justify-content-between" style={{ backgroundColor: "#FFF455" }}>
                <h4 className="text-dark mb-0"><b>Add Pincodes</b></h4>
                <Link to="/admin-Pincodes" className="btn btn-outline-dark">back</Link>
              </div>
            </div>
            <div className="card-body ">
              <form>
                <div className="row mb-3 mt-3">
                  {/* Category */}
                  <div className="col-md-4">
                    <label htmlFor="city" className="form-label">City</label>
                    <select id="city" className="form-select" required>
                      <option value="">Select City</option>
                      <option value={1}>Bhavnagar</option>
                      <option value={2}>Ahemdabad</option>
                    </select>
                  </div>
                  {/* Title */}
                  <div className="col-md-4">
                    <label htmlFor="pincode" className="form-label">Pincode</label>
                    <input type="text" className="form-control" id="pincode" required />
                  </div>
                  {/* State */}
                  <div className="col-md-4">
                    <label htmlFor="state" className="form-label">State</label>
                    <select id="state" className="form-select" required>
                      <option value="">Select State</option>
                      <option value={1}>Gujrat</option>
                      <option value={2}>Goa</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  {/* Is Live */}
                  <div className="col-md-2">
                    <label className="form-label">Is Live</label>
                    <div>
                      <input className="form-check-input" type="radio" name="islive" id="liveYes" value="yes" required />
                      <label className="form-check-label" htmlFor="liveYes">Yes</label>
                      <input className="form-check-input" type="radio" name="islive" id="liveNo" value="no" required />
                      <label className="form-check-label" htmlFor="liveNo">No</label>
                    </div>
                  </div>
                  {/* Detail */}
                  <div className="col-md-6">
                    <label htmlFor="area" className="form-label">Area</label>
                    <textarea className="form-control" id="area" rows={3} required />
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
        </main> {/* End #main */}

        {/* ======= Footer ======= */}
        <AdminFooter/>
     {/* End Footer */}
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
      </div >
    </div>
  )
}
