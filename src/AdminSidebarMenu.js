import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminSidebarMenu() {
  return (
    //   <aside id="sidebar" className="sidebar">
    //       <ul className="sidebar-nav" id="sidebar-nav">
    //           <li className="nav-item">
    //               <Linkink to="/admin-dashboard" className="nav-link collapsed">
    //                   <i className="bi bi-grid" /><span>Dashboard</span>
    //               </Linkink>
    //           </li>
    //           <li className="nav-item">
    //               <Link to="/admin-category" className="nav-link collapsed">
    //                   <i className="bi bi-folder" /><span>Category</span>
    //               </Link>
    //           </li>
    //           <li className="nav-item">
    //               <Link to="/admin-product" className="nav-link collapsed">
    //                   <i className="bi bi-box" /><span>Product</span>
    //               </Link>
    //           </li>
    //           <li className="nav-item">
    //               <Link to="admin-slider" className="nav-link collapsed">
    //                   <i className="bi bi-sliders" /><span>Slider</span>
    //               </Link>
    //           </li>
    //           <li className="nav-item">
    //               <Link to="/admin-pincodes" className="nav-link collapsed">
    //                   <i className="bi bi-geo-alt" /><span>Pincodes</span>
    //               </Link>
    //           </li>
    //           <li className="nav-item">
    //               <a href="admin-shipping.html" className="nav-link collapsed">
    //                   <i className="bi bi-truck" /><span>Shipping</span>
    //               </a>
    //           </li>
    //           <li className="nav-item">
    //               <a href="admin-orders.html" className="nav-link collapsed">
    //                   <i className="bi bi-basket" /><span>Orders</span>
    //               </a>
    //           </li>
    //           <li className="nav-item">
    //               <a href="admin-customers.html" className="nav-link collapsed">
    //                   <i className="bi bi-people" /><span>Customers</span>
    //               </a>
    //           </li>
    //       </ul>
    //   </aside>

      <aside id="sidebar" className="sidebar">
  <ul className="sidebar-nav" id="sidebar-nav">
    <li className="nav-item">
          <Link to="/admin-dashboard" className="nav-link collapsed">
        <i className="bi bi-grid" /><span>Dashboard</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/admin-category" className="nav-link collapsed">
        <i className="bi bi-folder" /><span>Category</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/admin-product" className="nav-link collapsed">
        <i className="bi bi-box" /><span>Product</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/admin-slider" className="nav-link collapsed">
        <i className="bi bi-sliders" /><span>Slider</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/admin-pincodes" className="nav-link collapsed">
        <i className="bi bi-geo-alt" /><span>Pincodes</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/admin-shipping" className="nav-link collapsed">
        <i className="bi bi-truck" /><span>Shipping</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/admin-orders" className="nav-link collapsed">
        <i className="bi bi-basket" /><span>Orders</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/admin-customers" className="nav-link collapsed">
        <i className="bi bi-people" /><span>Customers</span>
      </Link>
    </li>
  </ul>
</aside>

  )
}
