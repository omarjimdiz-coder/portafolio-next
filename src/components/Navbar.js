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
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" href="/videos">
                                Videos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" href="/github">
                                Github
                            </Link>
                        </li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
