import React from 'react';
import AdminHeader from './AdminHeader'; 
import AdminSidebarMenu from './AdminSidebarMenu';
import AdminFooter from './AdminFooter';
import { Link } from 'react-router-dom';
export default function AdminEditShipping() {
  return (
        <div>
            <div>
                {/* ======= Header ======= */}
              <AdminHeader />{/* End Header */}
              {/* ======= Sidebar ======= */}
              <AdminSidebarMenu />
              {/* End Sidebar*/}
                <main id="main" className="main">
                    <div className="pagetitle">
                        <h1>Shipping Management</h1>
                        <nav>
                            <ol className="breadcrumb">
                              <li className="breadcrumb-item"><Link to="/admin-dashboard">Home</Link></li>
                                <li className="breadcrumb-item active">Edit Shipping</li>
                            </ol>
                        </nav>
                    </div>{/* End Page Title */}
                    <div className="container-xxl flex-grow-1 container-p-y">
                        <div className="card shadow">
                            <div className="card-header  p-3 d-flex justify-content-between " style={{ "background-color": "#FFF455" }}>
                                <h4 className="text-dark mb-0"><b>Edit Shipping</b></h4>
                                <Link to="/admin-shipping" className="btn btn-outline-dark" >Back</Link>
                        </div>
                        <div className=" card-body">
                            <div className="row">
                                <div className="col-lg-9">
                                    <form>
                                        <div className="row mb-3 mt-3">
                                            {/* Category */}
                                            {/* Title */}
                                            <div className="col-md-6">
                                                <label htmlFor="title" className="form-label">Class Name </label>
                                                <input type="text" className="form-control" id="title" required />
                                            </div>
                                            {/* Photo */}
                                            <div className="col-md-6">
                                                <label htmlFor="photo" className="form-label">Photo</label>
                                                <input type="file" className="form-control" id="photo" accept="image/*" required />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            {/* Price */}
                                            <div className="col-md-4">
                                                <label htmlFor="price" className="form-label">Price</label>
                                                <input type="number" className="form-control" id="price" required />
                                            </div>
                                            {/* Stock */}
                                            {/* Weight */}
                                            <div className="col-md-4">
                                                <label htmlFor="weight" className="form-label">Weight</label>
                                                <input type="text" className="form-control" id="weight" required />
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label">Is Live</label>
                                                <div>
                                                    <input className="form-check-input" type="radio" name="islive" id="liveYes" defaultValue="yes" required />
                                                    <label className="form-check-label" htmlFor="liveYes">Yes</label>
                                                    <input className="form-check-input" type="radio" name="islive" id="liveNo" defaultValue="no" required />
                                                    <label className="form-check-label" htmlFor="liveNo">No</label>
                                                </div>
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
        </main>{/* End #main */ }
    {/* ======= Footer ======= */ }
    <AdminFooter/>
    {/* End Footer */ }
    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
</div >

</div >

  )
}
