import React, { useState } from 'react';
import '../components/Signup.css';
import googleImg from '../assets/google.png';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import signupRightImg from '../assets/signupRight.png';
import Alert from './Alert';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // For success alert
  const [showErrorAlert, setShowErrorAlert] = useState(false); // For error alert
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setShowSuccessAlert(true); // Trigger success alert
      setShowErrorAlert(false); // Hide error alert (if any)
      setTimeout(() => {
        navigate("/"); // Navigate after a delay
      }, 3000);
    } catch (error) {
      setError(error.message);
      setShowErrorAlert(true); // Trigger error alert
      setShowSuccessAlert(false); // Hide success alert
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Google User:', user);
      setShowSuccessAlert(true); // Trigger success alert
      setShowErrorAlert(false); // Hide error alert
      setTimeout(() => {
        navigate("/"); // Navigate after a delay
      }, 3000);
    } catch (error) {
      setError(error.message);
      setShowErrorAlert(true); // Trigger error alert
      setShowSuccessAlert(false); // Hide success alert
    }
  };


  return (
    <div className='signup'>
      <div className="signup-left">
        {/* Show success or error alert */}
        {showSuccessAlert && <Alert message="You have successfully signed up!" showAlert={showSuccessAlert} />}
        {showErrorAlert && <Alert message={error} showAlert={showErrorAlert} />} {/* Show error alert */}

        <div className="signup-left-circle-wrap">
          <Link to='/'>
            <div className="signup-left-circle">
              <p>D</p>
            </div>
          </Link>
        </div>

        <div className="signup-left-middle">
          <h1>Sign up</h1>
          <p>Already have an account? <Link to='/login'>Login</Link></p>

          <form className='signup-left-middle-form' onSubmit={handleSubmit}>
            <input type="text" placeholder='Full name' />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email address' />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password' />
            <button type='submit' className='signup-left-middle-form-login-btn'>Sign up</button>
            <button
              type='button'
              style={{ border: "1px solid #B6A38B" }}
              className='login-left-middle-form-google-btn'
              onClick={handleGoogleSignIn}
            >
              <img className='googleImg' src={googleImg} alt="googleImg" />
              <p>Sign up with Google</p>
            </button>
          </form>
        </div>
      </div>

      <div className="signup-right">
        <img src={signupRightImg} alt="signupRightImg" />
      </div>
    </div>
  );
}

export default Signup;
