import { NavLink } from 'react-router-dom'
import './menu.css'

const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/login', label: 'Login' },
  { path: '/user', label: 'User' },
  { path: '/register', label: 'Register' },
  { path: '/product', label: 'Product' },
]

const Menu = () => {
  return (
    <nav className="app-menu">
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            isActive ? 'menu-link active' : 'menu-link'
          }
          end={item.path === '/'}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Menu
