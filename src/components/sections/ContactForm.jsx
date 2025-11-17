import "../../assets/ContactForm.css"

const ContactForm = () => {
  return (
    <div id="ContactForm">
      <div className="location_box">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12259.000671204365!2d64.44062235772478!3d39.81259549372796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f500f000833931d%3A0x3daec3f804cbfea9!2sHarem!5e0!3m2!1sru!2s!4v1763318238601!5m2!1sru!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Harem location map"
        ></iframe>
      </div>

      <div className="contact_info">
        <div className="social_links">
          <a href="https://t.me/suzane_sharipova" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-telegram"></i></a>
          <a href="https://instagram.com/suzane_sharipova" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://t.me/suzane_sharipova" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
          <a href="mailto:sharipova.jami@mail.ru" target="_blank" rel="noopener noreferrer"> <i className="fa-solid fa-envelope"></i></a>
        </div>
        <div className="copyright">
          <span>
            Made by{" "}
            <a href="https://t.me/buxoro_tadbirkorlar_klubi" target="_blank" rel="noreferrer">
              Buxoro tadbirkorlar biznes klubi
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
