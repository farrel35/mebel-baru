import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../css/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the product details:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    /*<div className="container">
      <h1>{product.title}</h1>
        <div className="container-detail">
            <img src={product.image} alt={product.title} style={{ width: "300px", height: "300px", objectFit: "cover" }} />
            <p>{product.description}</p>
            <p>
                <strong>${product.price}</strong>
            </p>
        </div>
    </div>*/
    <div class="container">
        <div class="main-product">
            <div class="product-image">
            <img src={product.image} alt={product.title} style={{ width: "80%", height: "50%", justifyContent: "center"}} />
            </div>
            <div class="product-details">
                <h1 class="product-name">{product.title}</h1>
                <p class="product-pattern">Motif</p>
                <p class="product-price">Harga</p>
                <button class="add-to-cart">Tambah ke keranjang</button>
            </div>
        </div>
        <div class="product-info">
            <div class="description">
                <h2>Deskripsi</h2>
                <p>{product.description}</p>
            </div>
        </div>
        <div class="available-products">
            <h2>Avaliable Products</h2>
            <div class="products-slider">
                <div class="product-card">
                    <div class="product-image-small"></div>
                    <p class="product-name-small">Nama Produk</p>
                    <p class="product-price-small">Harga</p>
                </div>
                <div class="product-card">
                    <div class="product-image-small"></div>
                    <p class="product-name-small">Nama Produk</p>
                    <p class="product-price-small">Harga</p>
                </div>
                <div class="product-card">
                    <div class="product-image-small"></div>
                    <p class="product-name-small">Nama Produk</p>
                    <p class="product-price-small">Harga</p>
                </div>
                <div class="product-card">
                    <div class="product-image-small"></div>
                    <p class="product-name-small">Nama Produk</p>
                    <p class="product-price-small">Harga</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProductDetail;