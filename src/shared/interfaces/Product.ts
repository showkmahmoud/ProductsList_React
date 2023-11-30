export interface Product {
  // name:string;
  // img:string;
  // id?:number;
  // price: number;
  // description:string,
  // category:string;
  title: string;
  category: string;
  description: string;
  id: string;
  image: string;
  price: number;
  rating: {
    reate: number;
    count: number;
  };
}
