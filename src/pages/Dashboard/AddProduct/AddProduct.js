import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';

const AddProduct = () => {
     // Add New Product Section 
     const nameRef = useRef();
     const priceRef = useRef();
     const descriptionRef = useRef();
     const imgRef = useRef();


     const handleAddProduct =e=>{
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const description =  descriptionRef.current.value;
        const img =  imgRef.current.value;
       
        
        e.preventDefault();
           
        
        const newProduct = {name,price, description,img}
        
        fetch('https://daily-need.herokuapp.com/postAddNewProduct',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          
          body:JSON.stringify(newProduct)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            // alert('Product Added Successfully, Check Dashboard')
                   // import Swal from 'sweetalert2';
                   Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Product added successfully !',
                    showConfirmButton: false,
                    timer: 2000
                  })
            e.target.reset();
          }
        })
            }
    return (
        <div>
            <h5 className="bg-success text-light rounded-3 m-3 p-2">Add a new Product in your page</h5>
            <form onSubmit={handleAddProduct}  className="booking-form" >
           
            <Row>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <input  style={{width:'85%'}} type="text" ref={nameRef} placeholder="Enter Package Name"  /> 
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <input style={{width:'85%'}} type="text" ref={priceRef} placeholder="Enter Your Price "/>
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <textarea style={{width:'85%'}}  type="text" ref={descriptionRef} placeholder="Enter Description" cols="15" rows="5"></textarea>
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <input required style={{width:'85%'}}  type="text" ref={imgRef} placeholder="Enter any Image URL"/>
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <input style={{width:'85%'}}className="btn btn-dark mx-auto" type="submit" value="Add This Product"/>
              </Col>
              

            </Row>
 
                </form>
        </div>
    );
};

export default AddProduct;