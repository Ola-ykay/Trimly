import React from "react";
import styles from "./LogOut.module.css";
import Footer from "../Footer/Footer";
import app from "../../config/config";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {Helmet} from 'react-helmet-async';

const LogOut: React.FC = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("logged out");
        alert("You have successfully logged out");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        const errorCode = error.code;
        alert(errorCode);
      });
  };
  // const handleLogout = () => {
  //    localStorage.clear()
  //    window.location.reload()

  // }
  return (
    <>
    <Helmet>
        <title>Logout</title>
        <meta name="description" content="Logout- Scissors web application" />
        <link rel="canonical" href="/logout" />
      </Helmet>
      <div className={styles.logout_cont}>
        <Link to="/" className={styles.logout_logo}>
          <img src="./assets/logo.png" alt="logo" />
        </Link>
        <div className={styles.logout}>
          <button onClick={handleLogout} className={styles.logout_button}>
            Log out
          </button>
        </div>
      </div>
      <div className={styles.construction_cont}>
        <div className={styles.construction_sec}>
          <h2>Oops!</h2>
<h3>Under construction</h3>
<p>We are working to make this app more enjoyable, In the meantime, trim your links on the home page</p>
<button><Link to="/" >Trim Now</Link></button>
        </div>
        <img src="./assets/construction_img.png" alt="" className={styles.construction_img} />
      </div>
      <Footer />
    </>
  );
};
export default LogOut;
