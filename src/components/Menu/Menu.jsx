import './menu.css'
import Logo from '../../assets/Logo.svg'



const Menu = () =>{
    return(
        <ul className="menu">
            <li>
                <a href="#home" className="item"><img src={Logo} className="logo" alt="logo" /></a>
            </li>
            <li>
                <a href="#others" className="item">Outros</a>
            </li>
            <li>
            <a href="#newsletter" className="item">NewsLetter</a>
            </li>
            <li>
            <a href="#sobre" className="item">Sobre</a>
            </li>
        </ul>
    )
}

export default Menu