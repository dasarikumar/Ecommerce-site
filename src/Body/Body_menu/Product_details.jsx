import React, { useState } from 'react';

const products = [
  {
    id: 1,
    title: 'Smart Watch',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=150&q=80',
    price: 199.99,
  },
  {
    id: 2,
    title: 'Wireless Headphones',
    image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=150&q=80',
    price: 149.99,
  },
  {
    id: 3,
    title: 'Gaming Mouse',
    image:
      'https://images.unsplash.com/photo-1585386959984-a4155221e1f6?auto=format&fit=crop&w=150&q=80',
    price: 79.99,
  },
];

const ProductDetails = () => {
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {})
  );
  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [discountPercent, setDiscountPercent] = useState(0);

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, Number(value)),
    }));
  };

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === 'SAVE10') {
      setDiscountPercent(10);
      setCouponApplied(true);
      alert('Coupon applied: 10% discount!');
    } else {
      setDiscountPercent(0);
      setCouponApplied(false);
      alert('Invalid coupon code.');
    }
  };

  const baseSubtotal = products.reduce(
    (sum, p) => sum + p.price * quantities[p.id],
    0
  );

  const discountAmount = (baseSubtotal * discountPercent) / 100;
  const subtotal = (baseSubtotal - discountAmount).toFixed(2);

  return (
    <section
      className="product-details-section"
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        width: '100vw',
        boxSizing: 'border-box',
        backgroundColor: '#fff',
      }}
    >
      <h2>Product Details</h2>

      <table
        className="product-table"
        style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}
      >
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ textAlign: 'left', padding: '8px' }}>Product</th>
            <th style={{ padding: '8px' }}>Price</th>
            <th style={{ padding: '8px' }}>Quantity</th>
            <th style={{ padding: '8px' }}>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px' }}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
                <span>{product.title}</span>
              </td>
              <td style={{ textAlign: 'center', padding: '8px' }}>
                ${product.price.toFixed(2)}
              </td>
              <td style={{ textAlign: 'center', padding: '8px' }}>
                <input
                  type="number"
                  min="1"
                  value={quantities[product.id]}
                  onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                  style={{ width: '60px', padding: '4px', fontSize: '16px' }}
                />
              </td>
              <td style={{ textAlign: 'center', padding: '8px' }}>
                ${(product.price * quantities[product.id]).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="coupon-section" style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter coupon code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          style={{ padding: '8px', width: '60%', marginRight: '10px', fontSize: '16px' }}
        />
        <button
          onClick={applyCoupon}
          style={{
            padding: '8px 16px',
            backgroundColor: '#0073e6',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Apply Coupon
        </button>
      </div>

      <div
        className="checkout-summary"
        style={{
          backgroundColor: '#f9f9f9',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          marginBottom: '30px',
        }}
      >
        <h3>Checkout Summary</h3>
        <p>
          <strong>Total Products:</strong> {products.length}
        </p>
        <p>
          <strong>Total Quantity:</strong>{' '}
          {Object.values(quantities).reduce((a, b) => a + b, 0)}
        </p>
        <p>
          <strong>Total Price:</strong> ${subtotal}
        </p>
        <p>
          <strong>Coupon Applied:</strong> {couponApplied ? coupon.toUpperCase() : 'None'}
        </p>
      </div>

      <div className="buttons-section" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={() => alert('Back to products clicked')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#ccc',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Back to Products
        </button>
        <button
          onClick={() => alert('Proceeding to payment...')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
};

export default ProductDetails;
