import React, { useState } from "react";

import "./Log_In.css";

export const Log_in = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  return (
    <>
      <div className="loginbg">
        <div className="container">
          <div className="logform">
            <h2 className="loghead">{isLogin ? "LOGIN" : "SIGN UP"}</h2>
            <form>
              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input className="loginput"
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              )}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input className="loginput"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="loginput"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="logsbtn">
                {isLogin ? "LOGIN" : "SIGN UP"}
              </button>
            </form>
            <p className="toggle-text">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <span onClick={toggleForm} className="toggle-link">
                {isLogin ? " Sign Up" : " Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
