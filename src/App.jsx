import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useState } from "react";

library.add(faFacebookF, faTwitter, faInstagram);

export default function App() {
  return (
    <div className="container">
      <Logo />
      <Header />
      <Input>
        <NotifyButton />
      </Input>
      <Illustration />
      <Socials />
    </div>
  );
}

function Logo() {
  return <img className="logo" src="public\logo.svg" alt="logo ping." />;
}

function Header() {
  return (
    <>
      <p className="header-title">
        We are launching <span>soon!</span>
      </p>
      <p className="header-subtitle">Subscribe and get notifed</p>
    </>
  );
}

function Input() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    const isEmailValid = validateEmail(email);
    if (email === "") {
      setError("Whoops! It looks like you forgot to add your email");
      event.preventDefault();
      return;
    }
    if (!isEmailValid) {
      setError("Please enter a valid email address.");
      event.preventDefault();
      return;
    }
    setError("");
  };

  const validateEmail = (email) => {
    // Add your email validation logic here
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <form className="input-box" onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <NotifyButton />
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

function NotifyButton() {
  return <button className="notify-button">Notify Me</button>;
}
function Illustration() {
  return (
    <img
      className="illustration"
      src="public\illustration-dashboard.png"
      alt="illustration dashboard"
    />
  );
}
function Socials() {
  return (
    <>
      <div className="social-box">
        <SocialButton link="https://www.facebook.com">
          <FontAwesomeIcon icon={["fab", "facebook-f"]} />
        </SocialButton>
        <SocialButton link="https://www.x.com">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </SocialButton>
        <SocialButton link="https://www.instagram.com">
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </SocialButton>
      </div>
      <p className="copyright">&copy; Copyright Ping. All rights reserved.</p>
    </>
  );
}

function SocialButton({ children, link }) {
  return (
    <a href={link}>
      <button className="social-button">{children}</button>
    </a>
  );
}

SocialButton.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
};
