import React, { useState, useEffect } from "react";
import { removeProduct } from "../../shared/functions/removeProduct";
import { editProduct } from "../../shared/functions/editProduct";
import { Product } from "../../shared/interfaces/Product";
import ProductItem from "../../components/product/product";
import { getItems } from "../../shared/functions/localStorageFunctions";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const [itemDetails, setItemDetails]: any = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const handleRemoveProduct = (id: number) => {
    removeProduct(id);
    navigate('/')
  };

  const handleEditProduct = (product: Product) => {
    editProduct(product);
  };
  const handleProductItem = () => {
    const productData: any = getItems().find(
      (item) => item.id === (id ? +id : null)
    );
    setItemDetails(productData);
  };
  useEffect(() => {
    handleProductItem();
  }, []);

  return (
    <div className='col-12 col-md-6 col-lg-4 my-3 mx-auto' >
      <ProductItem
        productData={itemDetails}
        removeProduct={handleRemoveProduct}
        editProduct={handleEditProduct}
      />
      
    </div>
  );
};

export default ProductDetails;
