import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/sendemail', { email });
      if (response.status === 201) {
        alert('Email enregistré avec succès !');
      } else {
        alert("L'envoi de votre email a échoué.");
      }
    } catch (error) {
      console.error('There was an error saving the email!', error);
      alert("Une erreur est survenue lors de l'envoi de votre email.");
    }
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='input'>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder='max@gmail.com'
        />
      <button type="submit">Envoyer</button>
      </div>
    </form>
  );
};

export default EmailForm;
