import React from 'react';

import { Col, Container, Image, Row } from 'react-bootstrap';
import { ImFacebook2, ImTwitter, ImLinkedin, ImMail } from 'react-icons/im';
import Swal from 'sweetalert2';
import './ContactUs.css';
import  emailjs  from '@emailjs/browser';
import Header from '../../Shared/Header/Head';


const ContactUs = () => {
	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm('service_83fblzd', 'template_177iipm', e.target, 'user_Xdat0CdWHdMypnLD2Zr77').then(
			(result) => {
				console.log(result.text);
				Swal.fire({
					icon: 'success}',
					title: 'Message Sent Successfully',
				});
			},
			(error) => {
				console.log(error.text);
				Swal.fire({
					icon: 'error',
					title: 'Ooops, something went wrong',
					text: error.text,
				});
			}
		);
	}

	return (
		<>
		<Header></Header>
		<Container>
			<div className="contactText ">
				<h3>Get In Touch</h3>
				<p>
					<i>
						Feel free to knock Daily Need. Our inbox is always open.
						<br /> Whether you have a question or just want to say hi, we'll try our best to get back to you!
					</i>
				</p>
			</div>
			{/* contact  */}

			<Container className=" contact">
				<Row>
					<Col className="mt-2" xs={12} md={12} lg={6}>					
						<div className="contact-info">
							<Image  src="https://image.ibb.co/kUASdV/contact-image.png" className="img-fluid " alt="Responsive image" />
							<h2>Contact </h2>
							<h5 className='pb-2'>We love to hear from you !</h5>
						</div>					
					</Col>
					<Col className="mt-2" xs={12} md={12} lg={6}>
					<form onSubmit={sendEmail}  className="booking-form" >
<Row>
  <Col className="mt-2" xs={12} md={12} lg={12}>
  <input  style={{width:'85%'}} type="text" placeholder="Enter Name "/>
  
  </Col>
  <Col className="mt-2" xs={12} md={12} lg={12}>
  <input style={{width:'85%'}} type="text" placeholder="Enter Email "/>
  
  </Col>
  <Col className="mt-2" xs={12} md={12} lg={12}>
  <textarea style={{width:'85%'}}  type="text" placeholder="Enter Your Message" cols="15" rows="5"></textarea>
  </Col>

  <Col className="mt-2" xs={12} md={12} lg={12}>
  <input style={{width:'85%'}}className="btn btn-warning mx-auto" type="submit" value="Send"/>
  </Col>
</Row>

</form>
					</Col>
					
					
				</Row>
			</Container>
			<Container className="my-5">
				<Row className="mx-auto">
					<div className="my-3"></div>
					<Col sm={12} md={6} lg={3} className="info border rounded mx-auto p-5">
						<Image src="https://i.ibb.co/jM5yRyW/pngtree-vector-location-icon-png-image-317888-removebg-preview.png" className="img-fluid text-black image-icon" alt="Responsive image" />
						<h3>Address</h3>

						<h5 className="text-secondary">Dhaka, Bangladesh</h5>
					</Col>
					<Col sm={12} md={6} lg={3} className="info  border rounded  p-5  mx-auto">
						<Image src="https://i.ibb.co/cDXmnn6/pngtree-email-icon-png-image-1757854-removebg-preview.png" className="img-fluid text-black image-icon" alt="Responsive image" />
						<h3>Email & Phone</h3>
						<h5 className="text-secondary">support@dailyneed.com</h5>
						<h5 className="text-secondary">+880183363763</h5>
					</Col>

					<Col sm={12} md={6} lg={3} className="info  border rounded  p-5  mx-auto">
						<Image src="https://i.ibb.co/JRYythc/1024px-Noun-Project-Network-icon-244889-svg.png" className="img-fluid text-black image-icon" alt="Responsive image" />
						<h3>Social Connection</h3>
						<div className="social ">
							<p>Get connected with us on social networks:</p>
							<a href="https://www.linkedin.com/in/sultanamehe/">
								<ImLinkedin className="ms-3 text-black" />
							</a>
							<a href="https://www.facebook.com/sultanamehe/">
								<ImFacebook2 className="ms-3 text-black" />
							</a>
							<a href="https://twitter.com/sultana_mehe">
								<ImTwitter className="ms-3 text-black" />
							</a>
							<a href="mailto:sultanamehe01@gmail.com">
								<ImMail className="ms-3 text-black" />
							</a>
						</div>
					</Col>
					<Col sm={12} md={6} lg={3} className="info  border rounded  p-5  mx-auto">
						<Image src="https://i.ibb.co/rdRDyNr/475669.png" className="img-fluid text-black image-icon" alt="Responsive image" />
						<h3>Open Hour</h3>
						<h5 className="text-secondary">Sat - Thu At 10.00Am to 10.00PM</h5>
					</Col>
				</Row>
			</Container>
		</Container>
		</>
	);
};

export default ContactUs;
