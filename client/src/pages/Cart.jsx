import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, total } = useCart();

  if (cart.length === 0) return (
    <div style={{padding:'20px'}}>
      <h2>Your cart is empty</h2>
      <Link to="/">Go shopping</Link>
    </div>
  );

  return (
    <div style={{padding:'20px'}}>
      {cart.map(item => <CartItem key={item._id} item={item} />)}
      <h2 style={{marginTop:'10px', fontWeight:'bold'}}>Total: ${total.toFixed(2)}</h2>
      <Link to="/checkout"><button style={{marginTop:'10px'}}>Checkout</button></Link>
    </div>
  );
}
