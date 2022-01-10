import React from 'react';
import { Image } from 'react-bootstrap';
import { ImFacebook2, ImTwitter, ImLinkedin, ImMail } from 'react-icons/im';
import payment from '../../images/payment.png';
import './Footer.css';
const Footer = () => {
   
    return (
        <div>
			<footer className="footer">
				<div className="container">
					<div className="row mb-5 pb-3 no-gutters">
						<div className="col-md-4 mb-md-0 mb-4 d-flex">
							<div className="con con-1 w-100 py-5">
								<div className="con-info w-100 text-center">
									<div className="icon d-flex align-items-center justify-content-center">
										<span className="ion-ios-call"></span>
									</div>
									<div className="text">
										<span>+8801812345678</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-md-0 mb-4 d-flex">
							<div className="con con-2 w-100 py-5">
								<div className="con-info w-100 text-center">
									<div className="icon d-flex align-items-center justify-content-center">
										<span className="ion-ios-mail"></span>
									</div>
									<div className="text">
										<span>support@dailyneed.com</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-md-0 mb-4 d-flex">
							<div className="con con-3 w-100 py-5">
								<div className="con-info w-100 text-center">
									<div className="icon d-flex align-items-center justify-content-center">
										<span className="ion-ios-pin"></span>
									</div>
									<div className="text">
										<span>Dhaka , Bangladesh</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-7">
							<div className="row">
								<div className="col-md-4 mb-md-0 mb-4">
									<h2 className="footer-heading">About</h2>
									<ul className="list-unstyled">
										<li>
											<a href="https://daily-need.com" className="d-block text-decoration-none">
												Out story
											</a>
										</li>
										<li>
											<a href="https://daily-need.com" className="d-block text-decoration-none">
												Awards
											</a>
										</li>
										<li>
											<a href="https://daily-need.com" className="d-block text-decoration-none">
												Our Team
											</a>
										</li>
										<li>
											<a href="https://daily-need.com" className="d-block text-decoration-none">
												Career
											</a>
										</li>
									</ul>
								</div>
								<div className="col-md-4 mb-md-0 mb-4">
									<h2 className="footer-heading">Company</h2>
									<ul className="list-unstyled">
										<li>
											<a href="https://daily-need.com" className="d-block text-decoration-none">
												Our services
											</a>
										</li>
										<li>
											<a href="https://daily-need.com" className="d-block text-decoration-none">
												Clients
											</a>
										</li>
										<li>
											<a href="https://daily-need.com" className="d-block text-decoration-none">
												Contact
											</a>
										</li>
										<li>
											<a href="https://daily-need.com" className="d-block text-decoration-none">
												Press
											</a>
										</li>
									</ul>
								</div>
								<div className="col-md-4 mb-md-0 mb-4">
									<h2 className="footer-heading">Resources</h2>
									<ul className="list-unstyled ">
										<li>
											<a href="https://daily-need.com" className="d-block text-decoration-none">
												Blog
											</a>
										</li>
										<li>
											<a href="https://daily-need.com" className="d-block text-decoration-none">
												Newsletter
											</a>
										</li>
										<li>
											<a href="https://daily-need.com" className="d-block text-decoration-none">
												Privacy Policy
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-5 mb-md-0 mb-4">
							<h2 className="footer-heading">Subscribe</h2>
							<form action="#" className="subscribe-form">
								<div className="form-group d-flex">
									<input type="text" className="form-control rounded-left" placeholder="Enter email address" />
									<button type="submit" className="form-control submit rounded-right">
										Subscribe
									</button>
								</div>
								<span className="subheading">Get up to date in your mailbox</span>
							</form>
						</div>
					</div>
					<div className="col">
						<Image src={payment} className="img-fluid intro-img w-300 h-300" alt="Responsive image" />
					</div>
					<div className="row mt-5 pt-4 border-top">
						<div className="col-md-6 col-lg-8 mb-md-0 mb-4">
							<p className="copyright mb-0">
								Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved. | This template is made with <i className="ion-ios-heart" aria-hidden="true"></i> by <a href="https://daily-need.com">Daily Need</a>
							</p>
						</div>
						<div className="col-md-6 col-lg-4 text-md-right">
							<ul className="ftco-footer-social p-0">
								<ImFacebook2 className="ms-3 cart" />

								<ImTwitter className="ms-3 cart" />

								<ImLinkedin className="ms-3 cart" />

								<ImMail className="ms-3 cart" />
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</div>
    );
};

export default Footer;