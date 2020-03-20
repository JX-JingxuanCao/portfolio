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
            title="Jingxuan's Facebook"
          >
            <i class="fa fa-facebook"></i>
          </a>

          <a
            class="social-button linkedin"
            href="https://www.linkedin.com"
            title="Jingxuan's Linkedin"
          >
            <i class="fa fa-linkedin"></i>
          </a>

          <a
            class="social-button instagram"
            href="https://www.instagram.com/mr.jingxuan/"
            title="Jingxuan's Instagram"
          >
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
