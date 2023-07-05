import React from "react";
import styles from "./Footer.module.css";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <>

    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_socials}>
          <div className={styles.logo_black}>
            <Link to="/">
            <img src="./assets/logo_blk.png" alt="" />
            </Link>
          </div>

          <div className={styles.social_media}>
            <a href="https://www.twitter.com">
              <FaTwitter className={styles.social_media_links} />
            </a>
            <a href="https://www.instagram.com">
              <FaInstagram className={styles.social_media_links} />
            </a>
            <a href="https://www.linkedin.com">
              <FaLinkedin className={styles.social_media_links} />
            </a>
            <a href="https://www.facebook.com">
              <FaFacebookSquare className={styles.social_media_links} />
            </a>
          </div>
        </div>
        <div className={styles.footer_sec}>
          <div className={styles.footer_extras}>
            <h4 className={styles.footer_heading}>Why Scissor?</h4>
            <ul className={styles.footer_list}>
              <li>Scissor 101</li>
              <li>Integration & API</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className={styles.footer_extras}>
            <h4 className={styles.footer_heading}>Solutions</h4>
            <ul className={styles.footer_list}>
              <li>Social Media</li>
              <li>Digital Marketing</li>
              <li>Customer Service</li>
              <li>For Developers</li>
            </ul>
          </div>
          <div className={styles.footer_extras}>
            <h4 className={styles.footer_heading}>Products</h4>
            <ul className={styles.footer_list}>
              <li>Link Management</li>
              <li>QR Codes</li>
              <li>Link-in-bio</li>
            </ul>
          </div>
          <div className={styles.footer_extras}>
            <h4 className={styles.footer_heading}>Company</h4>
            <ul className={styles.footer_list}>
              <li>About Scissors</li>

              <li>Careers</li>
              <li>Partners</li>
              <li>Press</li>
              <li>Contact</li>
              <li>Reviews</li>
            </ul>
          </div>
          <div className={styles.footer_extras}>
            <h4 className={styles.footer_heading}>Resources</h4>
            <ul className={styles.footer_list}>
              <li>Blog</li>
              <li>Resources Library</li>
              <li>Developers</li>
              <li>App Connectors</li>
              <li>Support</li>
              <li>Trust Centers</li>
              <li>Browser Extension</li>
              <li>Mobile App</li>
            </ul>
          </div>
          <div className={styles.footer_extras}>
            <h4 className={styles.footer_heading}>Features</h4>
            <ul className={styles.footer_list}>
              <li>Branded Links</li>
              <li>Mobile Links</li>
              <li>Campaign</li>
              <li>Management & Analytics</li>
              <li>QR Codes Generation</li>
            </ul>
          </div>
          <div className={styles.footer_extras}>
            <h4 className={styles.footer_heading}>Legal</h4>
            <ul className={styles.footer_list}>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Terms of Service</li>
              <li>Acceptable Use Policy</li>
              <li>Code of Conduct</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <p>Term of Service | Security | Scissor 2023</p>
      </div>
     <div>
      <img src="./assets/footer_bg1.png" alt="" className={styles.footer_bg1} />
      <img src="./assets/footer_bg2.png" alt="" className={styles.footer_bg2} />
     </div>
      </div>
    </>
  );
};

export default Footer;
