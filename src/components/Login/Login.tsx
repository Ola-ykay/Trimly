import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { BiLogoApple } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
// import { googleProvider } from "../../config/config";
import app from "../../config/config";
import { sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from "../Footer/Footer";
// import LogOut from "../LogOut/LogOut";


const Login: React.FC = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();

const handleLogin =()=>{
  const auth = getAuth(app);
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
     navigate("/logout"); 
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode)
    });
  
}
const handleForgotPassword = () => {

    sendPasswordResetEmail( auth, email)
    .then(() => {
      alert('A password reset email has been sent to your email address.')
    })
    .catch((error) => {
     alert(error.message);
    });
};
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  

  const handleGoogleClick = () => {
 const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Signup with Google successful
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user, credential);
        // Redirect to the home page or any other desired route
        navigate("/logout");
      })
      .catch((error) => {
        // Handle Google signup errors
        console.error(error);
      });
  }
  
  

  return (
    <>
     <Helmet>
        <title>Login</title>
        <meta name="description" content="Login to Scissors web application" />
        <link rel="canonical" href="/login" />
      </Helmet>
    <div className={styles.login_cont}>
     <Link to="/" className={styles.login_logo}>
          <img src='./assets/logo.png' alt="logo" />
          </Link>
    <div className={styles.login_wrapper}>
      
      <img src="./assets/shortener.png" alt="shortener_vector"  className={styles.shortener_vector}/>
      
        <div className={styles.login_section}>
          <p>Login with:</p>
          <div className={styles.login_section_btns}>
            <button onClick={handleGoogleClick}>
              <FcGoogle size='1rem' className={styles.login_icon}/>
              Google
            </button>

            <button>
              <BiLogoApple size='1rem' className={styles.login_icon}/>
              Apple
            </button>
          </div>
          <form onSubmit={handleSubmit} className={styles.login_form}>
            <div><h2>Or</h2></div>

            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email address"
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
           
            <div className={styles.login_forgot_password}>
            <button onClick={handleForgotPassword}>Forgot your password?</button>
            </div>
            

            <button type="submit" onClick={handleLogin}className={styles.submit_btn}>Log in</button>
          </form>
          <div className={styles.login_signup}>
            <p>Don't have an account?</p>
            <button>
              <Link to="/signup">Sign up</Link>
            </button>
          </div>
          <div className={styles.login_footer}>
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

export default Login;

