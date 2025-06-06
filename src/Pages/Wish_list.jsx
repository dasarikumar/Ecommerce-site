import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Divider, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import Avatar from '@mui/material/Avatar';
import LanguageSelect from '../components/LanguageSelect';

const wishListCards = [
  {
    id: 1,
    title: 'Smart Watch',
    brand: 'FitBrand',
    price: '$99',
    discount: '20% OFF',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    title: 'Headphones',
    brand: 'SoundX',
    price: '$150',
    discount: '15% OFF',
    image:
      'https://images.unsplash.com/photo-1512499617640-c2f99935939a?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    title: 'Shoes',
    brand: 'Runner',
    price: '$120',
    discount: '30% OFF',
    image:
      'https://images.unsplash.com/photo-1528701800489-8c18e5e1f37b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    title: 'Bag',
    brand: 'TravelPro',
    price: '$80',
    discount: '10% OFF',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    title: 'Camera',
    brand: 'PhotoSnap',
    price: '$650',
    discount: '25% OFF',
    image:
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    title: 'Sunglasses',
    brand: 'SunX',
    price: '$60',
    discount: '5% OFF',
    image:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 7,
    title: 'Watch',
    brand: 'TimeMaster',
    price: '$200',
    discount: '40% OFF',
    image:
      'https://images.unsplash.com/photo-1515442261605-6627b511c4c4?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 8,
    title: 'Backpack',
    brand: 'HikePack',
    price: '$75',
    discount: '15% OFF',
    image:
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80',
  },
  // Added more cards
  {
    id: 9,
    title: 'Bluetooth Speaker',
    brand: 'SoundBlast',
    price: '$90',
    discount: '18% OFF',
    image:
      'https://images.unsplash.com/photo-1517495306984-0174665df8b4?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 10,
    title: 'Fitness Tracker',
    brand: 'FitTrack',
    price: '$70',
    discount: '12% OFF',
    image:
      'https://images.unsplash.com/photo-1519861537264-f93571568a3a?auto=format&fit=crop&w=400&q=80',
  },
];

const justForYouCards = [
  {
    id: 101,
    title: 'Laptop Pro',
    brand: 'TechBrand',
    price: '$1200',
    discount: '10% OFF',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 102,
    title: 'Wireless Mouse',
    brand: 'ClickTech',
    price: '$45',
    discount: '20% OFF',
    image:
      'https://images.unsplash.com/photo-1585079542280-9d4d52a8b9e1?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 103,
    title: 'Gaming Keyboard',
    brand: 'GamePro',
    price: '$80',
    discount: '18% OFF',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 104,
    title: 'Monitor',
    brand: 'ScreenMax',
    price: '$300',
    discount: '25% OFF',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 105,
    title: 'External HDD',
    brand: 'DataSafe',
    price: '$90',
    discount: '15% OFF',
    image:
      'https://images.unsplash.com/photo-1496180727794-817822f65950?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 106,
    title: 'USB Cable',
    brand: 'WireConnect',
    price: '$15',
    discount: '5% OFF',
    image:
      'https://images.unsplash.com/photo-1504439904037-0d6f48c0e86a?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 107,
    title: 'Smartphone',
    brand: 'PhoneX',
    price: '$650',
    discount: '12% OFF',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 108,
    title: 'Tablet',
    brand: 'TabTech',
    price: '$400',
    discount: '22% OFF',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
  },
  // Added more cards
  {
    id: 109,
    title: 'Smart Speaker',
    brand: 'VoiceTech',
    price: '$130',
    discount: '17% OFF',
    image:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 110,
    title: 'Drone',
    brand: 'SkyHigh',
    price: '$900',
    discount: '20% OFF',
    image:
      'https://images.unsplash.com/photo-1508610048659-47c8c1f9fccc?auto=format&fit=crop&w=400&q=80',
  },
];

const AutoScrollCarousel = ({ title, buttonText, cards, showAddToCart }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hide scrollbar styles */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="wishlist-wrapper" style={{ marginBottom: '40px' }}>
        <div
          className="wishlist-header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '15px',
          }}
        >
          <h2>{title}</h2>
          <button
            className="add-more-btn"
            style={{
              backgroundColor: '#0073e6',
              border: 'none',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {buttonText}
          </button>
        </div>

        <div style={{ position: 'relative' }}>
          <button
            onClick={scrollLeft}
            style={{
              position: 'absolute',
              left: 0,
              top: '40%',
              zIndex: 10,
              background: 'rgba(0,0,0,0.5)',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '8px 12px',
              borderRadius: '50%',
            }}
            aria-label="Scroll Left"
          >
            ‹
          </button>

          <div
            className="slider-container hide-scrollbar"
            ref={containerRef}
            style={{
              display: 'flex',
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              gap: '16px',
              padding: '10px 50px',
            }}
          >
            {cards.map((card) => (
              <div
                className="slider-card"
                key={card.id}
                style={{
                  minWidth: '220px',
                  background: '#fff',
                  borderRadius: '10px',
                  boxShadow: '0 2px 8px rgb(0 0 0 / 0.1)',
                  padding: '10px',
                  position: 'relative',
                }}
              >
                <div
                  className="image-wrapper"
                  style={{ position: 'relative', marginBottom: '10px' }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                    }}
                  />
                  <div
                    className="discount-tag"
                    style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      backgroundColor: '#ff4d4f',
                      color: '#fff',
                      padding: '2px 8px',
                      fontSize: '12px',
                      borderRadius: '5px',
                      fontWeight: 'bold',
                    }}
                  >
                    {card.discount}
                  </div>
                  <div
                    className="bin-icon"
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      cursor: 'pointer',
                      fontSize: '18px',
                    }}
                    title="Remove from Wishlist"
                    role="button"
                  >
                    🗑️
                  </div>
                </div>

                {showAddToCart && (
                  <button
                    className="add-to-cart-btn"
                    style={{
                      width: '100%',
                      backgroundColor: '#0073e6',
                      color: '#fff',
                      border: 'none',
                      padding: '8px 0',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      marginBottom: '10px',
                    }}
                  >
                    Add to Cart
                  </button>
                )}

                <div
                  className="product-info"
                  style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}
                >
                  <p
                    className="product-title"
                    style={{ fontWeight: 'bold', marginBottom: '6px' }}
                  >
                    {card.title}
                  </p>
                  <div
                    className="brand-price"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '14px',
                      color: '#555',
                    }}
                  >
                    <span className="product-brand">{card.brand}</span>
                    <span className="product-price">{card.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            style={{
              position: 'absolute',
              right: 0,
              top: '40%',
              zIndex: 10,
              background: 'rgba(0,0,0,0.5)',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '8px 12px',
              borderRadius: '50%',
            }}
            aria-label="Scroll Right"
          >
            ›
          </button>
        </div>
      </div>
    </>
  );
};

const Wishlist = () => {
  const navigate = useNavigate();
  const handleWishlist = () => {
    console.log('Wishlist clicked');
  };
  const handleAbout = () => {
    navigate('/about');
  };
  return (
    <div>
      <header style={{ display:'flex', flexDirection:'row' , justifyContent:'center', backgroundColor: '#000', textAlign: 'center' }}>
        <p style={{ color: '#fff'  }}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <Button variant="text" style={{ color: '#fff', borderColor: '#fff', marginLeft: '20px' }}>
          Shop Now
        </Button>
        <LanguageSelect display='flex' flexDirection='row' justifyContent='end' alignItems='end' />
      </header>
      <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center', marginTop:'20px' }}>
        <h3>Exclusive</h3>
        <Button variant="text" color="" style={{ marginRight: '10px' }}>
          Home
        </Button>
        <Button variant="text" color="" style={{ marginRight: '10px' }}>
          Products
        </Button>
        <Button onClick={handleAbout} variant="text" color="" style={{ marginRight: '10px' }}>
          About
        </Button>
        <Button variant="text" color="">
          Sign Up
        </Button>
        <div style={{ position: 'relative', width: '200px' }}>
          <SearchIcon style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', color: '#888' }} />
          <InputBase
            placeholder="What are you looking for?"
            style={{
              paddingLeft: '35px',
              border: '1px solid #ccc',
              borderRadius: '2px',
              width: '250px',
            }}
          />
        </div>
        <FavoriteIcon 
          onClick={handleWishlist}
          style={{ color: '#000', marginLeft: '10px', cursor: 'pointer' }} 
        />
        <CartIcon style={{ color: '#000', marginLeft: '10px' }} />
        <Avatar />
      </div>
      <Divider />
      <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <AutoScrollCarousel
          title="Wish List"
          buttonText="Add More"
          cards={wishListCards}
          showAddToCart={true}
        />
        <AutoScrollCarousel
          title="Just For You"
          buttonText="See All"
          cards={justForYouCards}
          showAddToCart={false}
        />
      </div>
    </div>
  );
};
export default Wishlist;
