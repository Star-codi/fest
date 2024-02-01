// src/components/PrintableRegistrationDetails.js
import React from 'react';

const PrintableRegistrationDetails = React.forwardRef(({ registrationOptions, selectedRegistration, formData }, ref) => {
  return (
    <div ref={ref} className="printable-registration-details">
      <h2>Registration Details</h2>
      {selectedRegistration !== null && (
        <>
          <h3>Selected Option: {registrationOptions[selectedRegistration].title}</h3>
          {formData.participants.map((participant, index) => (
            <div key={index}>
              <h3>Participant {index + 1}</h3>
              <p>Name: {participant.name}</p>
              <p>Phone Number: {participant.phoneNumber}</p>
              <p>Email: {participant.email}</p>
              {index < formData.participants.length - 1 && <hr />} {/* Add line break between participants */}
            </div>
          ))}
          <p>Total Amount to be Paid: {formData.participants.length * 50} Rs</p>
        </>
      )}
    </div>
  );
});

export default PrintableRegistrationDetails;
