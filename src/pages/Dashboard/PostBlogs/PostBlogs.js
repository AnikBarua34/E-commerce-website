import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';

import Swal from 'sweetalert2';
import useContextBase from '../../hooks/useContextbase';



const PostBlogs = () => {
    const {user}=useContextBase();
    // Add New Product Section 
    const nameRef = useRef();
    const emailRef = useRef();
    const descriptionRef = useRef();
    const imgRef = useRef();
    


    const handlePostBlog =e=>{
       const userName = nameRef.current.value;
       const email = emailRef.current.value;
       const description =  descriptionRef.current.value;
       const img= imgRef.current.value;
      
      
       
       e.preventDefault();
          
       
       const newReview = {userName,email, description,img}
       fetch('https://daily-need.herokuapp.com/postBlogs',{
         method:'POST',
         headers:{
           'content-type':'application/json'
         },
         
         body:JSON.stringify(newReview)
       })
       .then(res=>res.json())
       .then(data=>{
         if(data.insertedId){
          //  alert('Review Added Successfully, Check Home')
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Blog Successfully Added in the Blog',
            showConfirmButton:false,
            timer: 2000
          })
           e.target.reset();
         }
       })
           }
    return (
        <div>
            <h5 className="bg-success text-light rounded-3 m-3 p-2">Add a Blog in Our Daily Need</h5>

<form onSubmit={handlePostBlog}  className="booking-form" >
<Row>
  <Col className="mt-2" xs={12} md={12} lg={12}>
  <input  style={{width:'85%'}} type="text" ref={nameRef}  defaultValue={user.displayName}  placeholder="Enter Name "/>
 
  </Col>
  <Col className="mt-2" xs={12} md={12} lg={12}>
  <input disabled style={{width:'85%'}} type="text" ref={emailRef} defaultValue={user.email}  placeholder="Enter Email "/>
  </Col>
  <Col className="mt-2" xs={12} md={12} lg={12}>
   <input required style={{width:'85%'}}  type="text" ref={imgRef} placeholder="Enter any Image URL"/>
  </Col>
  <Col className="mt-2" xs={12} md={12} lg={12}>
  <textarea style={{width:'85%'}}  type="text" ref={descriptionRef} placeholder="Enter Description" cols="15" rows="5"></textarea>
  </Col>
  
  <Col className="mt-2" xs={12} md={12} lg={12}>
  <input style={{width:'85%'}}className="btn btn-dark mx-auto" type="submit" value="Post Blog"/>
  </Col>
</Row>

</form>
        </div>
    );
};

export default PostBlogs;