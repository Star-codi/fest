// src/components/RegistrationCarousel.js
import React from 'react';

const RegistrationCarousel = () => {
  // Define your carousel with registration details
  const registrationItems = [
    { type: 'Singing', fee: 100 },
    { type: 'Dancing', fee: 100 },
    { type: 'Fashion Show', fee: 100 },
    { type: 'Seminar', fee: 100 },
    { type: 'DJ Party', fee: 100 },
  ];

  return (
    <div>
      {registrationItems.map((item, index) => (
        <div key={index}>
          <h3>{item.type}</h3>
          <p>Registration Fee: Rs. {item.fee}</p>
          {/* Add form for registration here */}
        </div>
      ))}
    </div>
  );
}

export default RegistrationCarousel;
