import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Row,Carousel,Card } from 'react-bootstrap';
import { FaGrinStars} from 'react-icons/fa';
import Rating from 'react-rating';
import './Review.css';



const Reviews = () => {
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:2000,
            easing:'ease',
        });
    })
    const [usersReview,setUsersReview] =useState([]);
    useEffect(()=>{
        fetch('https://daily-need.herokuapp.com/getReviews')
        .then(res=>res.json())
        // .then(data=>console.log(data));
        .then(data=>setUsersReview(data));
    },[])
    return (
        <div className="banner mt-3">
            <div data-aos="zoom-in"><h5 className="review text-dark fw-bold rounded-3 m-4 p-2"><FaGrinStars/>Our Happy Customers Review<FaGrinStars/> </h5></div>

            <Row xs={1} md={3} lg={5} className="g-3 m-3 rounded">
            {
                usersReview.map(review =><Carousel key={review._id}>
                  <Carousel.Item>
                  <div data-aos="flip-left"> <Card className="card" border="primary">         
        <Card.Body style={{height:"250px"}}>
            <Card.Title className="text-light fw-bold bg-success p-2 rounded">{review.userName}</Card.Title>
            <Card.Text className="text-dark fw-bold">{review.description}</Card.Text>
            <p className="text-warning fw-bold">Rating : {review.rating}/5</p>
            <Rating className="text-danger" readonly initialRating={review.rating}
           emptySymbol="far fa-star"
           fullSymbol="fas fa-star"
        ></Rating>
        </Card.Body>
                    </Card></div>
                    </Carousel.Item>
                    <Carousel.Item>
                  <div data-aos="flip-left">  <Card className="card" border="primary"> 
        
      <Card.Body style={{height:"250px"}}>
        <Card.Title className="text-primary fw-bold bg-dark p-2 rounded">{review.userName}</Card.Title>
        <Card.Text className="text-dark fw-bold">{review.description}</Card.Text>
        <p className="text-danger fw-bold">Rating : {review.rating}/5</p>      
        <Rating className="text-warning" readonly initialRating={review.rating}
           emptySymbol="far fa-star"
           fullSymbol="fas fa-star"
        ></Rating>
    
      </Card.Body>
      </Card></div>
                    </Carousel.Item>
                    </Carousel>
                
                
                )   
                
                
            }
            </Row>
          
          
        
        </div>
    );
};

export default Reviews;


