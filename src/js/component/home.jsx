import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Nav />
			<div id='wrapper'>
				<Jumbotron />
				<div id="cardWrapper">
				<Card />
				<Card />
				<Card />
				<Card />
				</div>
			</div>
		</>

		
	);
};

const myNavbarStyle = {
	background: '#353C44',
};

const myJumbotronStyle = {
	background: '#eaecef',
	width: '1050px'
};

const myCardStyle = {
	width: "15.6rem",
	textAlign: 'center'
};

const Nav = () => {
	return (
		<nav className="navbar navbar-expand-lg" style={myNavbarStyle}>
			<div className="container-fluid">
				<a className="navbar-brand text-light" href="#">Start Boostrap</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link text-light active" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled">Service</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

const Jumbotron = () => {
	return (
		<div className="jumbotron m-2 p-4" style={myJumbotronStyle}>
			<h1 className="display-4">Welcome to react</h1>
			<p className="lead">React is the most popular rendering library in the world</p>
			<a className="btn btn-primary btn-lg" href="https://reactjs.org/" role="button">Go to the official website</a>
		</div>
	);
};

const Card = () => {
	return (
		<div className="card m-2" style={myCardStyle}>
			<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" class="btn btn-primary">Go somewhere</a>
				</div>
		</div>
	);
};

export default Home;

