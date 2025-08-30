import { useEffect, useState } from 'react';
import API from '../api/api';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get('/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid">
      {products.map(p => <ProductCard key={p._id} product={p} />)}
    </div>
  );
}
