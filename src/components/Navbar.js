import Link from "next/link";


const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
			<div className="container">
				<Link className="navbar-brand text-white" href="/">
					Home
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
