import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api/api';
import { useCart } from '../context/CartContext';

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    API.get(`/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <div style={{padding:'20px'}}>Loading...</div>;

  return (
    <div style={{display:'flex', flexDirection:'column', padding:'20px', gap:'20px'}}>
      <img src={product.image} alt={product.title} style={{maxWidth:'400px', borderRadius:'8px'}}/>
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p style={{fontWeight:'bold'}}>${product.price}</p>
        <button onClick={() => addToCart(product)} style={{marginTop:'10px'}}>Add to Cart</button>
      </div>
    </div>
  );
}
