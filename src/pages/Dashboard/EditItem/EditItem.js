import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router';
import {  Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';



const EditItem = () => {
    const [items,setItems]=useState({});
    const {id} =useParams();

    useEffect(()=>{
        fetch(`https://daily-need.herokuapp.com/getAddNewProduct/${id}`)
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])


    const handleUpdateProduct= e =>{
        fetch(`https://daily-need.herokuapp.com/getAddNewProduct/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(items)
        })
        .then(res=> res.json())
        .then(data=>{
if(data.modifiedCount >0){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Successfully Updated ',
        showConfirmButton: false,
        timer: 2000
      })
    setItems({})
}
        })
        e.preventDefault();
    }
    const handleNameChange = e => {
        const updateName= e.target.value;
        const updateItem = {name: updateName, description: items.description, img:items.img};
       setItems(updateItem)
    }
    const handleDescriptionChange = e => {
        const updateDescription= e.target.value;
        const updateItem ={name: items.name, description: updateDescription, img:items.img }
       setItems(updateItem);
    }
    const handleImgChange = e => {
        const updateImg= e.target.value;
        const updateItem ={name: items.name, description: items.description, img:updateImg }
       setItems(updateItem);
    }
    const handlePriceChange = e => {
        const updatePrice= e.target.value;
        const updateItem ={name: items.name, description: items.description, img:items.img, price:updatePrice }
       setItems(updateItem);
    }

    return (
        <div>
            <h3>Update Your Item Here </h3>
            <form onSubmit={handleUpdateProduct}  className="booking-form" >
            <h4 style={{width:'70%'}}className="bg-primary text-light mt-3 p-3 mx-auto rounded-3 shadow-3">Product informations</h4>
            <Container>
            <Row>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              Item ID<br /> 
             <input disabled style={{width:'70%'}} type="text"  defaultValue={items._id || ''} placeholder="Item ID " /> 
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              Item Name<br />
             <input style={{width:'70%'}} type="text" onChange={handleNameChange}  value={items.name || ''} placeholder="Item Name " cols="15" rows="5"/>
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              Item Description<br />
              <textarea style={{width:'70%'}}  type="text" onChange={handleDescriptionChange}  value={items.description || ''} placeholder="Enter Description" cols="15" rows="5"></textarea>
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              Item Image<br />  
              <input required style={{width:'70%'}} onChange={handleImgChange}  type="text" value={items.img || ''}   placeholder="Enter Your Image URL"/>
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              Item Price<br />
              <input required style={{width:'70%'}} onChange={handlePriceChange}  type="text" value={items.price || ''}   placeholder="Enter Your Item Price"/>
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <input style={{width:'50%'}}className="btn btn-primary mx-auto" type="submit" value="Update This Item"/>
              </Col>

            </Row>
            </Container>
 
                </form>
                <Link to ='/dashboard/manageProducts'><button style={{width:'70%'}}className="btn btn-success mx-auto mt-2">Go to Manage All Products</button></Link>

        </div>
    );
};

export default EditItem;