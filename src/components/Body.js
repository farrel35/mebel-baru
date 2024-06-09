import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/Body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSackDollar,
  faThumbsUp,
  faHandshake,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
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
  const productsPerPage = 12;

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
  }, []);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div>
      <section id="about-us" className="about-us-section container">
        <h1 className="h1-center"> Tentang Kami</h1>
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading lh-1">Mebelin Furniture</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              ut. Itaque quod vel incidunt, porro quo voluptate hic, iusto
              voluptates fugit quis maiores adipisci dolorum quos maxime dolorem
              sed nemo commodi modi in animi qui deserunt. Nemo laboriosam
              molestias temporibus placeat harum suscipit ipsum dolorum, eum
              libero quia facilis quae architecto voluptatibus reprehenderit
              officia reiciendis. Nemo enim omnis placeat recusandae qui magni
              commodi, rem debitis hic totam tempora soluta, quis eos vero
              voluptatem, velit tenetur consequatur? Tempora accusantium
              nesciunt id asperiores fuga distinctio aut! Laborum culpa
              voluptatum alias aliquam voluptates consequatur recusandae
              officiis dolore accusantium in? Nostrum ullam eaque ex.
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
      </section>

      {/* Bagian Why Choose Us */}
      <section id="why-choose-us" className="why-choose-us-section container">
        <hr />
        <div className="row">
          <div className="col-md-3">
            <div className="card why-choose-us-card card-transition">
              <FontAwesomeIcon icon={faMedal} size="10x" className="m-4" />

              <div className="card-body">
                <h5 className="card-title">Quality</h5>
                <p className="card-text">
                  We provide high-quality products that are built to last.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card why-choose-us-card">
              <FontAwesomeIcon icon={faHandshake} size="10x" className="m-4" />

              <div className="card-body">
                <h5 className="card-title">Service</h5>
                <p className="card-text">
                  Our team is dedicated to providing excellent customer service.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card why-choose-us-card">
              <FontAwesomeIcon icon={faThumbsUp} size="10x" className="m-4" />

              <div className="card-body">
                <h5 className="card-title">Variety</h5>
                <p className="card-text">
                  Choose from a wide range of options to suit your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card why-choose-us-card">
              <FontAwesomeIcon icon={faSackDollar} size="10x" className="m-4" />

              <div className="card-body">
                <h5 className="card-title">Affordability</h5>
                <p className="card-text">
                  Get great products at affordable prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Kategori */}
      <section id="category" className="container">
        <hr />
        <h1 className="h1-center">Kategori</h1>
        <div className="row">
          {categories.map((category, index) => (
            <div className="col-md-3" key={index}>
              <div className="card card-transition">
                <Link to={`/category/${category}`}>
                  <img
                    src={`https://fakestoreapi.com/img/category${
                      index + 1
                    }.jpg`} // Placeholder for category image
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
        <hr />
      </section>

      {/* Bagian Our Products */}
      <section id="our-products" className="our-products-section container">
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
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">
                    <strong>${product.price}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sale */}
      <section id="sale" className="container-fluid"></section>

      {/* Bagian Produk dengan navigasi */}
      <section className="products-container container">
        <h1 className="h1">Produk Populer</h1>
        <button className="navigation-button left" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="products-wrapper" ref={productsWrapperRef}>
          <div className="product">
            <img src="./img/samba2.jpg" alt="Produk 1" />
            <div className="product-info">
              <h2 className="product-name">Adidas Samba OG White</h2>
              <div className="product-price">
                <span className="discounted-price">Rp 1.540.000</span>
                <span className="original-price">Rp 2.200.000</span>
                <span className="discount-percentage">-30%</span>
              </div>
            </div>
          </div>
          <div className="product">
            <img src="./img/boost.jpg" alt="Produk 2" />
            <div className="product-info">
              <h2 className="product-name">adidas Ultra Boost 20</h2>
              <div className="product-price">
                <span className="discounted-price">Rp 960.000,00</span>
                <span className="original-price"> Rp 1.200.000,00</span>
                <span className="discount-percentage">-20%</span>
              </div>
            </div>
          </div>
          <div className="product">
            <img src="img/yi.jpg" alt="Produk 3" />
            <div className="product-info">
              <h2 className="product-name">Adidas Yeezy 350 V2 'Beluga'</h2>
              <div className="product-price">
                <span className="discounted-price">Rp 4.549.350,00</span>
                <span className="original-price">Rp 6.999.000</span>
                <span className="discount-percentage">-35%</span>
              </div>
            </div>
          </div>
          <div className="product">
            <img src="img/yi.jpg" alt="Produk 4" />
            <div className="product-info">
              <h2 className="product-name">Adidas Yeezy 350 V2 'Beluga'</h2>
              <div className="product-price">
                <span className="discounted-price">Rp 4.549.350,00</span>
                <span className="original-price">Rp 6.999.000</span>
                <span className="discount-percentage">-35%</span>
              </div>
            </div>
          </div>
          <div className="product">
            <img src="img/yi.jpg" alt="Produk 4" />
            <div className="product-info">
              <h2 className="product-name">Adidas Yeezy 350 V2 'Beluga'</h2>
              <div className="product-price">
                <span className="discounted-price">Rp 4.549.350,00</span>
                <span className="original-price">Rp 6.999.000</span>
                <span className="discount-percentage">-35%</span>
              </div>
            </div>
          </div>
          <div className="product">
            <img src="img/yi.jpg" alt="Produk 4" />
            <div className="product-info">
              <h2 className="product-name">Adidas Yeezy 350 V2 'Beluga'</h2>
              <div className="product-price">
                <span className="discounted-price">Rp 4.549.350,00</span>
                <span className="original-price">Rp 6.999.000</span>
                <span className="discount-percentage">-35%</span>
              </div>
            </div>
          </div>
        </div>
        <button className="navigation-button right" onClick={scrollRight}>
          &gt;
        </button>
      </section>
    </div>
  );
};

export default Body;
