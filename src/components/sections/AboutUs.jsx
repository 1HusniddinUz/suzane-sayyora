import React from "react";
import "../../assets/AboutUs.css";
import AuthorImage from "../../assets/images/author.jpg";
const AboutUs = () => {
  return (
    <div id="AboutUs">
      <div className="container">
        <div className="author_image">
          <img
            src={AuthorImage}
            alt="Author"
          />
        </div>

        <div className="author_infos">
          <div className="author_name_job">
            <h2 className="author_name">SHARIPOVA SAYYORA</h2>
            <p className="author_job">
              An’anaviy suzane va milliy bezakli buyumlar bo‘yicha ustoz hunarmand
            </p>
          </div>

          <div className="author_story">
            <p>
              Sharipova Sayyora 40 yildan ortiq vaqt davomida an’anaviy o‘zbek
              suzanechilik san’ati, milliy naqshlar va bezakli matolarni qo‘lda
              tiklash bilan shug‘ullanib keladi. Uning ijodida bolalik xotiralari,
              oilaviy qadriyatlar va milliy an’analar uyg‘unlashib, har bir naqsh
              uy bekalarining didi va milliy ruhini o‘zida mujassam etadi.
            </p>
            <p>
              Mehnat faoliyati davomida u ko‘plab uylar, madaniy maskanlar va
              mehmonxonalarning interyerini suzane va milliy bezakli buyumlar bilan
              boyitgan. Asarlari mahalliy ko‘rgazmalar hamda hunarmandchilik
              festivallarida muntazam namoyish etilib, bir necha marotaba faxriy
              yorliq va diplomlar bilan taqdirlangan. Har bir buyum qo‘lda, har bir
              chokiga alohida e’tibor qaratilgan holda tayyorlanib, egasining
              uyiga iliqlik, nafis bezak va o‘ziga xos ruh olib kirishini ko‘zda tutadi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
