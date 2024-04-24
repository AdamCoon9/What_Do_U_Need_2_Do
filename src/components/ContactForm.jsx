import { useState } from 'react';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
  
    if (!firstName || !lastName || !email || !comments) {
      setMessage('Please fill out all fields.');
      setIsLoading(false);
      return;
    }
  
    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }
  
    
    setTimeout(() => {
      setIsLoading(false);
      setMessage('Your form has been submitted! Your message has been sent!');
      resetForm();
    }, 2000);
  };
  

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setComments('');
    setMessage('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        disabled={isLoading}
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
        disabled={isLoading}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        disabled={isLoading}
      />
      <textarea
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        placeholder="Comments"
        disabled={isLoading}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Submit'}
      </button>
      <button type="button" onClick={resetForm} disabled={isLoading}>
        Reset
      </button>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </form>
  );
};

export default ContactForm;
