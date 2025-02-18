import { Link } from "react-router";
function Header() {

    return (
        <div>
            <header className="header">
              <img className="logo" src="./src/assets/brand/TICOM - white.svg" alt="The Internet Community" />
                <ul className="nav-list">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/pages'}>Pages</Link></li>
                    <li><Link to={'/article'}>Article</Link></li>
                    <li><Link to={'/'}>Account</Link></li>
                    <li><Link to={'/'}>About</Link></li>
                </ul>
            </header>
        </div>
    );
}

export default Header;