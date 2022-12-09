import React from "react";

//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faSnapchat,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

// Material UI
import { Grid } from "@mui/material";

// Components
import Image from "@/components/Image";
import images from "@/assets/images";

import "./style.scss";

function Footer() {
  return (
    <footer>
      <Grid
        container
        maxWidth="lg"
        sx={{ mx: "auto" }}
        id="footer__container"
        className="container"
      >
        <Grid container sx={{ mx: "auto" }} className="footer__apps">
          <a
            className="footer__app-item"
            href="https://apps.apple.com/app/finnkino-leffa/id1616672209?l"
          >
            <Image src="sakita.tech/Files/responsive/footer/appstore_small.png" />
          </a>
          <a
            className="footer__app-item"
            href="sakita.tech/Files/responsive/footer/googleplay_small.png"
          >
            <Image src="sakita.tech/Files/responsive/footer/googleplay_small.png" />
          </a>
        </Grid>
        <Grid container className="footer__list">
          <Grid item xs={12} md={3} className="footer__list-item">
            <p className="footer__list-title">SAKITA</p>
            <a className="footer__list-link" href="Sakita.et/en/teatterit">
              Movie Theater
            </a>
            <a className="footer__list-link" href="http://www.finnkinob2b.fi/">
              B2B
            </a>
            <a className="footer__list-link" href="Sakita.et/en/rekry">
              Job
            </a>
            <a className="footer__list-link" href="Sakita.et/en/tietoa-finnkinosta">
              Sakita Family
            </a>
          </Grid>
          <Grid item xs={12} md={3} className="footer__list-item">
            <p className="footer__list-title">Customer Care</p>
            <a className="footer__list-link" href="Sakita.et/en/asiakaspalvelu/">
              Contact
            </a>
            <a className="footer__list-link" href="Sakita.et/en/faq">
              FAQs
            </a>
          </Grid>
          <Grid item xs={12} md={3} className="footer__list-item">
            <p className="footer__list-title">Developers</p>
            <a className="footer__list-link" href="www.linkedin.com/in/aysi143">
             Aysanew Yonas
            </a>
            <a
              className="footer__list-link"
              href="Swww.linkedin.com/in/aysi143"
            >
              Brikty Tesfaye
            </a>

          </Grid>
          <Grid item xs={12} lg={3} md={12} className="footer__list-item  list--social">
            <p className="footer__list-title">Social Network</p>
            <a className="footer__list-link" href="https://www.instagram.com/sakita">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="footer__list-link" href="https://www.instagram.com/sakita">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="footer__list-link" href="https://www.facebook.com/sakita">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className="footer__list-link" href="https://www.snapchat.com/add/sakita">
              <FontAwesomeIcon icon={faSnapchat} />
            </a>
            <a className="footer__list-link" href="https://www.linkedin.com/company/48910/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className="footer__list-link" href="https://www.youtube.com/sakitasuomi">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </Grid>
        </Grid>
        <Grid container className="footer__payment">
          <Image src={images.paymentMethodsMobile} className="hide-on-pc hide-on-tablet" />
          <Image src={images.paymentMethodsPC} className="hide-on-mobile" />
        </Grid>
        <p className="footer__rights pt-5 pb-5">SAKITA | ALX Engineers - All rights reserved</p>
      </Grid>
    </footer>
  );
}

export default Footer;
