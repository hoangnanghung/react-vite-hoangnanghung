import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div className='nav-link'>

        <ul>
            <li>
                <NavLink to="/user" className={({ isActive }) => isActive ? 'active' : ''}>
                User
                </NavLink>
            </li>
            <li>
                <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>
                Login
                </NavLink>
            </li>
            <li>
                <NavLink to="/register" className={({ isActive }) => isActive ? 'active' : ''}>
                Register
                </NavLink>
            </li>
            <li>
                <NavLink to="/product" className={({ isActive }) => isActive ? 'active' : ''}>
                Book
                </NavLink>
            </li>
            </ul>
    </div>
    
  )
}

export default Header
