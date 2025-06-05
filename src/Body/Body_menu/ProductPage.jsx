import React from 'react';

const ProductPage = () => {
  const productImageURL =
    'https://images.unsplash.com/photo-1606813909344-79734a9f01b6?auto=format&fit=crop&w=300&q=80';

  const relatedProducts = [
    {
      name: 'MULTI HV-G92 Gamepad',
      price: '$100',
      reviews: '(450)',
      sold: '(40)',
      image:
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'AK-500 Mixed Keyboard',
      price: '$160',
      reviews: '(350)',
      sold: '(75)',
      image:
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=200&q=80', // keyboard image
    },
    {
      name: 'IPS LCD Gaming Monitor',
      price: '$370',
      reviews: '(440)',
      sold: '(69)',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&q=80', // monitor image
    },
    {
      name: 'RGB Rapid CPU Cooler',
      price: '$150',
      reviews: '(370)',
      sold: '(65)',
      image:
        'https://images.unsplash.com/photo-1615195392161-88f51dcd8c8f?auto=format&fit=crop&w=200&q=80', // cooler image
    },
  ];

  return (
    <div
      style={{
        margin: '10px',
        padding: '10px 8px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          gap: '16px',
          marginBottom: '10px',
        }}
      >
        
        <div
          style={{
            flex: '1 1 300px',
            minHeight: '180px',
            background: '#eee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '6px',
            overflow: 'hidden',
          }}
        >
          <img
            src={productImageURL}
            alt="Havic HV G-92 Gamepad"
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </div>

        
        <div
          style={{
            flex: '1 1 300px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '6px',
          }}
        >
          <h1
            style={{
              fontSize: '22px',
              fontWeight: '700',
              marginBottom: '4px',
            }}
          >
            Havic HV G-92 Gamepad
          </h1>

          <p
            style={{
              fontSize: '18px',
              fontWeight: '700',
              marginTop: 0,
              marginBottom: '10px',
              color: '#0070f3',
            }}
          >
            $192.00
          </p>

          <p style={{ fontSize: '14px', lineHeight: '1.4', marginBottom: '10px' }}>
            Hospitalised a Controller that high-quality vinyl with all charmed colorboards was now
            publicly then install & renew homeowner/streamer locations.
          </p>

          <hr style={{ margin: '6px 0', width: '100%' }} />

          
          <div style={{ width: '100%', marginBottom: '10px' , textAlign: 'left' }}>
            <h4 style={{ margin: '4px 0' }}>Colours:</h4>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['#000000', '#ff0000', '#0000ff'].map((color, i) => (
                <div
                  key={i}
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: color,
                    border: '1px solid #ccc',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                  title={color}
                />
              ))}
            </div>
          </div>

          
          <div
            style={{
              width: '100%',
              display: 'flex',
              gap: '15px',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <div>
              <h4 style={{ margin: '4px 0' }}>Size:</h4>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['XS', 'S', 'M', 'L'].map((size) => (
                  <button
                    key={size}
                    style={{
                      padding: '6px 12px',
                      border: '1px solid #0070f3',
                      borderRadius: '4px',
                      backgroundColor: '#fff',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '14px',
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

        
          <div
            style={{
              display: 'flex',
              gap: '20px',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <button
              style={{
                padding: '10px 24px',
                backgroundColor: '#0070f3',
                border: 'none',
                borderRadius: '6px',
                color: '#fff',
                cursor: 'pointer',
                fontWeight: '700',
                fontSize: '16px',
              }}
            >
              Buy Now
            </button>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                border: '1px solid #ccc',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '16px',
              }}
            >
              <button
                style={{
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  fontSize: '20px',
                  lineHeight: '1',
                  padding: 0,
                }}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span>2</span>
              <button
                style={{
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  fontSize: '20px',
                  lineHeight: '1',
                  padding: 0,
                }}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Delivery Info */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              width: '100%',
            }}
          >
            <div
              style={{
                border: '1px solid #0070f3',
                borderRadius: '8px',
                padding: '12px',
              }}
            >
              <h4 style={{ margin: '0 0 6px 0', color: '#0070f3' }}>Free Delivery</h4>
              <p style={{ fontSize: '14px', margin: 0 }}>
                Utilizing personal code/conditions available for use
              </p>
            </div>
            <div
              style={{
                border: '1px solid #0070f3',
                borderRadius: '8px',
                padding: '12px',
              }}
            >
              <h4 style={{ margin: '0 0 6px 0', color: '#0070f3' }}>Return Delivery</h4>
              <p style={{ fontSize: '14px', margin: 0 }}>
                Free Storage Delivery/Return, QoSId
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '16px',textAlign:"left" }}>Related Items:</h2>
        <div style={{ marginBottom: '20px' ,textAlign:"left" }}>
          <button
            style={{
              padding: '10px 24px',
              backgroundColor: '#0070f3',
              border: 'none',
              borderRadius: '6px',
              backgroundColor: 'gray',
             
              color: 'black',
              cursor: 'pointer',
             
              fontSize: '16px',
            }}
          >
            Add 10-Cats
          </button>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          {relatedProducts.map((product, index) => (
            <div
              key={index}
              style={{
                flex: '1 1 220px',
                backgroundColor: '#f9f9f9',
                padding: '12px',
                borderRadius: '8px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '6px' }}
              />
              <h3 style={{ fontSize: '16px', margin: 0, textAlign: 'center' }}>{product.name}</h3>
              <p style={{ fontWeight: '700', fontSize: '14px', margin: 0 }}>{product.price}</p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '12px',
                  color: '#555',
                  width: '100%',
                }}
              >
                <span>{product.reviews}</span>
                <span>{product.sold}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
