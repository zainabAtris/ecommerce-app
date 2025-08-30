import { useCart } from '../context/CartContext';

export default function CartItem({ item }) {
  const { updateQty, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
        <img src={item.image} alt={item.title} />
        <div>
          <h3>{item.title}</h3>
          <p>${item.price}</p>
        </div>
      </div>
      <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
        <input type="number" value={item.qty} min={1} 
               style={{width:'50px', padding:'5px', borderRadius:'5px'}}
               onChange={(e) => updateQty(item._id, Number(e.target.value))}/>
        <button onClick={() => removeFromCart(item._id)}>Remove</button>
      </div>
    </div>
  );
}
