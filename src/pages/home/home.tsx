import React ,{useState,useEffect}from 'react'
import { checkIfDataExist } from '../../shared/functions/checkOnDataExist';
import Products from '../../components/products/products';
import { Product } from '../../shared/interfaces/Product';
import { productCategories } from '../../shared/enums/productCategory';
import { addProduct } from '../../shared/functions/addProduct';
import { getItems } from '../../shared/functions/localStorageFunctions';
import { Modal } from 'reactstrap';
import AddEditModal from '../../components/add-edit-modal/addEditModal';
const Home = () => {
  const [productsData,setproductsData]:any[] = useState([]);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const handleAddingProduct = ()=>{
    toggle()
    // @TODO dialog to add the product
    // const newProd:Product ={
    //   id : productID,
    //   img:'',
    //   name:`item ${productID}`,
    //   category:productCategories.syrup,
    //   description:'lorem',
    //   price:'80 $'
    // }
    // addProduct(newProd);

    setproductsData(getItems());
  }
  
  const handleEditOrRemove = () =>{
    setproductsData(getItems())
  }
  useEffect(() => {
    setproductsData(checkIfDataExist());
  }, [])

  return (
    <div>
      <div className='text-end'>
        <button className='btn btn-primary px-5' onClick={toggle}>Add</button>
      </div>
      <Products products = {productsData} data = {handleEditOrRemove} />
      <Modal isOpen={modal} toggle={toggle} >
       <AddEditModal onSubmitForm={handleAddingProduct} />
      </Modal>
    </div>
  )
}

export default Home