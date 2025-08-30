import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <div style={{marginTop:'auto', display:'flex', justifyContent:'space-between'}}>
        <Link to={`/product/${product._id}`}>View</Link>
        <button onClick={() => addToCart(product)}>Add</button>
      </div>
    </div>
  );
}
