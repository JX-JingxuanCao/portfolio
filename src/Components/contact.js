import React from "react";

export default function Contact() {
  return (
    <div className="footer">
      <div className="contactTitle">Get in Touch with me</div>

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
        </div>
      </div>
      <div classNames="credit-line">
        <svg
          width="820"
          height="1"
          viewBox="0 0 820 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="820"
            y1="0.5"
            x2="-1.22031e-05"
            y2="0.499928"
            stroke="#989898"
          />
        </svg>
      </div>
      <div className="credit-box">
        <p className="credit-text">Copyright 2020 © Jingxuan Cao</p>
        <p className="credit-text">
          React consultant: Mitch Hartigan, check out his awesome portfolio
        </p>
      </div>
      <div class="social-buttons">
        <a
          class="social-button website"
          href="https://mitchhartigan.com/"
          target="_blank"
          title="Mitch's Portfolio"
        >
          <i class="fa fa-globe"></i>
        </a>
      </div>
    </div>
  );
}
