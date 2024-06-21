import React from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebarMenu from './AdminSidebarMenu';
import AdminFooter from './AdminFooter';
import { Link } from 'react-router-dom';
export default function AdminEditSlider() {
  return (
        <div>
            {/* ======= Header ======= */}
          <AdminHeader />{/* End Header */}
          {/* ======= Sidebar ======= */}
          <AdminSidebarMenu />
          {/* End Sidebar*/}
          {/* End Sidebar*/}
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Sliders Management</h1>
                    <nav>
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><Link to="/admin-dashboard">Home</Link></li>
                            <li className="breadcrumb-item active">Edit Sliders</li>
                        </ol>
                    </nav>
                </div>{/* End Page Title */}
                <div className="container-xxl flex-grow-1 container-p-y">
                    <div className="card shadow">
                        <div className="card-header  p-3 d-flex justify-content-between " style={{ "background-color": "#FFF455" }}>
                            <h4 className="text-dark mb-0"><b>Edit Sliders</b></h4>
                            <Link to="/admin-slider" className="btn btn-outline-dark">Back</Link>
                    </div>
                    <div className=" card-body">
                        <div className="row">
                            <div className="col-lg-9">
                                <form>
                                    <div className="row mb-3 mt-3">
                                        <div className="col-md-6">
                                            <label htmlFor="title" className="form-label">Title </label>
                                            <input type="text" className="form-control" id="title" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="product_id" className="form-label">Product Id </label>
                                            <input type="text" className="form-control" id="product_id" required />
                                        </div>
                                        {/* Photo */}
                                    </div>
                                    <div className="row mb-3">
                                        {/* Price */}
                                        <div className="col-md-4">
                                            <label htmlFor="start_date" className="form-label">Start Date</label>
                                            <input type="date" className="form-control" id="start_date" required />
                                        </div>
                                        {/* Stock */}
                                        {/* Weight */}
                                        <div className="col-md-4">
                                            <label htmlFor="end_date" className="form-label">End Date</label>
                                            <input type="date" className="form-control" id="end_date" required />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="photo" className="form-label">Photo</label>
                                            <input type="file" className="form-control" id="photo" accept="image/*" required />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-lg-9 text-end">
                                            <button type="submit" className="btn btn-outline-primary">Save Changes</button>
                                            <button type="reset" className="btn btn-outline-dark">Clear all</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-3">
                                <b>Existing photo</b>
                                <img src="https://picsum.photos/200" className="img-fluid " />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
  </main > {/* End #main */ }
    {/* ======= Footer ======= */ }
    <AdminFooter/>
  {/* End Footer */ }
    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
</div >

  )
}
