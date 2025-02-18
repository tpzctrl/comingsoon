import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'; // Global styles

const ComingSoon = () => {
  return (
    <div className="coming-soon-container d-flex justify-content-center align-items-center min-vh-100">
      <div className="content-box text-center">
        {/* Profile Image */}
        <div className="profile-container">
        <img src="/IMG_4878.jpg" alt="Your Name" className="img-fluid rounded-circle profile-img" />

        </div>

        {/* Big Coming Soon Text with Animated Underline */}
        <h1 className="display-1 fw-bold text-uppercase">Coming Soon</h1>
        <div className="underline"></div>

        {/* Name and Bio */}
        <h2 className="mt-3 fw-semibold">Time Pattavarakorn</h2>
        <p className="lead">Chiang Mai University Demonstration School</p>

        {/* Instagram Handle */}
        <div className="social-links mt-4">
          <a href="https://www.instagram.com/tpzzzzzz._" className="social-icon">
            <i className="fab fa-instagram"></i>
            <span className="ms-2">tpzzzzzz._</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
