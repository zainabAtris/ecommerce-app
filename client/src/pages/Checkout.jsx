import { useCart } from '../context/CartContext';
import API from '../api/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { cart, clearCart, total } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      await API.post('/orders', { items: cart.map(
        p => ({
          productId: p._id,
          qty: p.qty
        })
      ) });
      clearCart();
      navigate('/');
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div style={{padding:'20px'}}>
      <h2>Checkout</h2>
      <ul>
        {cart.map(item => <li key={item._id}>{item.title} x {item.qty} - ${item.price * item.qty}</li>)}
      </ul>
      <p style={{fontWeight:'bold'}}>Total: ${total.toFixed(2)}</p>
      <button onClick={handleCheckout} disabled={loading} style={{marginTop:'10px'}}>
        {loading ? 'Processing...' : 'Place Order'}
      </button>
    </div>
  );
}
