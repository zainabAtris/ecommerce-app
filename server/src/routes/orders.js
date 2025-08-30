import express from 'express';
import Order from '../models/Order.js';
import Product from '../models/Product.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// POST /api/orders  - create an order (simulated payment)
router.post('/', auth, async (req, res) => {
  try {
    const { items } = req.body || {}; // items: [{ productId, qty }]
    if (!items || !Array.isArray(items) || items.length === 0) return res.status(400).json({ error: 'items required' });

    // Validate and build order items
    const dbItems = await Promise.all(items.map(async (i) => {
      const p = await Product.findById(i.productId);
      if (!p) throw new Error('Product not found');
      const qty = Math.max(1, parseInt(i.qty || 1, 10));
      return { product: p._id, qty, priceAtPurchase: p.price };
    }));

    const total = dbItems.reduce((sum, it) => sum + (it.priceAtPurchase * it.qty), 0);

    const order = await Order.create({
      user: req.user.id,
      items: dbItems.map(({ product, qty, priceAtPurchase }) => ({ product, qty, priceAtPurchase })),
      total,
      status: 'paid'
    });

    res.status(201).json(order);
  } catch (e) {
    console.error(e);
    res.status(400).json({ error: e.message || 'Could not create order' });
  }
});

// GET /api/orders  - get orders for current user
router.get('/', auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('items.product');
    res.json(orders);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
