// import { Link } from "react-router-dom";
import Link from "../Link";
import './menu.css'
import Logo from '../../assets/Logo.svg'


const Menu = () =>{
    return(
        <ul className="menu">
            <li>
                <Link to='/'><img src={Logo} className="logo" /></Link>
            </li>
            <li>
                <Link href="/others" className="item">Outros</Link>
            </li>
            <li>
            <Link href="/newsletter" className="item">NewsLetter</Link>
            </li>
            <li>
            <Link href="/about" className="item">Sobre</Link>
            </li>
        </ul>
    )
}

export default Menu