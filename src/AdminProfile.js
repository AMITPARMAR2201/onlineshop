import React from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebarMenu from './AdminSidebarMenu';
import AdminFooter from './AdminFooter';
import { Link } from 'react-router-dom';
export default function AdminProfile() {
  return (
      <div>
          {/* ======= Header ======= */}
          <AdminHeader />{/* End Header */}
          {/* ======= Sidebar ======= */}
          <AdminSidebarMenu />
          {/* End Sidebar*/}{/* End Sidebar*/}
          <main id="main" className="main">
              <div className="pagetitle">
                  <h1>Admin Profile</h1>
                  <nav>
                      <ol className="breadcrumb">
                          <li className="breadcrumb-item"><Link to="/admin-dashboard">Home</Link></li>
                          <li className="breadcrumb-item active">Admin Profile</li>
                      </ol>
                  </nav>
              </div>{/* End Page Title */}
              <section className="section profile">
                  <div className="row">
                      <div className="col-xl-4">
                          <div className="card">
                              <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                  <img src="assets/img/profile-logo1.jpeg" alt="Profile" className="rounded-circle" />
                                  <h2>Amit Parmar</h2>
                                  <h3>Web Designer</h3>
                                  <div className="social-links mt-2">
                                      <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                                      <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                                      <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                                      <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-8">
                          <div className="card">
                              <div className="card-body pt-3">
                                  {/* Bordered Tabs */}
                                  <ul className="nav nav-tabs nav-tabs-bordered">
                                      <li className="nav-item">
                                          <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                                      </li>
                                      <li className="nav-item">
                                          <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit
                                              Profile</button>
                                      </li>
                                      <li className="nav-item">
                                          <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                                      </li>
                                  </ul>
                                  <div className="tab-content pt-2">
                                      <div className="tab-pane fade show active profile-overview" id="profile-overview">
                                          <h5 className="card-title">About</h5>
                                          <p className="small fst-italic">A skilled web designer with a strong focus on visual appeal and usability, dedicated to crafting beautiful and intuitive
                                              websites. Proficient in HTML, CSS, and JavaScript, they merge artistic vision with technical expertise to create
                                              exceptional online experiences.</p>
                                          <h5 className="card-title">Profile Details</h5>
                                          <div className="row">
                                              <div className="col-lg-3 col-md-4 label ">Full Name</div>
                                              <div className="col-lg-9 col-md-8">Parmar Amit</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-lg-3 col-md-4 label">Company</div>
                                              <div className="col-lg-9 col-md-8">E-commerce </div>
                                          </div>
                                          <div className="row">
                                              <div className="col-lg-3 col-md-4 label">Job</div>
                                              <div className="col-lg-9 col-md-8">Web Designer</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-lg-3 col-md-4 label">Country</div>
                                              <div className="col-lg-9 col-md-8">INDIA</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-lg-3 col-md-4 label">Address</div>
                                              <div className="col-lg-9 col-md-8">Bhavnagar</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-lg-3 col-md-4 label">Phone</div>
                                              <div className="col-lg-9 col-md-8">(+91) 123 456 7890</div>
                                          </div>
                                          <div className="row">
                                              <div className="col-lg-3 col-md-4 label">Email</div>
                                              <div className="col-lg-9 col-md-8">amitparmar@gmail.com</div>
                                          </div>
                                      </div>
                                      <div className="tab-pane fade profile-edit pt-3" id="profile-edit">
                                          {/* Profile Edit Form */}
                                          <form>
                                              <div className="row mb-3">
                                                  <label htmlFor="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile
                                                      Image</label>
                                                  <div className="col-md-8 col-lg-9">
                                                      <img src="assets/img/profile-logo1.jpeg" alt="Profile" />
                                                      <div className="pt-2">
                                                          <a href="#" className="btn btn-outline-primary btn-sm" title="Upload new profile image"><i className="bi bi-upload" /></a>
                                                          <a href="#" className="btn btn-outline-danger btn-sm" title="Remove my profile image"><i className="bi bi-trash" /></a>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="row mb-3">
                                                  <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Full Name</label>
                                                  <div className="col-md-8 col-lg-9">
                                                      <input name="fullName" type="text" className="form-control" id="fullName" defaultValue="Amit Parmar" />
                                                  </div>
                                              </div>
                                              <div className="row mb-3">
                                                  <label htmlFor="about" className="col-md-4 col-lg-3 col-form-label">About</label>
                                                  <div className="col-md-8 col-lg-9">
                                                      <textarea name="about" className="form-control" id="about" style={{ "height": "100px" }} defaultValue={"A talented web designer with a keen eye for aesthetics and user experience, specializing in creating visually stunning and highly functional websites"} />
                                                  </div>
                                              </div>
                                              <div className="row mb-3">
                                                  <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Company</label>
                                                  <div className="col-md-8 col-lg-9">
                                                      <input name="company" type="text" className="form-control" id="company" defaultValue="E-commerce" />
                                                  </div>
                                              </div>
                                              <div className="row mb-3">
                                                  <label htmlFor="Job" className="col-md-4 col-lg-3 col-form-label">Job</label>
                                                  <div className="col-md-8 col-lg-9">
                                                      <input name="job" type="text" className="form-control" id="Job" defaultValue="Web Designer" />
                                                  </div>
                                              </div>
                                              <div className="row mb-3">
                                                  <label htmlFor="Country" className="col-md-4 col-lg-3 col-form-label">Country</label>
                                                  <div className="col-md-8 col-lg-9">
                                                      <input name="country" type="text" className="form-control" id="Country" defaultValue="INDIA" />
                                                  </div>
                                              </div>
                                              <div className="row mb-3">
                                                  <label htmlFor="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                                                  <div className="col-md-8 col-lg-9">
                                                      <input name="address" type="text" className="form-control" id="Address" defaultValue="Bhavnagar" />
                                                  </div>
                                              </div>
                                              <div className="row mb-3">
                                                  <label htmlFor="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                                                  <div className="col-md-8 col-lg-9">
                                                      <input name="phone" type="text" className="form-control" id="Phone" defaultValue="(+91) 123 456 7890" />
                                                  </div>
                                              </div>
                                              <div className="row mb-3">
                                                  <label htmlFor="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                                                  <div className="col-md-8 col-lg-9">
                                                      <input name="email" type="email" className="form-control" id="Email" defaultValue="amitparmar@gmail.com" />
                                                  </div>
                                              </div>
                                              <div className="row mb-3">
                                                  <label htmlFor="Twitter" className="col-md-4 col-lg-3 col-form-label">Twitter
                                                      Profile</label>
                                                  <div className="col-md-8 col-lg-9">
                                                      <input name="twitter" type="text" className="form-control" id="Twitter" defaultValue="https://twitter.com/#" />
                                                  </div>
                                              </div>
                                              <div className="row mb-3">
                                                  <label htmlFor="Facebook" className="col-md-4 col-lg-3 col-form-label">Facebook
                                                      Profile</label>
                                                  <div className="col-md-8 col-lg-9">
                                                      <input name="facebook" type="text" className="form-control" id="Facebook" defaultValue="https://facebook.com/#" />
                                                  </div>
                                              </div>
                                              <div className="row mb-3">
                                                  <label htmlFor="Instagram" className="col-md-4 col-lg-3 col-form-label">Instagram
                                                      Profile</label>
                                                  <div className="col-md-8 col-lg-9">
                                                      <input name="instagram" type="text" className="form-control" id="Instagram" defaultValue="https://instagram.com/#" />
                                                  </div>
                                              </div>
                                              <div className="row mb-3">
                                                  <label htmlFor="Linkedin" className="col-md-4 col-lg-3 col-form-label">Linkedin
                                                      Profile</label>
                                                  <div className="col-md-8 col-lg-9">
                                                      <input name="linkedin" type="text" className="form-control" id="Linkedin" defaultValue="https://linkedin.com/#" />
                                                  </div>
                                              </div>
                                              <div className="text-center">
                                                  <button type="submit" className="btn btn-outline-primary">Save Changes</button>
                                              </div>
                                          </form>{/* End Profile Edit Form */}
                                      </div>
                                      <div className="tab-pane fade pt-3" id="profile-change-password">
                                          {/* Change Password Form */}
                                          <form>
                                              <div className="row mb-3">
                                                  <label htmlFor="currentPassword" className="col-md-4 col-lg-3 col-form-label">Current
                                                      Password</label>
                                                  <div className="col-md-8 col-lg-9">
                                                      <input name="password" type="password" className="form-control" id="currentPassword" />
                                                  </div>
                                              </div>
                                              <div className="row mb-3">
                                                  <label htmlFor="newPassword" className="col-md-4 col-lg-3 col-form-label">New
                                                      Password</label>
                                                  <div className="col-md-8 col-lg-9">
                                                      <input name="newpassword" type="password" className="form-control" id="newPassword" />
                                                  </div>
                                              </div>
                                              <div className="row mb-3">
                                                  <label htmlFor="renewPassword" className="col-md-4 col-lg-3 col-form-label">Re-enter New
                                                      Password</label>
                                                  <div className="col-md-8 col-lg-9">
                                                      <input name="renewpassword" type="password" className="form-control" id="renewPassword" />
                                                  </div>
                                              </div>
                                              <div className="text-center">
                                                  <button type="submit" className="btn btn-outline-primary">Change Password</button>
                                              </div>
                                          </form>{/* End Change Password Form */}
                                      </div>
                                  </div>{/* End Bordered Tabs */}
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </main>{/* End #main */}
          {/* ======= Footer ======= */}
         <AdminFooter/>{/* End Footer */}
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
      </div>

  )
}
