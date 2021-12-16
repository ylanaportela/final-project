import { Link } from "react-router-dom";
import './menu.css'
import Logo from '../../assets/Logo.svg'

const Menu = () =>{
    return(
        <ul className="menu">
            <li>
                <Link to='/'><img src={Logo} className="logo" /></Link>
            </li>
            <li>
                <Link to='/others'>Outros</Link>
            </li>
            <li>
                <Link to='/newspaper'>News Paper</Link>
            </li>
            <li>
                <Link to='/about'>Sobre</Link>
            </li>
            <li>
                <Link to='/contact'>Contato</Link>
            </li>
        </ul>
    )
}

export default Menu