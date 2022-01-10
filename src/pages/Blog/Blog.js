import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {  Card, Col } from 'react-bootstrap';
import { IoIosArrowDropright } from 'react-icons/io';
import './Blog.css';


const Blog = ({ blog }) => {
	useEffect(()=>{
		AOS.init({
			offset:100,
			duration:2000,
			easing:'ease',
		});
	})
	const { name, date, description, img } = blog;

	return (
		<>
		
		<div className="product-container">
            <Col className="card-body">
            <div data-aos="zoom-in"><Card style={{height:"540px"}} className="card" border="primary"> 
        <Card.Img variant="top" src={img}/>
        <Card.Body >
          <Card.Title className="text-primary">{name}</Card.Title>
          <Card.Text className="text-danger fw-bold">{date}</Card.Text>
          <Card.Text >{description}</Card.Text>
        </Card.Body>
      </Card>
      </div>
    </Col>
        </div>
		</>
	);
};

export default Blog;
