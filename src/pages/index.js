import React from 'react';
import { FaLinkedinIn, FaInstagram, FaEnvelope, FaAngellist, FaGithub } from 'react-icons/fa';
import Layout from 'components/Layout';
import Social from 'components/Social';

export default () => (
  <Layout>
    <p>
      Hi, I'm Leslie. I'm a software engineer. <a href="mailto: leslie.passante@gmail.com">Get in touch</a>, or find me
      online.
    </p>
    <p>
      <Social href="https://www.linkedin.com/in/lesliepassante/">
        <FaLinkedinIn />
      </Social>
      <Social href="https://angel.co/lesliepassante">
        <FaAngellist />
      </Social>
      <Social href="https://github.com/lesliepassante">
        <FaGithub />
      </Social>
      <Social href="https://www.instagram.com/lesliepassante/">
        <FaInstagram />
      </Social>
      <Social href="mailto: leslie.passante@gmail.com">
        <FaEnvelope />
      </Social>
    </p>
  </Layout>
);
