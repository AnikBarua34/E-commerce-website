import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';
import { HiExternalLink} from 'react-icons/hi';

const Product = ({product}) => {
  useEffect(()=>{
    AOS.init({
        offset:100,
        duration:2000,
        easing:'ease',
    });
})
    const {name,img,price,description,_id} = product;
    return (
        <div className="product-container">
            <Col className="card-body">
            <div data-aos="zoom-in"><Card style={{height:"600px"}} className="card" border="primary"> 
        <Card.Img variant="top" src={img}/>
        <Card.Body >
          <Card.Title className="text-primary">Name : {name}</Card.Title>
          <Card.Text className="text-danger fw-bold">Price :BDT {price}</Card.Text>
          <Card.Text >{description}</Card.Text>
          

          {/* dynamic route */}

          <Link to={`/buynow/${_id}`}
          ><button className="btn btn-primary"><span className="text-warning"></span> <span style={{fontSize:'15px'}}><HiExternalLink/></span>  Buy this Product</button></Link>
        </Card.Body>
      </Card>
      </div>
    </Col>
        </div>
    );
};

export default Product;