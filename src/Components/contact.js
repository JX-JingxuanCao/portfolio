import React from "react";

export default function Contact() {
  return (
    <div className="footer">
      <div className="contactTitle">Anyway...I'm always around</div>

      <div className="contactIcon">
        <link
          rel="stylesheet"
          href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        />
        <div class="social-buttons">
          <a
            class="social-button facebook"
            href="https://www.facebook.com"
            target="_blank"
            title="Jingxuan's Facebook"
          >
            <i class="fa fa-facebook"></i>
          </a>

          <a
            class="social-button linkedin"
            href="https://www.linkedin.com"
            target="_blank"
            title="Jingxuan's Linkedin"
          >
            <i class="fa fa-linkedin"></i>
          </a>

          <a
            class="social-button instagram"
            href="https://www.instagram.com/mr.jingxuan/"
            target="_blank"
            title="Jingxuan's Instagram"
          >
            <i class="fa fa-instagram"></i>
          </a>

          <a
            class="social-button email"
            href="mailto:cjingxuan@outlook.com"
            title="cjingxuan@outlook.com"
          >
            <i class="fa fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="credit-line">
        <svg
          width="1020"
          height="1"
          viewBox="0 0 1020 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1020"
            y1="0.5"
            x2="-2.82126e-07"
            y2="0.499911"
            stroke="#989898"
          />
        </svg>
      </div>
      <div className="lastBox">
        <div className="credit-box">
          <p className="credit-text">Copyright 2020 © Jingxuan Cao</p>
          <p className="credit-text">
            React consultant: Mitch Hartigan, check out his awesome portfolio
            {/* <a
              class="social-button website"
              href="https://mitchhartigan.com/"
              target="_blank"
              title="Mitch's Portfolio"
            >
              <i class="fa fa-globe"></i>
            </a> */}
          </p>
        </div>
      </div>
    </div>
  );
}
