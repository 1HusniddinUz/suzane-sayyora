// Products.jsx
import { useState } from "react";
import "../../assets/Products.css";
import img1 from "../../assets/images/1.png"
import img2 from "../../assets/images/2.png"
import img3 from "../../assets/images/3.png"
import img4 from "../../assets/images/4.png"
import img5 from "../../assets/images/5.png"
import img6 from "../../assets/images/6.png"
import img7 from "../../assets/images/7.png"
import img8 from "../../assets/images/8.png"
import img9 from "../../assets/images/9.png"
import img10 from "../../assets/images/10.png"
import img11 from "../../assets/images/11.png"
import img12 from "../../assets/images/12.png"
import img13 from "../../assets/images/13.png"
import img14 from "../../assets/images/14.png"
import img15 from "../../assets/images/15.png"
import img16 from "../../assets/images/16.png"
const productData = [
  {
    id: 1,
    img: img1,
    name: "Qo'l tikilgan kichkina suzani – anor gul naqshli",
    price: 150000,
    info: "Tabiiy matoda ipak iplar bilan tikilgan an'anaviy anor gul naqshli suzani."
  },
  {
    id: 2,
    img: img2,
    name: "Kichkina suzani – uy bezagi",
    price: 150000,
    info: "Oila ramzi va an'anaviy bezaklar tushirilgan kichkina o'lchamli suzani. To'y sovg'asi sifatida ham berish mumkin."
  },
  {
    id: 3,
    img: img3,
    name: "Kashtali ko'k - atlas yostiq jildi",
    price: 150000,
    info: "Atlas matodan tikilgan, kundalik va bayram uchun mos, yengil va qulay milliy ayollar ko'ylagi."
  },
  {
    id: 4,
    img: img4,
    name: "Kashtali yostiq jildi",
    price: 150000,
    info: "Qo'l kashtalari bilan bezatilgan milliy yostiq jildi."
  },
  {
    id: 5,
    img: img5,
    name: "Kashtali atlas suzane matosi",
    price: 1800000,
    info: "Milliy naqshlar tushirilgan, qo'l bilan tikilgan suzane . Ko'ylak va kamzullar bilan chiroyli uyg'unlashadi."
  },
  {
    id: 6,
    img: img6,
    name: "Anor tasvirlangan – atlas suzane matosi",
    price: 1800000,
    info: "Iplari ranglari va naqshlari turlicha bo'lgan milliy atlas matolari. Kamzul yoki boshqa turdagi uy buyumlari uchun mos. 50x190"
  },
  {
    id: 7,
    img: img7,
    name: "Atlas matosi",
    price: 1800000,
    info: `Yengil matodan tayyorlangan, suzani uslubidagi naqshlar bilan bezatilgan ayollar suzanesi. 50x190`
  },
  {
    id: 8,
    img: img8,
    name: "Atlas matosi",
    price: 1800000,
    info: "Yengil matodan tayyorlangan, suzani uslubidagi naqshlar bilan bezatilgan ayollar suzanesi. 50x190"
  },
  {
    id: 9,
    img: img9,
    name: "Har xil turdagi milliy atlas matolari ",
    price: 1800000,
    info: "Iplari ranglari va naqshlari turlicha bo'lgan milliy atlas matolari. Kamzul yoki boshqa turdagi uy buyumlari uchun mos. 50x190"
  },
  {
    id: 10,
    img: img10,
    name: "Vilur ipidan sumka",
    price: 220000,
    info: "Qo'lda vilur ipi shers bilan ignada tikilgan milliy uslubdagi sumka. Kundalik hayotda ham, milliy tadbirlarda ham foydalanish mumkin."
  }
];

const formatPrice = (price) =>
  price.toLocaleString("uz-UZ", {
    style: "currency",
    currency: "UZS",
    maximumFractionDigits: 0
  });

const Products = () => {
  const [visibleCount, setVisibleCount] = useState(4);

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
        <h2>Mahsulotlar</h2>
        <p>Qo'l mehnati bilan yaratilgan suzani va milliy ayollar buyumlari to'plami</p>
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
                <span className="product-price">{formatPrice(item.price)}</span>
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
            Show more
          </button>
        )}

        {!isDefault && (
          <button
            type="button"
            className="toggle-btn secondary"
            onClick={handleShowLess}
          >
            Show less
          </button>
        )}
      </div>
    </section>
  );
};

export default Products;
 