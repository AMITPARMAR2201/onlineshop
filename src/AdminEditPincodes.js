import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebarMenu from './AdminSidebarMenu'
import AdminFooter from './AdminFooter'
import { Link } from 'react-router-dom'
export default function AdminEditPincodes() {
  return (
        <div>
            {/* ======= Header ======= */}
          <AdminHeader />{/* End Header */}
          {/* ======= Sidebar ======= */}
          <AdminSidebarMenu />
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
                <div className="container-xxl flex-grow-1 container-p-y">
                    <div className="card shadow">
                        <div className="card-header  p-3 d-flex justify-content-between " style={{ "background-color": "#FFF455" }}>
                            <h4 className="text-dark mb-0"><b>Edit Pincodes</b></h4>
                            <Link to="/admin-Pincodes" className="btn btn-outline-dark" >back</Link>
                    </div>
                    <div className=" card-body">
                        <form>
                            <div className="row mb-3 mt-3">
                                {/* Category */}
                                <div className="col-md-4">
                                    <label htmlFor="category" className="form-label">City</label>
                                    <select id="category" className="form-select" required>
                                        <option value>Select City</option>
                                        <option value={1}>Bhavnagar</option>
                                        <option value={2}>Ahemdabad</option>
                                    </select>
                                </div>
                                {/* Title */}
                                <div className="col-md-4">
                                    <label htmlFor="title" className="form-label">Pincode</label>
                                    <input type="text" className="form-control" id="title" required />
                                </div>
                                {/* Photo */}
                                <div className="col-md-4">
                                    <label htmlFor="title" className="form-label">State</label>
                                    <select id="category" className="form-select" required>
                                        <option value>Select State</option>
                                        <option value={1}>Gujrat</option>
                                        <option value={2}>Goa</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                {/* Is Live */}
                                <div className="col-md-2">
                                    <label className="form-label ">Is Live</label>
                                    <div>
                                        <input className="form-check-input" type="radio" name="islive" id="liveYes" defaultValue="yes" required />
                                        <label className="form-check-label" htmlFor="liveYes">Yes</label>
                                        <input className="form-check-input" type="radio" name="islive" id="liveNo" defaultValue="no" required />
                                        <label className="form-check-label" htmlFor="liveNo">No</label>
                                    </div>
                                </div>
                                {/* Detail */}
                                <div className="col-md-6">
                                    <label htmlFor="detail" className="form-label">Area</label>
                                    <textarea className="form-control" id="detail" rows={3} required defaultValue={""} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12 text-end">
                                    <button type="submit" className="btn btn-outline-primary">Save changes</button>
                                    <button type="reset" className="btn btn-outline-dark">Clear all</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
  </main > {/* End #main */ }
    {/* ======= Footer ======= */ }
   <AdminFooter/>{/* End Footer */ }
    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
</div >

  )
}
