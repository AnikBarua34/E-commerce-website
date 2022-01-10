import React, { useEffect, useState } from 'react';
import './ManageAllOrder.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { RiDeleteBin5Fill} from 'react-icons/ri';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const ManageAllOrder = () => {
    const [bookedProducts,setBookedProducts]=useState([]);
    const { register, handleSubmit } = useForm();
    const [orderId,setOrderId]=useState('');
    
    useEffect(()=>{
        fetch('https://daily-need.herokuapp.com/getBookedProduct')
        .then(res=>res.json())
        .then(data=>setBookedProducts(data))
    },[])

    const handleDelete=id=>{
        // Delete Confirmation     
        const confirmDelete=window.confirm('Are you sure ? to delete this product from your booking !')
        if(confirmDelete){
            // deleting product by id
            fetch(`https://daily-need.herokuapp.com/getBookedProduct${id}`,{
                method:'DELETE'})
                // regulaer process
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        alert('Deleted Successfully')
                        // matching product by id
                        const presentPackage=bookedProducts.filter(book=> book._id !==id)
                        setBookedProducts(presentPackage)
                    }
                })
        }
    }
    const onSubmit = (data) => {
        console.log(data, orderId);
        fetch(`https://daily-need.herokuapp.com/statusUpdate/${orderId}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.modifiedCount > 0){
        // alert('Deleted Successfully !')
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Package Approved SuccessFully',
          showConfirmButton:false,
          timer: 2000
        })
        
          }
        })
      };

    const handleApprove=(id)=>{
    setOrderId(id);
    console.log(id);
    
    }
    return (
        <div>
            <h4 className="text-warning bg-dark p-2 rounded-3">Total Orders : {bookedProducts.length} </h4>
           
            
           <Table className="bg-dark text-light mx-auto mt-3">
           <Thead className="thead">
             <Tr>
               <Th>Package Name</Th>
               <Th>User Name</Th>
               <Th>Address</Th>
               <Th>Date</Th>
               <Th>Contact Number</Th>
               <Th>Status</Th>
               <Th>Delete Item</Th>
             </Tr>
           </Thead>
           <Tbody>
          

         {bookedProducts.map(({packageName,userName,address,date,contact,_id,status})=>(

         <Tr key={_id} className="tableData">
         <Td> {packageName} </Td>
         <Td>{userName}</Td>
         <Td>{address}</Td>
         <Td>{date}</Td>
         <Td>{contact}</Td>

         <Td>
         <form onSubmit={handleSubmit(onSubmit)}>

<select
onClick={()=>handleApprove(_id)} {...register("status")}>
 <option value={status}>{status}</option>
 <option value="Approved">Approve</option>

</select>
<input type="submit" />
</form>
         </Td>

         <Td><button className="btn btn-danger" onClick={()=>handleDelete(_id)}><RiDeleteBin5Fill/>

         </button></Td>
         </Tr>
         ))}              

          
        
       
            
            
           </Tbody>
         </Table>
        </div>
    );
};

export default ManageAllOrder;