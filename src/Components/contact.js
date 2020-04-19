import React from "react";

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contactTitle">So...what do you say? BFF on the internet? 😉</div>

      <div className="contactIcon">
        <link
          rel="stylesheet"
          href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        />
        <div className="social-buttons">
          <a
            className="social-button facebook"
            href="https://www.facebook.com/profile.php?id=100001732766115"
            title="Jingxuan's Facebook"
            target="_blank"
          >
            <i className="fa fa-facebook"></i>
          </a>

          <a
            className="social-button linkedin"
            href="https://www.linkedin.com/in/jingxuan-cao/"
            title="Jingxuan's Linkedin"
            target="_blank"
          >
            <i className="fa fa-linkedin"></i>
          </a>

          <a
            className="social-button instagram"
            href="https://www.instagram.com/mr.jingxuan/"
            title="Jingxuan's Instagram"
            target="_blank"
          >
            <i className="fa fa-instagram"></i>
          </a>

          <a
            className="social-button email"
            href="mailto:cjingxuan@outlook.com"
            title="cjingxuan@outlook.com"
          >
            <i className="fa fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
