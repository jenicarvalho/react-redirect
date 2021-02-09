import React from 'react';

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const Home  = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      página Home
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia inventore, accusantium blanditiis voluptatum magnam maxime ducimus quas nihil dicta dolor consequatur? Sed error aliquid vero temporibus, obcaecati esse vitae iste!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia inventore, accusantium blanditiis voluptatum magnam maxime ducimus quas nihil dicta dolor consequatur? Sed error aliquid vero temporibus, obcaecati esse vitae iste!</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia inventore, accusantium blanditiis voluptatum magnam maxime ducimus quas nihil dicta dolor consequatur? Sed error aliquid vero temporibus, obcaecati esse vitae iste!</p>
      <p>Acesse o contato <Link to="/contact">aqui</Link></p>
    </div>
  );
}

export default Home;