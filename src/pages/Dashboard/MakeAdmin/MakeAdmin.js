import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email,setEmail]=useState('');
    const [success,setSuccess] =useState(false);

    const handleMakeAdmin=e=>{

        const user={email}
        fetch('https://daily-need.herokuapp.com/addUsers/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                setSuccess(true)
                e.target.reset();
            }
        })
        e.preventDefault();
    }

    const handleOnBlur=e=>{
            setEmail(e.target.value)
    }
    return (
        <div>
        <h5 className="bg-dark text-light rounded-3 m-4 p-2">Make an ADMIN to Access your Control Panel</h5>
        {
            success && <h6 className="bg-success rounded-3 p-3 m-2">This user [{email}] is an ADMIN now  </h6>
        } 
        <form onSubmit={handleMakeAdmin}>
        <Row>
          <Col className="mt-4" xs={12} md={12} lg={12}>
          <input  style={{width:'70%'}} type="email" onBlur={handleOnBlur} placeholder="Enter Email to make an admin"  /> 
          </Col>
          <Col className="mt-3" xs={12} md={12} lg={12}>
          <input style={{width:'50%'}}className="btn btn-success text-light mx-auto" type="submit" value="Make an Admin"/>
          </Col>
        </Row>
    
        </form>
    </div>
    );
};

export default MakeAdmin;