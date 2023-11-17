import { Product } from "../interfaces/Product";
import img1 from "../../assets/products/product1.jpg";
import img2 from "../../assets/products/product2.jpg";
import img3 from "../../assets/products/product3.jpg";
import img4 from "../../assets/products/product4.jpg";
import img5 from "../../assets/products/product3.jpg";
import { productCategories } from "../enums/productCategory";

export const products: Product[] = [
  {
    name: "item 1",
    id: 1,
    price: "50 $",
    img: img1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, perspiciatis.",
    category: productCategories.ointement,
  },
  {
    name: "item 2",
    id: 2,
    price: "500 $",
    img: img2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, perspiciatis.",
    category: productCategories.syrup,
  },
  {
    name: "item 3",
    id: 3,
    price: "40 $",
    img: img3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, perspiciatis.",
    category: productCategories.tabs,
  },
  {
    name: "item 4",
    id: 4,
    price: "90 $",
    img: img4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, perspiciatis.",
    category: productCategories.vial,
  },
  {
    name: "item 5",
    id: 5,
    price: "80 $",
    img: img5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, perspiciatis.",
    category: productCategories.ointement,
  },
  {
    name: "item 6",
    id: 6,
    price: "50 $",
    img: img1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, perspiciatis.",
    category: productCategories.tabs,
  },
  {
    name: "item 7",
    id: 7,
    price: "500 $",
    img: img2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, perspiciatis.",
    category: productCategories.syrup,
  },
  {
    name: "item 8",
    id: 8,
    price: "40 $",
    img: img3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, perspiciatis.",
    category: productCategories.tabs,
  },
  {
    name: "item 9",
    id: 9,
    price: "90 $",
    img: img4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, perspiciatis.",
    category: productCategories.vial,
  },
];
