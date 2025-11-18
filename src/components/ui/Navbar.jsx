import { useEffect, useState } from "react";
import "../../assets/Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMarketOpen, setIsMarketOpen] = useState(false); // dropdown holati (faqat mobile/tablet)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      const scrollPercent = scrollTop / (docHeight - winHeight);
      setIsBlurred(scrollPercent >= 0.1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Burger yopilganda dropdown ham yopilsin
  useEffect(() => {
    if (!isMenuOpen) {
      setIsMarketOpen(false);
    }
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsMarketOpen(false);
  };

  // Dropdownni faqat mobile / tablet (<=900px) da click bilan ochamiz
  const toggleMarketplaces = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 900) {
      setIsMarketOpen((prev) => !prev);
    }
  };

  const { t  , i18n } = useTranslation();

  return (
    <nav
      className={`${isBlurred ? "scrolled" : ""} ${
        isMenuOpen ? "menu-open" : ""
      }`}
    >
      <div className="container">
        <div className="logo_box">
          <h1>Suzane Sayyora</h1>
        </div>

        <div className="nav_links">
          {/* Burger faqat responsive uchun ishlaydi */}
          <button
            type="button"
            className={`burger ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={isMenuOpen ? "open" : ""}>
            <li>
              <a href="/" onClick={handleLinkClick}>
                {t(`home`)}
              </a>
            </li>

            <li>
              <a href="#Products" onClick={handleLinkClick}>
                {t`products`}
              </a>
            </li>

            {/* MARKETPLACES DROPDOWN */}
            <li
              className={`has-dropdown ${isMarketOpen ? "open-dropdown" : ""}`}
            >
              <button
                type="button"
                className="dropdown-toggle"
                onClick={toggleMarketplaces}
                aria-haspopup="true"
                aria-expanded={isMarketOpen}
              >
                Marketplaces
                <span className="dropdown-arrow" />
              </button>

              <ul className={`dropdown-menu ${isMarketOpen ? "show" : ""}`}>
                <li>
                  <a
                    href="https://www.ozon.ru/product/suzane-ruchnoy-raboty-3119456542/?oos_search=false"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    Ozon
                  </a>
                </li>
                <li>
                  <a
                    href="https://uzum.uz/uz/product/qol-mehnati-bilan-tikilgan-suzane-2117294"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    Uzum Market
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.wildberries.ru/catalog/622433138/detail.aspx?targetUrl=GP"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    Wildberries
                  </a>
                </li>
                <li>
                  <a
                    href="https://market.yandex.uz/card/suzane-ruchnoy-raboty-interyernyy-tekstil-premium-klassa-osnova-vypolnena-iz-atlasa-a-niti-vyshivki--100-shelk/4769197220?businessId=216503443&showOriginalKmEmptyOffer=1&ogV=-6"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    Yandex Market
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#AboutUs" onClick={handleLinkClick}>
                {t(`about`)}
              </a>
            </li>

            <li>
              <a href="#ContactForm" onClick={handleLinkClick}>
                {t(`contact`)}
              </a>
            </li>

            {/* MOBILE / TABLET LANG SELECT (navbar ichida) */}
            <li className="lang_provider_mobile">
              <select
                id="select"
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                defaultValue="uz"
              >
                <option value="uz">🇺🇿 O'zbek</option>
                <option value="ru">🇷🇺 Русский</option>
                <option value="en">🇬🇧 English</option>
                <option value="tr">🇹🇷 Türkçe</option>
                <option value="fr">🇫🇷 Français</option>
              </select>
            </li>
          </ul>
        </div>

        {/* DESKTOP LANG PROVIDER */}
        <div className="lang_provider">
          <select
            id="select"
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            defaultValue="uz"
          >
            <option value="uz">🇺🇿 O'zbek</option>
            <option value="ru">🇷🇺 Русский</option>
            <option value="en">🇬🇧 English</option>
            <option value="tr">🇹🇷 Türkçe</option>
            <option value="fr">🇫🇷 Français</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
