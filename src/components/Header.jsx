import { Link } from "react-router";
function Header() {

    return (
        <div>
            <header className="header">
                <Link to={'/'}>
                    <img className="logo" src="./src/assets/brand/TICOM - white.svg" alt="The Internet Community" />
                </Link>
                <ul className="nav-list">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/pages'}>Pages</Link></li>
                    <li><Link to={'/article'}>Articles</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/account'}>Dashboard</Link></li>
                </ul>
            </header>
        </div>
    );
}

export default Header;