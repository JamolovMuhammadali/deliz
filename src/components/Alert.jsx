import React, { useState, useEffect } from 'react';
import './Alert.css';

const Alert = ({ message, showAlert }) => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    if (showAlert) {
      const newAlert = {
        id: Date.now(),
        message,
      };

      // Update the alerts state with the new alert
      setAlerts((prevAlerts) => [...prevAlerts, newAlert]);

      // Automatically hide the alert after 3 seconds
      const timer = setTimeout(() => {
        setAlerts((prevAlerts) => prevAlerts.filter((a) => a.id !== newAlert.id));
      }, 3000);

      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [showAlert, message]); // Added 'message' as a dependency

  return (
    <div id="alertContainer">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className="alert show"
          onAnimationEnd={(e) => {
            if (e.animationName === 'fadeOut') {
              setAlerts((prevAlerts) => prevAlerts.filter((a) => a.id !== alert.id));
            }
          }}
        >
          <span>{alert.message}</span>
          <span
            className="close-btn"
            onClick={() => setAlerts((prevAlerts) => prevAlerts.filter((a) => a.id !== alert.id))}
          >
            &times;
          </span>
        </div>
      ))}
    </div>
  );
};

export default Alert;
