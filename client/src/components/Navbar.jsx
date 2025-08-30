import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <Link to="/">E-Commerce</Link>
      <div>
        <Link to="/cart">Cart ({cart.length})</Link>
        {user ? (
          <>
            <span style={{marginLeft:'10px'}}>{user.name}</span>
            <button onClick={logout} style={{marginLeft:'10px'}}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{marginLeft:'10px'}}>Login</Link>
            <Link to="/register" style={{marginLeft:'10px'}}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
