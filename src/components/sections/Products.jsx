// Products.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../assets/Products.css";

import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";
import img6 from "../../assets/images/6.png";
import img7 from "../../assets/images/7.png";
import img8 from "../../assets/images/8.png";
import img9 from "../../assets/images/9.png";
import img10 from "../../assets/images/10.png";
// qolgan img11–img16 agar boshqa joyda kerak bo'lmasa, bemalol o‘chirib yuborish mumkin

const formatPrice = (price) =>
  price.toLocaleString("uz-UZ", {
    style: "currency",
    currency: "UZS",
    maximumFractionDigits: 0,
  });

const Products = () => {
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(4);

  // 🔽 product name & info lar translationsUz dan
  const productData = [
    {
      id: 1,
      name: t("product1.name"),
      info: t("product1.info"),
      img: img1,
      price: 150000,
    },
    {
      id: 2,
      name: t("product2.name"),
      info: t("product2.info"),
      img: img2,
      price: 150000,
    },
    {
      id: 3,
      name: t("product3.name"),
      info: t("product3.info"),
      img: img3,
      price: 150000,
    },
    {
      id: 4,
      name: t("product4.name"),
      info: t("product4.info"),
      img: img4,
      price: 150000,
    },
    {
      id: 5,
      name: t("product5.name"),
      info: t("product5.info"),
      img: img5,
      price: 1800000,
    },
    {
      id: 6,
      name: t("product6.name"),
      info: t("product6.info"),
      img: img6,
      price: 1800000,
    },
    {
      id: 7,
      name: t("product7.name"),
      info: t("product7.info"),
      img: img7,
      price: 1800000,
    },
    {
      id: 8,
      name: t("product8.name"),
      info: t("product8.info"),
      img: img8,
      price: 1800000,
    },
    {
      id: 9,
      name: t("product9.name"),
      info: t("product9.info"),
      img: img9,
      price: 1800000,
    },
    {
      id: 10,
      name: t("product10.name"),
      info: t("product10.info"),
      img: img10,
      price: 220000,
    },
  ];

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, productData.length));
  };

  const handleShowLess = () => {
    setVisibleCount(4);
  };

  const isAllVisible = visibleCount >= productData.length;
  const isDefault = visibleCount === 4;

  return (
    <section id="Products" className="products">
      <div className="products-header">
        <h2>{t("productH3")}</h2>
        <p>
          Qo'l mehnati bilan yaratilgan suzani va milliy ayollar buyumlari
          to'plami
        </p>
      </div>

      <div className="products-grid">
        {productData.slice(0, visibleCount).map((item) => (
          <article className="product-card" key={item.id}>
            <div className="product-image-wrapper">
              <img src={item.img} alt={item.name} loading="lazy" />
            </div>
            <div className="product-body">
              <div className="product-top">
                <h3 className="product-name">{item.name}</h3>
                <p className="product-info">{item.info}</p>
              </div>
              <div className="product-bottom">
                <span className="product-price">
                  {formatPrice(item.price)}
                </span>
                <button className="product-btn" type="button">
                  Batafsil
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="products-controls">
        {!isAllVisible && (
          <button
            type="button"
            className="toggle-btn primary"
            onClick={handleShowMore}
          >
            {t("productMore")}
          </button>
        )}

        {!isDefault && (
          <button
            type="button"
            className="toggle-btn secondary"
            onClick={handleShowLess}
          >
            {t("productClose")}
          </button>
        )}
      </div>
    </section>
  );
};

export default Products;
