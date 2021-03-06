import { Component } from 'react';
import { Carousel, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import './team.css'

import { FaCheckCircle, FaOpencart, FaLinkedin, FaInstagram, FaCcVisa, FaAngellist, FaNewspaper, FaServicestack, FaTelegram, FaSignInAlt, FaBell, FaUsers, FaRocketchat, FaSignOutAlt, FaUserCircle, FaPlusCircle, FaRegEye, FaUpload, FaMedapps, FaTelegramPlane, FaUserCog, FaFacebook, FaRegSmile } from 'react-icons/fa'


class OurTeam extends Component {
	render() {
		return (
			<div>

				<section class="section-team">
					<div class="container">

						<div class="row justify-content-center text-center">
							<div class="col-md-8 col-lg-6">
								<div class="header-section">
									<h3 class="small-title">Our Experts</h3>
									<h2 class="title">Let's meet with our team members</h2>
								</div>
							</div>
						</div>

						<div class="row">

							<div class=" col-lg-4 col-xl-3">
								<div class="single-person">
									<div class="person-image">
										<img src="https://i.ibb.co/G2CBWvb/person1.jpg" alt="" />
										<span class="icon">
											<i class="fab fa-html5"></i>
										</span>
									</div>
									<div class="person-info">
										<h3 class="full-name">John Doe</h3>
										<span class="speciality">Web Developer</span>
										<div className="row">
											<ul>
												<Link title="youtube" target="_blank" to="https://www.youtube.com/"><FaServicestack style={{ color: "black", fontSize: "20px", marginRight: "7px" }} /></Link>
												<Link to="https://www.facebook.com/" target="_blank" title="Facebook"><FaTelegram style={{ color: "white", fontSize: "20px", marginRight: "7px" }} /></Link>
												<Link to="https://twitter.com" target="_blank" title="Twitter"><FaServicestack style={{ color: "white", fontSize: "20px", marginRight: "7px" }} /></Link>
												<Link title="instagram" target="_blank" to="https://www.instagram.com/"><FaServicestack style={{ color: "white", fontSize: "20px", marginRight: "7px" }} /></Link>
											</ul>
										</div>

									</div>
								</div>
							</div>

							<div class="col-sm-6 col-lg-4 col-xl-3">
								<div class="single-person">
									<div class="person-image">
										<img src="https://i.ibb.co/nbpNr4r/person2.jpg" alt="" />
										<span class="icon">
											<i class="fab fa-wordpress-simple"></i>
										</span>
									</div>
									<div class="person-info">
										<h3 class="full-name">Robert Smith</h3>
										<span class="speciality">WordPress Developer</span>
									</div>
									<div className="row">
										<ul>
											<Link title="youtube" target="_blank" to="https://www.youtube.com/"><FaServicestack style={{ color: "black", fontSize: "20px", marginRight: "7px" }} /></Link>
											<Link to="https://www.facebook.com/" target="_blank" title="Facebook"><FaTelegram style={{ color: "white", fontSize: "20px", marginRight: "7px" }} /></Link>
											<Link to="https://twitter.com" target="_blank" title="Twitter"><FaServicestack style={{ color: "white", fontSize: "20px", marginRight: "7px" }} /></Link>
											<Link title="instagram" target="_blank" to="https://www.instagram.com/"><FaServicestack style={{ color: "white", fontSize: "20px", marginRight: "7px" }} /></Link>
										</ul>
									</div>
								</div>
							</div>

							<div class="col-sm-6 col-lg-4 col-xl-3">
								<div class="single-person">
									<div class="person-image">
										<img src="https://i.ibb.co/25zdRMr/person3.jpg" alt="" />
										<span class="icon">
											<i class="fab fa-angular"></i>
										</span>
									</div>
									<div class="person-info">
										<h3 class="full-name">John Doe</h3>
										<span class="speciality">Angular Developer</span>
									</div>
								</div>
							</div>

							<div class="col-sm-6 col-lg-4 col-xl-3">
								<div class="single-person">
									<div class="person-image">
										<img src="https://i.ibb.co/w0ynr2Q/person4.jpg" alt="" />
										<span class="icon">
											<i class="fab fa-js"></i>
										</span>
									</div>
									<div class="person-info">
										<h3 class="full-name">John Smith</h3>
										<span class="speciality">Javascript Developer</span>
									</div>
								</div>
							</div>

						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default OurTeam;
