import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Tentang Kami</h3>
            <p>Deskripsi singkat tentang perusahaan atau website Anda.</p>
          </div>
          <div className="col-md-4">
            <h3>Kontak</h3>
            <p>Email: example@example.com</p>
            <p>Telepon: 123-456-7890</p>
          </div>
          <div className="col-md-4">
            <h3>Ikuti Kami</h3>
            <ul className="social-links">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
