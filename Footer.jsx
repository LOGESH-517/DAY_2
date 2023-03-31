import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'white', padding: '20px 0', textAlign: 'center',marginTop:"14vh" }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          <li style={{ display: 'inline-block', marginRight: '20px' }}>
            <a href="#" id='one'>About Us</a>
          </li>
          <li style={{ display: 'inline-block', marginRight: '20px' }}>
            <a href="#" id='two'>FAQs</a>
          </li>
          <li style={{ display: 'inline-block' }}>
          </li>
            <a href="#" id='three'>Contact Us</a>
        </ul>
      </div>
      <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        &copy; {new Date().getFullYear()} My E-Commerce Website. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
