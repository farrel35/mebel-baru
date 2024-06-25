import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar, faThumbsUp, faHandshake, faMedal, faCircleCheck, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "../css/Body.css";
import heroImage from "../images/baru.png";
import banner1 from "../images/design1.png";
import banner2 from "../images/design2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCart } from "../components/CartContext";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    // Fetch products
    axios
      .get("https://szdn6rxb-4000.asse.devtunnels.ms/products")
      .then((response) => {
        // Check if response data is an object with a payload array
        if (Array.isArray(response.data.payload)) {
          setProducts(response.data.payload); // Set the payload array to products state
        } else {
          console.error("Returned data is not an array:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching the products:", error);
      });

    // Fetch categories
    axios
      .get("https://szdn6rxb-4000.asse.devtunnels.ms/category")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setCategories(response.data);
        } else {
          console.error("Returned data is not an array:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching the categories:", error);
      });

    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to handle adding a product to cart
  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    // Implement your addToCart logic here
  };

  return (
    <>
      <div>
        <div className="container">
          {/* Bagian Why Choose Us */}
          <section id="why-choose-us" className="why-choose-us-section">
            <div className="row">
              <h2>
                Our <span>Service</span>
              </h2>
              <div className="col-md-3" data-aos="fade-up">
                <div className="card why-choose-us-card card-transition">
                  <div className="icon-wrapper mt-3">
                    <FontAwesomeIcon icon={faMedal} size="2x" className="icon" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Kualitas</h5>
                    <p className="card-text">Kami menyediakan produk berkualitas tinggi.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3" data-aos="fade-up" data-aos-delay="100">
                <div className="card why-choose-us-card card-transition">
                  <div className="icon-wrapper mt-3">
                    <FontAwesomeIcon icon={faHandshake} size="2x" className="icon" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Pelayanan</h5>
                    <p className="card-text">Memberikan layanan pelanggan yang terbaik.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
                <div className="card why-choose-us-card card-transition">
                  <div className="icon-wrapper mt-3">
                    <FontAwesomeIcon icon={faThumbsUp} size="2x" className="icon" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Variasi</h5>
                    <p className="card-text">Berbagai pilihan yang sesuai dengan kebutuhan Anda.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
                <div className="card why-choose-us-card card-transition">
                  <div className="icon-wrapper mt-3">
                    <FontAwesomeIcon icon={faSackDollar} size="2x" className="icon" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Harga Terjangkau</h5>
                    <p className="card-text">Dapatkan produk hebat dengan harga terjangkau.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section id="hero" className="hero p-5">
          <div className="hero-image" data-aos="zoom-in-up">
            <img src={heroImage} alt="why chose us" />
          </div>
          <div className="hero-content " data-aos="zoom-in-down">
            <h2>
              {" "}
              <span>Kualitas Terbaik </span> untuk Kebutuhan Furnitur Anda
            </h2>
            <p> Kami mengutamakan kualitas dalam setiap produk furnitur kami. Berikut adalah keunggulan produk kami dalam memenuhi kebutuhan ruang Anda.</p>
            <ul className="hero-features">
              <li>
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#294b29" }} /> Desain Elegan dan Berkualitas Terbaik
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#294b29" }} /> Bahan Baku Berkualitas Tinggi dan Ramah Lingkungan
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#294b29" }} /> Jaminan Kepuasan Pelanggan Sepenuhnya
              </li>
            </ul>
            <Link to="/all-products" className="btn btn-hero">
              Belanja Sekarang
            </Link>
          </div>
        </section>
        <div className="container">
          <section id="banner">
            <div className="row mt-5 mb-5">
              <div className="col-12 col-md-6 mb-3 mb-lg-0">
                <div
                  className="py-5 px-3 rounded"
                  style={{
                    background: `url(${banner1}) no-repeat`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div>
                    <h3 className="fw-bold mb-1">Sofa</h3>
                    <p className="mb-4">
                      Get Upto
                      <span className="fw-bold">30%</span>
                      Off
                    </p>
                    <a href="#!" className="btn btn-dark">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-3 mb-lg-0">
                <div
                  className="py-5 px-3 rounded"
                  style={{
                    background: `url(${banner2}) no-repeat`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div>
                    <h3 className="fw-bold mb-1">Meja &amp; Kursi</h3>
                    <p className="mb-4">
                      Get Upto
                      <span className="fw-bold">30%</span>
                      Off
                    </p>
                    <a href="#!" className="btn btn-dark">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Category Section */}
          <section id="category">
            <h1 className="h1-center">Kategori</h1>
            <div className="row">
              {/* Mapping through categories */}
              {categories.map((category, index) => (
                <div className="col-md-3" key={index}>
                  <div className="card card-transition">
                    <Link to={`/category/${category}`}>
                      <img
                        src={`https://szdn6rxb-4000.asse.devtunnels.ms/category${index + 1}.jpg`} // Placeholder for category image
                        className="card-img-top"
                        alt={category}
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{category}</h5>
                      <p className="card-text">Description of {category}.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bagian Produk Unggulan */}
          <section id="featured-products">
            <h1 className="h1-center">Produk Unggulan</h1>
            <div className="row">
              {currentProducts.map((product) => (
                <div className="col-md-3 mb-3" key={product.id_product}>
                  <div className="card card-transition">
                    <img src={`https://szdn6rxb-4000.asse.devtunnels.ms/${product.image}`} className="card-img-top" alt={product.product_name} />

                    <div className="card-body">
                      <h5 className="card-title">{product.product_name}</h5>

                      <p className="card-text">Price: ${product.price}</p>
                      <p className="card-text">Stock: {product.stock}</p>
                      <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
                        <FontAwesomeIcon icon={faCartPlus} className="me-2" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Bagian FAQ */}
        <div className="container">
          <section id="faq" className="faq-section" data-aos="fade-up">
            <h1 className="faq-heading">
              Frequently Asked <span className="highlight-text">Question</span>
            </h1>
            <h5 className="faq-subheading">Berikut adalah beberapa pertanya terkait Mebelin Furniture</h5>
            <div className="faq-grid">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item" data-aos="flip-up">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Apa jenis bahan yang digunakan untuk produk furniture?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">Kami menggunakan berbagai jenis bahan berkualitas tinggi termasuk kayu solid, kayu lapis, MDF, dan bahan ramah lingkungan lainnya untuk memastikan daya tahan dan keindahan produk.</div>
                  </div>
                </div>
                <div className="accordion-item" data-aos="flip-up">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Apa saja jenis furniture yang Anda jual?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">Kami menjual berbagai macam furniture untuk semua ruangan di rumah Anda</div>
                  </div>
                </div>
              </div>
              <div className="accordion" id="faqAccordion2">
                <div className="accordion-item" data-aos="flip-up">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Bagaimana cara merawat produk furniture?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion2">
                    <div className="accordion-body">
                      Untuk menjaga keindahan dan keawetan furniture, kami menyarankan untuk membersihkannya dengan kain lembut dan kering secara teratur dan menghindari penggunaan bahan kimia keras. Kami juga menyediakan panduan perawatan
                      spesifik untuk setiap produk.
                    </div>
                  </div>
                </div>
                <div className="accordion-item" data-aos="flip-up">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Apakah Anda menawarkan layanan pengiriman?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion2">
                    <div className="accordion-body">
                      Ya, kami menawarkan layanan pengiriman ke seluruh Indonesia dengan biaya yang bervariasi tergantung lokasi. Kami juga menawarkan pengiriman gratis untuk pesanan di atas jumlah tertentu.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Body;
