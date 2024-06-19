import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar, faThumbsUp, faHandshake, faMedal, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "../css/Body.css";
import heroImage from "../images/baru.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Body = () => {
  const productsWrapperRef = useRef(null);

  const scrollLeft = () => {
    productsWrapperRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    productsWrapperRef.current.scrollLeft += 300;
  };

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    // Fetch products
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the products:", error);
      });

    // Fetch categories
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the categories:", error);
      });
    AOS.init({
      duration: 1000,
    });
  }, []);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
      <div>
        <div className="container container-home">
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
        <section id="hero" class="hero p-5">
          <div class="hero-image" data-aos="zoom-in-up">
            <img src={heroImage} alt="why chose us" />
          </div>
          <div class="hero-content " data-aos="zoom-in-down">
            <h2>
              {" "}
              <span>Kualitas Terbaik </span> untuk Kebutuhan Furnitur Anda
            </h2>
            <p> Kami mengutamakan kualitas dalam setiap produk furnitur kami. Berikut adalah keunggulan produk kami dalam memenuhi kebutuhan ruang Anda.</p>
            <ul class="hero-features">
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
        <div className="container container-home">
          {/* <section id="about-us" className="about-us-section mt-5">
            <h1 className="h1-center"> Tentang Kami</h1>
            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading lh-1">Mebelin Furniture</h2>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, ut. Itaque quod vel incidunt, porro quo voluptate
                  hic, iusto voluptates fugit quis maiores adipisci dolorum quos
                  maxime dolorem sed nemo commodi modi in animi qui deserunt.
                  Nemo laboriosam molestias temporibus placeat harum suscipit
                  ipsum dolorum, eum libero quia facilis quae architecto
                  voluptatibus reprehenderit officia reiciendis. Nemo enim omnis
                  placeat recusandae qui magni commodi, rem debitis hic totam
                  tempora soluta, quis eos vero voluptatem, velit tenetur
                  consequatur? Tempora accusantium nesciunt id asperiores fuga
                  distinctio aut! Laborum culpa voluptatum alias aliquam
                  voluptates consequatur recusandae officiis dolore accusantium
                  in? Nostrum ullam eaque ex.
                  <br />
                </p>
              </div>
              <div className="col-md-5">
                <img
                  src="https://m.media-amazon.com/images/I/81UwP++piNL._AC_SL1500_.jpg"
                  alt="about-us"
                  width="450"
                  height="450"
                />
              </div>
            </div>
          </section> */}

          {/* Bagian Kategori */}
          <section id="category">
            {/* <hr /> */}
            <h1 className="h1-center">Kategori</h1>
            <div className="row">
              {categories.map((category, index) => (
                <div className="col-md-3" key={index}>
                  <div className="card card-transition">
                    <Link to={`/category/${category}`}>
                      <img
                        src={`https://fakestoreapi.com/img/category${index + 1}.jpg`} // Placeholder for category image
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
            {/* <hr /> */}
          </section>

          {/* Bagian Our Products */}
          <section id="our-products" className="our-products-section">
            <div className="our-products-header">
              <h1 className="h1-product">Produk Kami</h1>

              <Link to="/all-products" className="view-products-link">
                Lihat Semua Produk →
              </Link>
            </div>
            <div className="row">
              {currentProducts.map((product) => (
                <div className="col-md-3 mb-5" key={product.id}>
                  <div className="card our-produk-card">
                    <Link to={`/product/${product.id}`} className="card-link">
                      <img src={product.image} className="card-img-top" alt={product.title} />
                      <div className="card-body">
                        <h5 className="card-title-allproduct">{product.title}</h5>
                        <p className="card-text">
                          <strong>${product.price}</strong>
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sale */}
        <section id="sale" className="container-fluid"></section>

        {/* Bagian FAQ */}
        <section id="faq" className="faq-section container container-faq p-3" data-aos="fade-up">
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
    </>
  );
};

export default Body;
