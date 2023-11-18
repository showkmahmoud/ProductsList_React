import React, { useState, useEffect } from "react";
import { Product } from "../../shared/interfaces/Product";
import { FormGroup, FormText, Input, Label } from "reactstrap";
import { productCategories } from "../../shared/enums/productCategory";
import { addProduct } from "../../shared/functions/addProduct";

const AddEditModal = () => {
  const initialValue: Product = {
    name: "",
    img: "",
    price: "",
    description: "",
    category: "",
  };
  const [formData, setFormData] = useState(initialValue);
  const { name, img, price, description, category } = formData;
  const categories: any[] = [
    productCategories.syrup,
    productCategories.ointement,
    productCategories.tabs,
    productCategories.vial,
  ];
  const handleFormDataChange = (e: any) => {
    setFormData({
      ...formData,
      id: Math.floor(Math.random() * 1000),
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    setFormData({
      ...formData,
      id: Math.floor(Math.random() * 1000),
    });
    console.log(formData);
    addProduct(formData);
  };
  return (
    <form onSubmit={onSubmit}>
      {/* name of product */}
      <FormGroup>
        <Label for="productName" className="text-capitalize ">
          Product name
        </Label>
        <Input
          id="productName"
          name="name"
          value={name}
          onChange={handleFormDataChange}
          type="text"
        />
      </FormGroup>

      {/* price of product */}
      <FormGroup>
        <Label for="productPrice" className="text-capitalize">
          price
        </Label>
        <Input
          id="productPrice"
          name="price"
          value={price}
          onChange={handleFormDataChange}
          type="number"
        />
      </FormGroup>

      {/* product Categories */}
      <FormGroup>
        <Label for="productCategories" className="text-capitalize ">
          Select Category
        </Label>
        <Input
          type="select"
          name="category"
          id="productCategories"
          value={category}
          onChange={handleFormDataChange}
        >
          <option value="">Select a category</option>
          {categories.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Input>
      </FormGroup>

      {/* image */}
      <FormGroup>
        <Label for="productImg" className="text-capitalize ">
          product image
        </Label>
        <Input
          id="productImg"
          name="img"
          value={img}
          onChange={handleFormDataChange}
          placeholder="write the img Url"
        />
      </FormGroup>
      
      {/* product desc */}
      <FormGroup>
        <Label for="productDesc" className="text-capitalize ">
          description
        </Label>
        <Input
          id="productDesc"
          name="description"
          value={description}
          onChange={handleFormDataChange}
          type="textarea"
        />
      </FormGroup>
      <button className="d-block btn btn-success ms-auto " type="submit">
        submit
      </button>
    </form>
  );
};

export default AddEditModal;
