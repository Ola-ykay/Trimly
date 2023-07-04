import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BiLogoApple } from "react-icons/bi";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import styles from './Signup.module.css'
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from "../Footer/Footer";
// import Login from "../Login/Login";
// import { googleProvider } from "../../config/config";
import app from "../../config/config";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Signup: React.FC = () => {
const auth = getAuth(app);
const navigate = useNavigate();

const handleSignup =() => {

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    alert("You have successfully created an account")
    navigate('/login')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    alert(errorCode)
    // const errorMessage = error.message;
    // ..
  });
}




    const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [retypePassword, setRetypePassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRetypePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRetypePassword(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.length < 6) {
        setPasswordError('Password must be at least 6 characters long.');
      } else if (!/\d/.test(password)) {
        setPasswordError('Password must contain at least one number.');
      } else if (!/[A-Z]/.test(password)) {
        setPasswordError('Password must contain at least one uppercase letter.');
      } else if (!/[a-z]/.test(password)) {
        setPasswordError('Password must contain at least one lowercase letter.');
      } else if (password !== retypePassword) {
        setPasswordError('Passwords do not match.');
      } else {
         // Password is valid, do further processing (e.g., submit the form)
      // Reset password error message
      setPasswordError('');
      // Clear form inputs
      setPassword('');
      setRetypePassword('');
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleRetypePasswordVisibility = () => {
    setShowRetypePassword(!showRetypePassword);
  };

  
  const handleGoogleClick = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider )
    .then((result) => {
      // Signup with Google successful
      const credential =  GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user, credential);
      // Redirect to the home page or any other desired route
      navigate("/logout");
    })
    .catch((error) => {
      // Handle Google signup errors
      console.error(error);
    });
  };

  // useEffect(() => {
  //   setValue(localStorage.getItem("email") || "");
  // }, []);

  return (
    <>
    <div className={styles.signup_cont}>
     <Link to="/" className={styles.signup_logo}>
          <img src='./assets/logo.png' alt="logo" />
          </Link>
         
    <div className={styles.signup_wrapper}>
    <img src="./assets/shortener.png" alt="shortener_vector"  className={styles.shortener_vector}/>
     
        <div className={styles.signup_section}>
          <p>Sign up with:</p>
          <div className={styles.signup_section_btns}>
            <button onClick={handleGoogleClick}>
              <FcGoogle size='1rem' className={styles.login_icon}/>
              Google
            </button>

            <button>
              <BiLogoApple size='1rem' className={styles.login_icon}/>
              Apple
            </button>
          </div>
          <form onSubmit={handleSubmit} className={styles.signup_form}>
            <div><h2>Or</h2></div>

            <input
              type="username"
              id="username"
              value={username}
              onChange={handleNameChange}
              placeholder="Username"
              required
            />
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              required
            />

            <div>
            <input
              type={showPassword ? 'password' : ''}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
           />
            <span onClick={togglePasswordVisibility}>
                {showPassword ? 
                <FaEyeSlash className={styles.show_password}/> : <FaEye className={styles.show_password}/>} 
            </span>
            </div>

            <div>
            <input
              type={showRetypePassword ? 'password' : ''}
              id="password"
              value={retypePassword}
              onChange={handleRetypePasswordChange}
              placeholder="Retype Password"
              required
           />
            <span onClick={toggleRetypePasswordVisibility}>
                {showRetypePassword ? 
                <FaEyeSlash className={styles.show_password}/> : <FaEye className={styles.show_password}/>} 
            </span>
            </div>
           
            

            <button type="submit" onClick={handleSignup} className={styles.submit_btn}>Sign up</button>
          </form>
          <div className={styles.signup_login}>
            <p>Already have an account?</p>
            {passwordError && <p>{passwordError}</p>}
            <button>
              <Link to="/login">Log in</Link>
            </button>
          </div>
          <div className={styles.signup_footer}>
            <p>
            By signing in with  an account, you agree to 
            </p>
            <p>Scissor's<i> Terms of Service</i>, <i>Privacy Policy</i> and <i>Acceptable Use Policy</i>.</p>
          </div>
        </div>
      
    </div>
    </div>
    <Footer />
    </>
  );
};


export default Signup;