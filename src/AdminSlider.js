import React from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebarMenu from './AdminSidebarMenu';
import AdminFooter from './AdminFooter';
import { Link } from 'react-router-dom';
export default function AdminSlider() {
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
                            <li className="breadcrumb-item active">Sliders</li>
                        </ol>
                    </nav>
                </div>{/* End Page Title */}
                <div className="container-xxl flex-grow-1 container-p-y">
                    <div className="card shadow">
                        <div className="card-header  p-3 d-flex justify-content-between " style={{ "background-color": "#FFF455" }}>
                            <h4 className="text-dark mb-0"><b>Sliders</b></h4>
                            <Link to="/admin-add-sliders" className="btn btn-outline-dark" >Add New
                            Sliders</Link>
                    </div>
                    <div className=" card-body">
                        <div className="table-responsive">
                            <table className="table tabel-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th width="10%">id</th>
                                        <th width="10%">Title</th>
                                        <th width="15%">Product Id </th>
                                        <th width="15%">Start Date</th>
                                        <th width="13.5">End Date</th>
                                        <th width="17%">Photo</th>
                                        <th width="18%" />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mobile</td>
                                        <td>345Fgd</td>
                                        <td>12-6-2024</td>
                                        <td>12-6-2025</td>
                                        <td>
                                            <a className="example-image-link" href="https://picsum.photos/400" data-lightbox="example-set">
                                                <img src="https://picsum.photos/30" className="img-fluid example-image" />
                                            </a>
                                        </td>
                                        <td>
                                            <Link className="btn btn-outline-primary" to="/admin-edit-slider">Edit</Link>
                                            <a className="btn btn-outline-danger" >Delete</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
