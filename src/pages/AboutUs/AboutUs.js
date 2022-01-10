import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import about from '../../images/about.png';
import Header from '../../Shared/Header/Head';
import './AboutUs.css';

const AboutUs = () => {
	return (
		<>
		<Header></Header>
		<Container>
			<Container>
				<div className="intro mt-5 pt-4">
					<Row>
						<Col md={6}>
							<div className="intro-text">
								<h1>
									Know more about,<span className="name">Daily Need.</span>
								</h1>
								<p>
								Daily Need is an e-commerce site. All types of laptops, headsets, smart watches can be found here. We do all product home delivery. Customers can purchase products through online payment. We always strive to provide good service to our customers.
								</p>
							</div>
							<br />
							<div>
								<p>
								We are offering quality products to our customers. We do not compromise on quality. We want to be in the hearts of our customers forever so our first priority is customer satisfaction.
								</p>
							</div>
						</Col>
						<Col md={6}>
							<Image src={about} className="img-fluid intro-img" alt="Responsive image" />
						</Col>
					</Row>
				</div>
			</Container>
			<Container className="my-5">
				<Row className="mx-auto">
					<hr />
					<Col sm={12} md={6} lg={3} className="about mx-auto p-5">
						<Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgwlonAT6sGyMgdwNquxF-krBQX2QtZbVhcRBjFbnOnIy5n3FJ" className="img-fluid text-center partner  " alt="Responsive image" />
						<h4>Ecology</h4>
						<p>Ecology is the study of organisms and how they interact with the environment around them. An ecologist studies the relationship between living things and their habitats. ... In addition to examining how ecosystems function, ecologists study what happens when ecosystems do not function normally</p>
					</Col>
					<Col sm={12} md={6} lg={3} className="about  p-5  mx-auto">
						<Image src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT4nwyU38makkavQDhVvi91IKxqjImlpS1andc1MzHCdGts1G7Z" className="img-fluid text-center partner " alt="Responsive image" />
						<h4>Innovations</h4>
						<p>The innovations include technological inventions such as wind turbines, photovoltaic cells, concentrated solar power, geothermal energy, ocean wave power and many other emerging innovations. These value innovation examples of disruptive technology will undoubtedly add value to sustainable development.</p>
					</Col>

					<Col sm={12} md={6} lg={3} className="about  p-5  mx-auto">
						<Image src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWkd4dFklm7daLFvNpSXVC8DqWSouqu0azvIFyZs4hQO5urqi8" className="img-fluid text-center partner " alt="Responsive image" />
						<h4>People</h4>
						<h6>People is an American weekly magazine that specializes in celebrity news and human-interest stories. It is published by Dotdash Meredith, a subsidiary of IAC</h6>
					</Col>
				</Row>
				<hr />
			</Container>
		</Container>
		</>
	);
};

export default AboutUs;
