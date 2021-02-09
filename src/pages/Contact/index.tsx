import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'

const Contact  = () => {

  const [logado] = useState(false)

  return (
    <div>
      {
        logado ?
      <ul>
        <li>19 9999-9999</li>
        <li>jeniffer@ctt.com</li>
      </ul>
      :
      <Redirect to="/" />
      }
    </div>
  );
}

export default Contact;