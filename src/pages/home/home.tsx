import React ,{useState,useEffect}from 'react'
import { checkIfDataExist } from '../../shared/functions/checkOnDataExist';
import Products from '../../components/products/products';
import { getItems } from '../../shared/functions/localStorageFunctions';
import { Modal } from 'reactstrap';
import AddEditModal from '../../components/add-edit-modal/addEditModal';
import { addEditMode } from '../../shared/enums/addEditMode';
import './home.css'
import { addProductAxios, getProducts } from '../../shared/fetchingData/crudFunctions';
const Home = () => {
  const [productsData,setproductsData]:any[] = useState([]);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleAddingProduct = ()=>{
    // toggle()
    // addProduct(product);
    // setproductsData(getItems());
    const newItem = {
      title: 'test product ***',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    }
    addProductAxios(newItem);
   
  }

  const handleEditOrRemove = () =>{
    setproductsData(getItems())
  }
  const handleGetData = async() =>{
    const data = await getProducts();
    console.log('first')
    setproductsData(data);
  }
  useEffect(() => {
    handleGetData();
  }, [])

  return (
    <div>
      <div className='add-btn-wrapper text-end container'>
        <button className='btn btn-primary px-5' onClick={handleAddingProduct}>Add</button>
      </div>
      <Products products = {productsData} data = {handleEditOrRemove} />
      {/* <Modal isOpen={modal} toggle={toggle} >
       <AddEditModal onSubmitForm={handleAddingProduct}   mode={addEditMode.add}/>
      </Modal> */}
    </div>
  )
}

export default Home