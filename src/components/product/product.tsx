import React, { useState } from "react";
import "./product.css";
import { Link } from "react-router-dom";
import "../../shared/styles/style.css";
import { Product } from "../../shared/interfaces/Product";
import { Modal } from "reactstrap";
import AddEditModal from "../add-edit-modal/addEditModal";
import { addEditMode } from "../../shared/enums/addEditMode";
const ProductItem = ({
  productData,
  removeProduct,
  editProduct,
  ...props
}: any) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const handleRemove = (id: number) => {
    removeProduct(id);
  };
  const handleEdit = (product: Product) => {
    toggle();
    editProduct(product);
  };
  return (
    <div className="product-card text-center p-4">
      <Link className="global-link" to={`productDetails/${productData.id}`}>
        <div className="img-wrapper">
          <img src={productData.image} alt={productData.image} />
        </div>
      </Link>
      <div className="product-info">
        <div className="d-flex justify-content-between">
          <p>{productData.title}</p>
          <p>{productData.price} $</p>
        </div>
        <p>{productData.category}</p>
        <p className="text-start desc">{productData.description}</p>
      </div>
      <div className="actions-wrapper d-flex justify-content-between align-items-center">
        <button className="btn btn-success px-4" onClick={toggle}>
          Edit
        </button>
        <button
          className="btn btn-danger "
          onClick={() => handleRemove(productData.id)}
        >
          Remove
        </button>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <AddEditModal
          selectedProduct={productData}
          onSubmitForm={handleEdit}
          mode={addEditMode.edit}
        />
      </Modal>
    </div>
  );
};

export default ProductItem;
