import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace YOUR_FORMSPREE_ENDPOINT with your FormSpree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
      
      if (response.ok) {
        setMessage('Thanks! We\'ll be in touch soon.');
        setName('');
        setEmail('');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-lg bg-dark-green border border-mint text-white focus:outline-none focus:ring-2 focus:ring-mint"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-lg bg-dark-green border border-mint text-white focus:outline-none focus:ring-2 focus:ring-mint"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center px-6 py-3 bg-mint text-dark-green rounded-lg font-semibold hover:bg-opacity-90 transition-colors disabled:opacity-50"
      >
        {isSubmitting ? (
          'Submitting...'
        ) : (
          <>
            Book Your Call <Send className="ml-2 w-4 h-4" />
          </>
        )}
      </button>

      {message && (
        <p className="text-center text-mint mt-4">{message}</p>
      )}
    </form>
  );
}