// src/components/Registration.js
import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Modal from 'react-modal';
import PrintableRegistrationDetails from './PrintableRegistrationDetails';
import singingImage from '../images/singing.jpg'; // Replace with actual image paths
import dancingImage from '../images/dancing.jpg';
import fashionShowImage from '../images/fashion-show.jpg';
import seminarImage from '../images/seminar.jpg';
import djPartyImage from '../images/dj-party.jpg';
import registrationBackground from '../images/regbg.jpg'; // Replace with the actual image file name and extension
import html2pdf from 'html2pdf.js'; // Import html2pdf library

Modal.setAppElement('#root');

const Registration = () => {
  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const [numOfParticipants, setNumOfParticipants] = useState(1);
  const [formData, setFormData] = useState({
    registrationOption: null,
    participants: Array.from({ length: 1 }, () => ({ name: '', phoneNumber: '', email: '' })),
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const registrationOptions = [
    { title: 'Singing', image: singingImage },
    { title: 'Dancing', image: dancingImage },
    { title: 'Fashion Show', image: fashionShowImage },
    { title: 'Seminar', image: seminarImage },
    { title: 'DJ Party', image: djPartyImage },
  ];

  const handleRegistrationSelection = (index) => {
    setSelectedRegistration(index);
    setFormData({
      registrationOption: index,
      participants: Array.from({ length: numOfParticipants }, () => ({ name: '', phoneNumber: '', email: '' })),
    });
  };

  const handleNumOfParticipantsChange = (e) => {
    const num = parseInt(e.target.value, 10);
    setNumOfParticipants(isNaN(num) ? 1 : num);
    setFormData({
      registrationOption: selectedRegistration,
      participants: Array.from({ length: isNaN(num) ? 1 : num }, () => ({ name: '', phoneNumber: '', email: '' })),
    });
  };

  const handleInputChange = (participantIndex, field, value) => {
    const updatedParticipants = [...formData.participants];
    updatedParticipants[participantIndex][field] = value;
    setFormData({
      ...formData,
      participants: updatedParticipants,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePrintPDF = () => {
    const content = componentRef.current;

    const options = {
      margin: 10,
      filename: 'registration_details.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().from(content).set(options).outputPdf((pdf) => {
      const blob = new Blob([pdf], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'registration_details.pdf';
      link.click();
    });
  };

  const containerStyle = {
    backgroundImage: `url(${registrationBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    padding: '20px',
  };

  return (
    <div className="registration-container" style={containerStyle}>
      <h1>Registration</h1>
      <div className="registration-cards">
        {registrationOptions.map((option, index) => (
          <div
            key={index}
            className={`registration-card ${selectedRegistration === index ? 'selected' : ''}`}
            onClick={() => handleRegistrationSelection(index)}
          >
            <img src={option.image} alt={option.title} className="registration-image" />
            <h2>{option.title}</h2>
          </div>
        ))}
      </div>
      {selectedRegistration !== null && (
        <div className="registration-details">
          <h3>Selected Option: {registrationOptions[selectedRegistration].title}</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Number of Participants:
              <input
                type="number"
                min="1"
                value={numOfParticipants}
                onChange={handleNumOfParticipantsChange}
                required
              />
            </label>
            {Array.from({ length: numOfParticipants }).map((_, participantIndex) => (
              <div key={participantIndex} className="participant-form">
                <h4>Participant {participantIndex + 1}</h4>
                <label>
                  Name:
                  <input
                    type="text"
                    value={formData.participants[participantIndex].name}
                    onChange={(e) => handleInputChange(participantIndex, 'name', e.target.value)}
                    required
                  />
                </label>
                <label>
                  Phone Number:
                  <input
                    type="tel"
                    value={formData.participants[participantIndex].phoneNumber}
                    onChange={(e) => handleInputChange(participantIndex, 'phoneNumber', e.target.value)}
                    required
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    value={formData.participants[participantIndex].email}
                    onChange={(e) => handleInputChange(participantIndex, 'email', e.target.value)}
                    required
                  />
                </label>
              </div>
            ))}
            <p>Registration Fee: {numOfParticipants * 50} Rs</p>
            <button type="submit">Submit Registration</button>
          </form>
        </div>
      )}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Payment and Details Modal"
        >
          <div className="modal-content">
            <PrintableRegistrationDetails
              ref={componentRef}
              registrationOptions={registrationOptions}
              selectedRegistration={selectedRegistration}
              formData={formData}
            />
            <button onClick={handlePrint}>Print PDF</button>
            <button onClick={handlePrintPDF}>Download PDF</button>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Registration;
