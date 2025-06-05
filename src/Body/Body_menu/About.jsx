import React from 'react';

const About = () => {
  return (
    <section
      className="about-section"
      style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}
    >
      {/* Our Story Section */}
      <div
        className="story-section"
        style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '60px',
        }}
      >
        <div
          className="story-content"
          style={{
            flex: '1 1 400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h2 style={{ marginBottom: '20px' }}>Our Story</h2>
          <ul
            style={{
              listStylePosition: 'inside',
              textAlign: 'left',
              paddingRight: '20px',
              direction: 'rtl',
              lineHeight: 1.6,
              listStyleType: 'none',
            }}
          >
            <li>Founded in 2020 with a vision to innovate</li>
            <li>Customer-first approach from the beginning</li>
            <li>Expanded to 15+ countries</li>
            <li>Partnered with global tech leaders</li>
            <li>Recognized for sustainability</li>
            <li>Driven by user feedback and data</li>
            <li>Constantly improving our platform</li>
          </ul>
        </div>
        <div className="story-image" style={{ flex: '1 1 400px' }}>
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="Our Story"
            style={{ width: '100%', borderRadius: '10px', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Stats Section */}
      <div
        className="stats-section"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '60px',
          flexWrap: 'wrap',
        }}
      >
        {[
          { icon: '👥', title: '1.5K Followers', desc: 'Active community' },
          { icon: '🛍️', title: '3K Products', desc: 'Wide product range' },
          { icon: '🧑‍🤝‍🧑', title: '10K Customers', desc: 'Loyal customers' },
          { icon: '🌍', title: '2M Visitors', desc: 'Global reach annually' },
        ].map(({ icon, title, desc }, i) => (
          <div
            key={i}
            className="stat-card"
            style={{
              flex: '1 1 200px',
              background: '#f9f9f9',
              padding: '20px',
              borderRadius: '12px',
              textAlign: 'center',
            }}
          >
            <div
              className="stat-icon"
              style={{ fontSize: '36px', marginBottom: '10px' }}
            >
              {icon}
            </div>
            <h3 style={{ marginBottom: '8px' }}>{title}</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>{desc}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="team-section" style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Meet Our Team</h2>
        <div
          className="team-cards"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap',
          }}
        >
          {[
            {
              img: 'https://randomuser.me/api/portraits/women/65.jpg',
              name: 'Alice Green',
              role: 'CEO',
            },
            {
              img: 'https://randomuser.me/api/portraits/men/75.jpg',
              name: 'Robert Black',
              role: 'CTO',
            },
            {
              img: 'https://randomuser.me/api/portraits/women/42.jpg',
              name: 'Laura White',
              role: 'Product Manager',
            },
          ].map(({ img, name, role }, i) => (
            <div
              key={i}
              className="team-card"
              style={{
                flex: '1 1 250px',
                background: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                borderRadius: '15px',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              <img
                src={img}
                alt={name}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '15px',
                }}
              />
              <h4 style={{ marginBottom: '5px' }}>{name}</h4>
              <p style={{ color: '#888', marginBottom: '15px' }}>{role}</p>
              <div
                className="social-icons"
                style={{
                  fontSize: '18px',
                  color: '#555',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '15px',
                }}
              >
                <span role="img" aria-label="Facebook" style={{ cursor: 'pointer' }}>
                  📘
                </span>
                <span role="img" aria-label="Twitter" style={{ cursor: 'pointer' }}>
                  🐦
                </span>
                <span role="img" aria-label="LinkedIn" style={{ cursor: 'pointer' }}>
                  🔗
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Section */}
      <div
        className="feature-section"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        {[
          {
            icon: '🎧',
            title: 'Customer Service',
            desc: '24/7 friendly support for all users.',
          },
          {
            icon: '🚚',
            title: 'Free Delivery',
            desc: 'Enjoy free shipping on select products.',
          },
          {
            icon: '💰',
            title: 'Money Back Guarantee',
            desc: 'Not satisfied? Get your money back.',
          },
        ].map(({ icon, title, desc }, i) => (
          <div
            key={i}
            className="feature-card"
            style={{
              flex: '1 1 250px',
              background: '#f9f9f9',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              fontSize: '50px',
              lineHeight: 1,
            }}
          >
            <div style={{ marginBottom: '15px' }}>{icon}</div>
            <h4 style={{ marginBottom: '10px' }}>{title}</h4>
            <p style={{ color: '#666', fontSize: '14px' }}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
