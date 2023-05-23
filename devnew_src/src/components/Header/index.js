import {Link} from 'react-router-dom';
import "./header.css"

function Header() {
    return (
<header className="header">
    <Link to="/"><h2>Dev<strong className="titulo_destaque">Performance</strong></h2></Link>
    <div classeName="links">
        
        <Link to="/login">Login</Link>
        <Link to="/performance">Performance</Link>
        <Link to="/sobre">Sobre Nós</Link>
        
    </div>
</header>
    )
}

export default Header;