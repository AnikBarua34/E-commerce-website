import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col, Container, Row } from 'react-bootstrap';
import ride from '../../../images/mission.png';
import './OurMission.css';
import { MdInput} from 'react-icons/md';


const OurMission = () => {
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:2000,
            easing:'ease',
        });
    })
   
    return (
        <div className="freeRide m-3 rounded mt-5">
            
            <Container className="mt-5">
            <Row>
            <Col className="p-3" xs={12} sm={12} md={6} lg={6}>
            <h2 className="text-light fw-bold"><span className="text-dark">Our</span> <span className="text-warning">Mission</span></h2>
            <h5 className="text-dark">Daily Need is an e-commerce site. Our first and foremost goal is to provide the best service to our customers. Our specialty is fast delivery, which is mainly for the convenience of the customers. Daily Need is working towards its goal so that it can take place in the heart of our customers</h5>
            
            </Col>

            <Col xs={12} sm={12} md={6} lg={6}>
            <div data-aos="fade-up"> <img style={{width:'96%', height:'350px'}} src={ride} alt="" /></div>
            </Col>
            </Row>
            </Container>
        </div>
    );
};

export default OurMission;