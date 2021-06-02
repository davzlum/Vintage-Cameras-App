import React from 'react';
import './dashboard.scss';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <h1>Products</h1>
      <ul className="section-list">
        <li className="section-list__item">
          <Link to="/cameras">
            <img src="https://i.ibb.co/zxxcLpC/border-from-cameras-film-pink-background-23-2147852453.jpg" alt="cameras" />
            <span className="section-name">Cameras</span>
          </Link>
        </li>
        <li className="section-list__item">
          <img src="https://i.ibb.co/QbJPDPR/Camera-lenses-background-m.webp" alt="lenses" />
          <span className="section-name">Lenses</span>
        </li>
        <li className="section-list__item">
          <img src="https://i.ibb.co/SRmj1Kv/183824560-804076807188058-7912068979865351011-n.jpg" alt="films" />
          <span className="section-name">Films</span>
        </li>
      </ul>
    </>
  );
}

export default Dashboard;
