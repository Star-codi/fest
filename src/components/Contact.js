// src/components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const coreCommitteeMembers = [
    'Member 1',
    'Member 2',
    'Member 3',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    // Add more members as needed
  ];

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };

  const containerStyle = {
    color: 'white',
    // Add more styling if needed
    display: 'flex',
    flexDirection: 'row', // Arrange children in a row
    justifyContent: 'space-between', // Space between the two columns
    alignItems: 'center', // Center vertically
    padding: '20px', // Add some padding
  };

  const columnStyle = {
    width: '48%', // Adjust the width of each column
    boxSizing: 'border-box', // Include padding in the width
  };

  const mapContainerStyle = {
    width: '100%', // Adjust the width of the map container
    boxSizing: 'border-box', // Include padding in the width
  };

  return (
    <div className="contact-container" style={containerStyle}>
      <div className="details-column" style={{ ...columnStyle, marginRight: '2%' }}>
        <h1>Contact</h1>
        <div className="about-event" style={{ color: 'white', marginBottom: '20px' }}>
          {/* ... */}
        </div>
        <div className="event-info" style={{ color: 'white', marginBottom: '20px' }}>
          <h2>Event Information</h2>
          <p>
            <strong>Event Location:</strong> Alappuzha, Kerala
          </p>
          {/* Add more event details as needed */}
        </div>
        
        <div className="core-committee-members" style={{ color: 'white', marginBottom: '20px' }}>
          <h2>Core Committee Members</h2>
          <p>
            Our core committee comprises dedicated individuals: {coreCommitteeMembers.join(', ')}.
            {showContactInfo && (
              <>
                <br />
                For more details, reach out to us:
                <br />
                Phone: 1233433321, Email: demo@gmail.com
              </>
            )}
          </p>
          <button onClick={toggleContactInfo}>Show Contact Info</button>
        </div>
      </div>
      <div className="map-column" style={{ ...columnStyle }}>
        <div style={mapContainerStyle}>
          {/* Replace the iframe below with your own embedded map code */}
          <iframe
            title="Event Location Map"
            width="100%" // Use 100% width to fill the container
            height="450"
            frameBorder="0"
            style={{ border: '0' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.126100975905!2d76.34149731532477!3d9.498066423579617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0817c11051d275%3A0x7c162b548b5761f5!2sAlappuzha%2C%20Kerala!5e0!3m2!1sen!2sin!4v1645293204699!5m2!1sen!2sin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
