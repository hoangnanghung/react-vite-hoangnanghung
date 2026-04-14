import './header.css';

const Header = () => {
    return(

        <ul>
            <li><Link  to="/user">User</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/product">Product</Link></li>
        </ul>
    )
}

export default Header