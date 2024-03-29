import React ,{useState,useEffect}from 'react'
import { checkIfDataExist } from '../../shared/functions/checkOnDataExist';
import Products from '../../components/products/products';
import { getItems } from '../../shared/functions/localStorageFunctions';
import { Modal } from 'reactstrap';
import AddEditModal from '../../components/add-edit-modal/addEditModal';
import { addEditMode } from '../../shared/enums/addEditMode';
import './home.css'
import { Product } from '../../shared/interfaces/Product';
import { addProduct } from '../../shared/functions/addProduct';
const Home = () => {
  const [productsData,setproductsData]:any[] = useState([]);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const handleAddingProduct = (product:Product)=>{
    toggle()
    addProduct(product);
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
      <div className='add-btn-wrapper text-end container'>
        <button className='btn btn-primary px-5' onClick={toggle}>Add</button>
      </div>
      <Products products = {productsData} data = {handleEditOrRemove} />
      <Modal isOpen={modal} toggle={toggle} >
       <AddEditModal onSubmitForm={handleAddingProduct} mode={addEditMode.add} selectedProduct={undefined}/>
      </Modal>
    </div>
  )
}

export default Home