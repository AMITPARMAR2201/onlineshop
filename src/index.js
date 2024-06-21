import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AdminAddCotegory from './AdminAddCategory';
import AdminEditCategory from './AdminEditCategory';
import AdminCategory from './AdminCategory';

import AdminAddPincodes from './AdminAddPincodes';
import AdminEditPincodes from './AdminEditPincodes';
import AdminPincodes from './AdminPincodes';

import AdminAddProduct from './AdminAddProduct';
import AdminEditProduct from './AdminEditProduct';
import AdminProduct from './AdminProduct';
import AdminViewProduct from './AdminViewProduct';

import AdminAddShipping from './AdminAddShipping';
import AdminEditShipping from './AdminEditShipping';
import AdminShipping from './AdminShipping';

import AdminAddSliders from './AdminAddSliders';
import AdminEditSlider from './AdminEditSlider';
import AdminSlider from './AdminSlider';

import AdminOrders from './AdminOrders';
import AdminOrdersDetail from './AdminOrdersDetail';

import AdminCustomer from './AdminCustomer';

import AdminForgetPassword from './AdminForgetPassword';
import AdminDashboard from './AdminDashboard';

import AdminProfile from './AdminProfile';
import AdminLogin from './AdminLogin';
import PrintBill from './PrintBill';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <BrowserRouter>
    <Routes>
      <Route index path='/' element={<AdminLogin/>} />
      <Route path='/admin-add-category' element={<AdminAddCotegory />} />
      <Route path='/admin-edit-category' element={<AdminEditCategory />} />
      <Route path='/admin-category' element={<AdminCategory />} />
      <Route path='/admin-add-pincodes' element={<AdminAddPincodes />} />
      <Route path='/admin-edit-pincodes' element={<AdminEditPincodes />} />
      <Route path='/admin-pincodes' element={<AdminPincodes />} />
      <Route path='/admin-add-product' element={<AdminAddProduct />} />
      <Route path='/admin-edit-product' element={<AdminEditProduct />} />
      <Route path='/admin-product' element={<AdminProduct />} />
      <Route path='/admin-add-shipping' element={<AdminAddShipping />} />
      <Route path='/admin-edit-shipping' element={<AdminEditShipping />} />
      <Route path='/admin-shipping' element={<AdminShipping />} />
      <Route path='/admin-add-sliders' element={<AdminAddSliders />} />
      <Route path='/admin-edit-slider' element={<AdminEditSlider />} />
      <Route path='/admin-slider' element={<AdminSlider />} />
      <Route path='/admin-orders' element={<AdminOrders />} />
      <Route path='/admin-orders-detail' element={<AdminOrdersDetail />} />
      <Route path='/admin-customers' element={<AdminCustomer/>} />
      <Route path='/admin-forget-password' element={<AdminForgetPassword />} />
      <Route path='/admin-product' element={<AdminProduct />} />
      <Route path='/admin-product' element={<AdminProduct />} />
      <Route path='/admin-product' element={<AdminProduct />} />
      <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
      <Route path='/admin-profile' element={<AdminProfile />} />
      <Route path='/print-bill' element={<PrintBill/>}/>
      <Route path='/admin-view-product' element={<AdminViewProduct/>} />
    </Routes>
  </BrowserRouter>
 
);


