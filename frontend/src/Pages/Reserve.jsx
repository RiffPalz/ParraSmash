import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Reserve.css";

export const Reserve = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        date: "",
        time: "",
        paymentMode: "",
        court: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Court Reserved, See you!");
    };

  return (
    <>
      <div className="book">
        <div className="reservation">
          <div className="form-container">
            <h2 className="form-title">Court Reservation</h2>
            <form className="reservation-form" onSubmit={handleSubmit}>
              {/* Left Section */}
              <div className="left-section">
                <label className="form-label">Full Name
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </label>

                <label className="form-label">Date
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </label>
              </div>

              {/* Right Section */}
              <div className="right-section">
                  <label className="form-label">Email Address
                      <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                      />
                  </label>

                  <label className="form-label">Time
                      <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="form-input"
                      required
                      />
                  </label>
              </div>

              {/* Center Section */}
              <div className="center-section">
                  <label className="form-label">Mode of Payment
                      <select
                      name="paymentMode"
                      value={formData.paymentMode}
                      onChange={handleChange}
                      className="form-input"
                      required
                      >
                      <option value="">Select Payment Mode</option>
                      <option value="cash">Cash</option>
                      <option value="creditCard">Credit Card</option>
                      <option value="online">E-wallet</option>
                      </select>
                  </label>

                  <label className="form-label">Select a Court
                      <select
                      name="court"
                      value={formData.court}
                      onChange={handleChange}
                      className="form-input"
                      required
                      >
                      <option value="">Select a Court</option>
                      {Array.from({ length: 10 }, (_, i) => (
                          <option key={i} value={`court${i + 1}`}>Court {i + 1}
                          </option>
                      ))}
                      </select>
                  </label>
                
                <Link to="/login"><button type="submit" className="form-button">Confirm</button></Link>
                
              </div>
            </form>
          </div>

        </div>
        
      </div>
    </>
  );
};
