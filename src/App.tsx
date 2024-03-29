import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavComp from "./core/nav/nav";
import home from "./pages/home/home";
import admin from "./pages/admin/admin";
import user from "./pages/user/user";
import notFound from "./pages/not-found/notFound";
import productDetails from "./pages/product details/productDetails";
import AddEditModal from "./components/add-edit-modal/addEditModal";

function App() {
  return (
    <Router>
       <NavComp/>
       <div className="container">
         <Routes>
        <Route index Component={home} />
        <Route path="/admin" Component={admin} />
        <Route path="/user" Component={user} />
        <Route path="/productDetails/:id" Component={productDetails} />
        {/* <Route path="/addEdit" Component={AddEditModal} /> */}
        <Route path="*" Component={notFound} />
      </Routes>
       </div>
     
    </Router>
  );
}

export default App;
