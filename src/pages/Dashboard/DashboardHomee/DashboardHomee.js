import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Col, Row } from 'react-bootstrap';
import {Switch,Route,useRouteMatch,Link} from "react-router-dom";
import PrivateRoute from '../../AllRoutes/PrivateRoute/PrivateRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import PayNow from '../PayNow/PayNow';
import Review from '../Review/Review';
import AddProduct from './../AddProduct/AddProduct';
import useContextBase from './../../hooks/useContextbase';
import AdminRoute from './../../AllRoutes/AdminRoute/AdminRoute';
import './Dashboard.css';
import PostBlogs from './../PostBlogs/PostBlogs';


const DashboardHomee = () => {
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:3000,
            easing:'ease',
        });
    })
    const {user,admin} =useContextBase();
    let{path,url} = useRouteMatch();
    return (
        <div>
           <div data-aos="zoom-in"> <h4 className='dashboard p-2'>Dear {user.displayName},Wellcome to your Dashboard</h4></div>
            <Container>
                <Row>
                    <Col className="mt-2 border" style={{borderLeft:'2px solid red'}} xs={4} md={4} lg={4}>
                        <h4>Daily Need Company Ltd.</h4>

                       {/* Normal USer  */}
                        {
         !admin && <>
                      <div data-aos="fade-down"><Link to ={`${url}/paynow`}><button className="btn btn-success m-1" style={{textDecoration:'none', width:'100%'}}  >Pay Now</button></Link></div>
                      <div data-aos="fade-up"><Link to ={`${url}/review`}><button className="btn btn-warning m-1" style={{textDecoration:'none', width:'100%'}}>Review</button></Link></div>
                      <div data-aos="fade-down"><Link to ={`${url}/myorders`}><button className="btn btn-primary m-1" style={{textDecoration:'none', width:'100%'}}>My Orders</button></Link></div>
        </> }
                                {/* Admin Panel  */}
                {
                    admin && <>
                                
                        <div data-aos="fade-down"><Link to ={`${url}/manageAllOrders`}><button className="btn btn-dark m-1" style={{textDecoration:'none', width:'100%'}}>Manage All Order</button></Link></div>
                        <div data-aos="fade-up"><Link to ={`${url}/manageProducts`}><button className="btn btn-success m-1" style={{textDecoration:'none', width:'100%'}}>Manage Products</button></Link></div>
                        <div data-aos="fade-down"><Link to ={`${url}/addproduct`}><button className="btn btn-dark m-1" style={{textDecoration:'none', width:'100%'}}>Add Products</button></Link></div>
                        <div data-aos="fade-up"><Link to ={`${url}/makeAdmin`}><button className="btn btn-success m-1" style={{textDecoration:'none', width:'100%'}}>Make Admin</button></Link></div>
                        <div data-aos="fade-down"><Link to ={`${url}/postBlog`}><button className="btn btn-dark m-1" style={{textDecoration:'none', width:'100%'}}>Post Blog</button></Link></div>
                </>}
                <div data-aos="zoom-in"><Link to ='/home'><button className="btn btn-danger mt-5"style={{textDecoration:'none', width:'100%'}}>Back to Home</button></Link></div>
                    </Col>


                    <Col className="mt-2 border" xs={8} md={8} lg={8}>
                    
                    <Switch>
                        <Route exact path={path}>
                        <Review></Review>
                        </Route>
                    <PrivateRoute  path={`${path}/paynow`}>
                        <PayNow></PayNow>
                    </PrivateRoute>
                    <PrivateRoute  path={`${path}/review`}>
                        <Review></Review>
                    </PrivateRoute>
                    <PrivateRoute  path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </PrivateRoute>

                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrder></ManageAllOrder>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addproduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/postBlog`}>
                        <PostBlogs></PostBlogs>
                    </AdminRoute>

                    </Switch>
                    </Col>
                </Row>
            </Container>
         
        </div>
    );
};

export default DashboardHomee;