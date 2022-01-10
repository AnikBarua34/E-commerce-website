import React, { useState,useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { RiDeleteBin5Fill} from 'react-icons/ri';
import Swal from 'sweetalert2';

const ManageProducts = () => {
    const [allproducts,setAllProducts] =useState([]);
    useEffect(()=>{
        fetch('https://daily-need.herokuapp.com/getAddNewProduct')
        .then(res=>res.json())
        .then(data=>setAllProducts(data))
    },[])


    const handleDelete=id=>{
        // Delete Confirmation     
        const confirmDelete=window.confirm('Are you sure ? to delete this product from your booking !')
        if(confirmDelete){
            // deleting product by id
            fetch(`https://daily-need.herokuapp.com/getAddNewProduct${id}`,{
                method:'DELETE'})
                // regulaer process
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        // alert('Deleted Successfully')
                        // import Swal from 'sweetalert2';
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Successfully Package Deleted from your products list ',
                  showConfirmButton: false,
                  timer: 2000
                })
                        // matching product by id
                        const presentPackage=allproducts.filter(book=> book._id !==id)
                        setAllProducts(presentPackage)
                    }
                })
        }
    }
    return (
        <div>
             <div className="product-container mt-5 pt-4">
            <h5 className="bg-dark text-light rounded-3 m-3 p-2">Manage All Products: {allproducts.length} </h5>
            {
            allproducts?.length <1  && <Button variant="danger">
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Please wait a moment......
          </Button>
        }
       <Table className="bg-dark text-light mx-auto mt-3">
                  <Thead className="thead">
                    <Tr>
                      <Th>Product Name</Th>
                      <Th>Price</Th>
                      <Th>Product ID</Th>
                      <Th>Product Picture</Th>
                      <Th>Delete Item</Th>
                      
                    </Tr>
                  </Thead>
                  <Tbody>
                 

                {allproducts.map(({name,price,_id,img})=>(

                <Tr key={_id} className="tableData">
                <Td> {name} </Td>
                <Td>{price}</Td>
                <Td>{_id}</Td>
                <Td><img style={{width:'100px',height:'100px'}} src={img} alt="" /> </Td>
                
                <Td><button className="btn btn-danger" onClick={()=>handleDelete(_id)}><RiDeleteBin5Fill/>

                </button></Td>
                </Tr>
                ))}              

                 
               
              
                   
                   
                  </Tbody>
                </Table>
        </div>
        </div>
    );
};

export default ManageProducts;