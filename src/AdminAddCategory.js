import AdminHeader from "./AdminHeader";
import AdminSidebarMenu from "./AdminSidebarMenu";
import AdminFooter from "./AdminFooter";
import { Link } from "react-router-dom";
export default function AdminAddCotegory()
 { return( 
        <div>
            {/* ======= Header ======= */}
        <AdminHeader/>
            {/* End Header */}
            {/* ======= Sidebar ======= */}
            <AdminSidebarMenu/>
           {/* End Sidebar*/}
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
                        <div className="card-header  p-3 d-flex justify-content-between" style={{ "background-color": "#FFF455" }}>
                            <h4 className="text-dark mb-0"><b>Add Category</b></h4>
                            <Link to="/admin-product" className="btn btn-outline-dark">back</Link>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <form action>
                                        <div className="mb-3 mt-3">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <input id="title" type="text" className="form-control" required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="photo" className="form-label">Select Photo</label>
                                            <input type="file" name="photo" id="photo" className="form-control" required />
                                        </div>
                                        <label htmlFor className="form-label">is live?</label>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="islive" defaultChecked required id="yes" />
                                            <label className="form-check-label" htmlFor="yes">Yes</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="islive" required id="no" />
                                            <label className="form-check-label" htmlFor="no">No</label>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <a type="submit" className="btn btn-outline-primary me-1">Save</a>
                                            <a type="reset" className="btn btn-outline-dark">clear all</a>
                                            {/* <input type="submit" value="Save" class="btn btn-primary">&nbsp;
                              <input type="reset" value="clear all" class="btn btn-dark"> */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>{/* End #main */}
            {/* ======= Footer ======= */}
             <AdminFooter/>
            {/* End Footer */}
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
        </div>

    );
}