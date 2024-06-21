import React from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebarMenu from './AdminSidebarMenu';
import AdminFooter from './AdminFooter';
import { Link } from 'react-router-dom';
export default function AdminEditProduct() {
  return (
      <div>
          {/* ======= Header ======= */}
          <AdminHeader />{/* End Header */}
          {/* ======= Sidebar ======= */}
          <AdminSidebarMenu />
          {/* End Sidebar*/}
          <main id="main" className="main">
              <div className="pagetitle">
                  <h1>Product Management</h1>
                  <nav>
                      <ol className="breadcrumb">
                          <li className="breadcrumb-item"><Link to="/admin-dashboard">Home</Link></li>
                          <li className="breadcrumb-item active">Product Management</li>
                      </ol>
                  </nav>
              </div>{/* End Page Title */}
              <div className="container-xxl flex-grow-1 container-p-y">
                  <div className="card shadow">
                      <div className="card-header  p-3 d-flex justify-content-between" style={{ "background-color": "#FFF455" }}>
                          <h4 className="text-dark mb-0"><b>Edit Product</b></h4>
                          <Link to="/admin-product" className="btn btn-outline-dark">back</Link>
                      </div>
                      <div className=" card-body">
                          <div className="row">
                              <div className="col-lg-10">
                                  <form>
                                      <div className="row mb-3 mt-3">
                                          {/* Category */}
                                          <div className="col-md-4">
                                              <label htmlFor="category" className="form-label">Category</label>
                                              <select id="category" className="form-select" required>
                                                  <option value>Select Category</option>
                                                  <option value={1}>Category 1</option>
                                                  <option value={2}>Category 2</option>
                                                  <option value={3}>Category 3</option>
                                              </select>
                                          </div>
                                          {/* Title */}
                                          <div className="col-md-4">
                                              <label htmlFor="title" className="form-label">Title</label>
                                              <input type="text" className="form-control" id="title" required />
                                          </div>
                                          {/* Photo */}
                                          <div className="col-md-4">
                                              <label htmlFor="photo" className="form-label">Photo</label>
                                              <input type="file" className="form-control" id="photo" accept="image/*" required />
                                          </div>
                                      </div>
                                      <div className="row mb-3">
                                          {/* Price */}
                                          <div className="col-md-3">
                                              <label htmlFor="price" className="form-label">Price</label>
                                              <input type="number" className="form-control" id="price" required />
                                          </div>
                                          {/* Stock */}
                                          <div className="col-md-3">
                                              <label htmlFor="stock" className="form-label">Stock</label>
                                              <input type="number" className="form-control" id="stock" required />
                                          </div>
                                          {/* Weight */}
                                          <div className="col-md-3">
                                              <label htmlFor="weight" className="form-label">Weight</label>
                                              <input type="text" className="form-control" id="weight" required />
                                          </div>
                                          {/* Size */}
                                          <div className="col-md-3">
                                              <label htmlFor="size" className="form-label">Size</label>
                                              <input type="text" className="form-control" id="size" required />
                                          </div>
                                      </div>
                                      <div className="row mb-3">
                                          {/* Is Live */}
                                          <div className="col-md-3">
                                              <label className="form-label">Is Live</label>
                                              <div className="form-check">
                                                  <input className="form-check-input" type="radio" name="islive" id="liveYes" defaultValue="yes" required />
                                                  <label className="form-check-label" htmlFor="liveYes">Yes</label>
                                              </div>
                                              <div className="form-check">
                                                  <input className="form-check-input" type="radio" name="islive" id="liveNo" defaultValue="no" required />
                                                  <label className="form-check-label" htmlFor="liveNo">No</label>
                                              </div>
                                          </div>
                                          {/* Detail */}
                                          <div className="col-md-9">
                                              <label htmlFor="detail" className="form-label">Detail</label>
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
                              <div className="col-lg-2 pt-4">
                                  <b>Existing photo</b>
                                  <img src="https://picsum.photos/200" className="img-fluid " />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </main > {/* End #main */}
          {/* ======= Footer ======= */}
          <AdminFooter/>
          {/* End Footer */}
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
      </div >

  )
}
