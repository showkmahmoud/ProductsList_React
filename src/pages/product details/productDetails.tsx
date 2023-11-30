import React, { useState, useEffect } from "react";
import { Product } from "../../shared/interfaces/Product";
import ProductItem from "../../components/product/product";
import { useParams, useNavigate } from "react-router-dom";
import { editProduct, removeProduct } from "../../shared/functions/fetchingStaticDataFuncs";
import { getProducts } from "../../shared/fetchingData/crudFunctions";

const ProductDetails = () => {
  const [itemDetails, setItemDetails]: any = useState("");
  const { id }  = useParams();
  const navigate = useNavigate();
  const handleRemoveProduct = (id: number) => {
    removeProduct(id);
    navigate('/')
  };

  const handleEditProduct = (product: Product) => {
    editProduct(product);
  };
  const handleProductItem = async () => {
    const data : Product[] = await getProducts()
    const productData: Product | undefined = data.find(
      (item:any) => item.id == (id ? +id : null)
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
