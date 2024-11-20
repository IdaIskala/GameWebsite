import '../styles/navigation.css'
import logo from '../assets/LogoNoBG.png'
import { NavLink } from "react-router-dom"

const Navigation = () => {


    return (

            <nav className='navigation'>
                <div className='navLeft'>
                    <img className='logoImage' src={logo} alt='company logo'></img>
                </div>

                <div className='navRight'>
                    <ul className='navList'>
                        <li><NavBarElement toURL='/' name='Home'/></li>
                        <li><NavBarElement toURL='/games' name='Games'/></li>
                        <li><NavBarElement toURL='/about' name='About'/></li>
                    </ul>
                    
                    
                </div>
            </nav>

    )
}

const NavBarElement = ({toURL, name}) => {
    return (
        <NavLink 
            to={toURL} 
            className='navLink linkNoDecor' 
            style={({ isActive }) => {
                return {
                color: isActive ? 'var(--blue)' : 'var(--white)',
                };
            }}
        >
            {name}
        </NavLink>
    )
}


export default Navigation