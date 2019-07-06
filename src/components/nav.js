import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

const Nav = () => (
  <section id="side-nav">
    <section className="grid">
      <section className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 0 140 120" className="triangle">
          <polygon points="50 15, 100 100, 0 100"/>
        </svg>
      </section>

      <section className="social">
        <a href='https://www.linkedin.com/in/amorriscode'><FaLinkedinIn className="social" /></a>
        <a href='http://github.com/amorriscode'><FaGithub className="social" /></a>
        <a href='http://twitter.com/amorriscode'><FaTwitter className="social" /></a>
      </section>
    </section>
  </section>
);

export default Nav;
