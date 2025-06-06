import React, { useState, useMemo } from 'react';
import voucher from  '../assets/voucher.png'


function useDemoRouter(initialPath) {
  const [pathname, setPathname] = useState(initialPath);
  return useMemo(() => ({
    pathname,
    searchParams: new URLSearchParams(),
    navigate: (path) => setPathname(String(path)),
  }), [pathname]);
}

function Skeleton({ height }) {
  return (
    <div
      className="skeleton"
      style={{ height: `${height}px`, width: '100%' }}
    />
  );
}

function SidebarDropdown({ label, items }) {
  const [open, setOpen] = useState(false);

  return (
    <li className={`dropdown-menu ${open ? 'open' : ''}`}>
      <div className="dropdown-label" onClick={() => setOpen(!open)}>
        <span>{label}</span>
        <span className={`line-arrow ${open ? 'open' : ''}`} />
      </div>
      {open && (
        <ul className="nested-list">
          {items.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Aside_menu() {
  const router = useDemoRouter('/dashboard');

  return (
    <div className="dashboard-layout" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',gap: '100px', }}>
      <aside className="sidebar">
        <h4>Main Items</h4>
        <ul>
          <SidebarDropdown
            label="Womens Faction"
            items={['Host a Contest', 'Host Ideathon', 'Host Hackathon']}
          />
          <SidebarDropdown
            label="Mens Faction"
            items={['Join a Contest', 'Join Ideathon', 'Join Hackathon']}
          />
          <li>📊 Dashboard</li>
          <li>🛒 Orders</li>
        </ul>
        <hr />
        <h4>Analytics</h4>
        <ul>
          <li>📈 Reports
            <ul className="nested-list">
              <li>📄 Sales</li>
              <li>📄 Traffic</li>
            </ul>
          </li>
          <li>🔗 Integrations</li>
        </ul>
      </aside>

      <main className="page-container">
        <div className="grid">
          {/* <Skeleton height={14} />
          <Skeleton height={14} />
          <div className="col-4"><Skeleton height={100} /></div>
          <div className="col-8"><Skeleton height={100} /></div>
          <Skeleton height={150} />
          <Skeleton height={14} />
          {[...Array(4)].map((_, index) => (
            <div className="col-3" key={index}>
              <Skeleton height={100} />
            </div>
          ))} */}

          <div>
            <img src={voucher} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
}
