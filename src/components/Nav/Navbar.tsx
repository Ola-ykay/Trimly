import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import styles from "./Nav.module.css";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <Link to="/">
          <img src="./assets/logo.png" alt="logo" />
        </Link>
      </div>
     
      <ul className={`${styles.nav_menu} ${menuOpen ? styles.open : ""}`}>
        <li className={styles.nav_item} onClick={toggleMenu}>
          <a href="#url">My URLs</a>
        </li>
        <li className={styles.nav_item}>
          <div className={styles.dropdown}>
            <button
              className={styles.nav_feature_button}
              onClick={toggleDropdown}
            >
              Features{" "}
              {dropdownOpen ? (
                <FaChevronUp className={styles.chevron} />
              ) : (
                <FaChevronDown className={styles.chevron} />
              )}
            </button>
            {dropdownOpen && (
              <ul className={styles.dropdown_menu}>
                <li className={styles.dropdown_item} onClick={toggleMenu}>
                  <Link
                    to="#link_shortening"
                    onClick={() => scrollToSection("link_shortening")}
                  >
                    URL Shortening
                  </Link>
                </li>
                <li className={styles.dropdown_item} onClick={toggleMenu}>
                  <Link
                    to="#custom_codes"
                    onClick={() => scrollToSection("custom_codes")}
                  >
                    Custom URLs
                  </Link>
                </li>
                <li className={styles.dropdown_item} onClick={toggleMenu}>
                  <Link
                    to="#qr_codes"
                    onClick={() => scrollToSection("qr_codes")}
                  >
                    QR Codes
                  </Link>
                </li>
                <li className={styles.dropdown_item} onClick={toggleMenu}>
                  <Link
                    to="#data_analytics"
                    onClick={() => scrollToSection("data_analytics")}
                  >
                    Data Analytics
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </li>

        <li className={styles.nav_item} onClick={toggleMenu}>
          <a href="#pricing" onClick={() => scrollToSection("pricing")}>
            Pricing
          </a>
        </li>
        <li className={styles.nav_item} onClick={toggleMenu}>
          <Link to="#analytics">Analytics</Link>
        </li>
        <li className={styles.nav_item} onClick={toggleMenu}>
          <a href="#faqs" onClick={() => scrollToSection("faqs")}>
            FAQs
          </a>
        </li>
        

        <div className={styles.right_navbar}>
          <li className={styles.right_navbar_item_login} onClick={toggleMenu}>
            <Link to="/login">Login</Link>
          </li>
          <li className={styles.right_navbar_item} onClick={toggleMenu}>
            <button className={styles.nav_button}>Try for free</button>
          </li>
        </div>
      </ul>
      <div className={styles.mobile_menu} onClick={toggleMenu}>
      {menuOpen ? (
          <FaTimes className={styles.close_icon} />
        ) : (
          <FaBars className={styles.menu_icon} />
        )}
      </div>
    </header>
  );
};

export default Navbar;




// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
// import styles from "./Nav.module.css";

// const Navbar: React.FC = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(true);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const scrollToSection = (sectionId: string) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setMenuOpen(false);
//     }
//     else{
//       setMenuOpen(true);
//     }
//   };

//   return (
//     <header className={styles.navbar}>
//       <div className={styles.navbar_logo}>
//         <Link to="/">
//           <img src="./assets/logo.png" alt="logo" />
//         </Link>
//       </div>
//       <div className={styles.mobile_menu} onClick={toggleMenu}>
//        {menuOpen ? <FaBars /> : <FaTimes />}
//       </div>
//       <ul className={`${styles.nav_menu} ${menuOpen ? "" : styles.open}`}>
//         <li className={styles.nav_item}>
//           <a href="#url">My URLs</a>
//         </li>
//         <li className={styles.nav_item}>
//           <div className={styles.dropdown}>
//             <button
//               className={styles.nav_feature_button}
//               onClick={toggleDropdown}
//             >
//               Features{" "}
//               {dropdownOpen ? (
//                 <FaChevronUp className={styles.chevron} />
//               ) : (
//                 <FaChevronDown className={styles.chevron} />
//               )}
//             </button>
//             {dropdownOpen && (
//               <ul className={styles.dropdown_menu}>
//                 <li className={styles.dropdown_item}>
//                   <Link
//                     to="#link_shortening"
//                     onClick={() => scrollToSection("link_shortening")}
//                   >
//                     URL Shortening
//                   </Link>
//                 </li>
//                 <li className={styles.dropdown_item}>
//                   <Link
//                     to="#custom_codes"
//                     onClick={() => scrollToSection("custom_codes")}
//                   >
//                     Custom URLs
//                   </Link>
//                 </li>
//                 <li className={styles.dropdown_item}>
//                   <Link
//                     to="#qr_codes"
//                     onClick={() => scrollToSection("qr_codes")}
//                   >
//                     QR Codes
//                   </Link>
//                 </li>
//                 <li className={styles.dropdown_item}>
//                   <Link
//                     to="#data_analytics"
//                     onClick={() => scrollToSection("data_analytics")}
//                   >
//                     Data Analytics
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </div>
//         </li>

//         <li className={styles.nav_item}>
//           <a href="#pricing" onClick={() => scrollToSection("pricing")}>
//             Pricing
//           </a>
//         </li>
//         <li className={styles.nav_item}>
//           <Link to="#analytics">Analytics</Link>
//         </li>
//         <li className={styles.nav_item}>
//           <a href="#faqs" onClick={() => scrollToSection("faqs")}>
//             FAQs
//           </a>
//         </li>

//         <div className={styles.right_navbar}>
//           <li className={styles.right_navbar_item_login}>
//             <Link to="/login">Login</Link>
//           </li>
//           <li className={styles.right_navbar_item}>
//             <button className={styles.nav_button}>Try for free</button>
//           </li>
//         </div>
//       </ul>
//     </header>
//   );
// };

// export default Navbar;




// import React from "react";
// import styles from "./Nav.module.css";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// const Navbar: React.FC = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };
//   const scrollToSection = (sectionId: string) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

  
//   return (
//     <header className={styles.navbar}>
//       <div className={styles.navbar_logo}>
//         <Link to="/">
//           <img src="./assets/logo.png" alt="logo" />
//         </Link>
//       </div>
//       <ul className={styles.nav_menu}>
//         <li className={styles.nav_item}>
//           <a href="#url">My URLs</a>
//         </li>
//         <li className={styles.nav_item}>
          
//           <div className={styles.dropdown}>
//             <button className={styles.nav_feature_button} onClick={toggleDropdown}>
//               Features {dropdownOpen ? <FaChevronUp  className={styles.chevron}/>
//                : <FaChevronDown className={styles.chevron}/>}
//             </button>
//             {dropdownOpen && (
//               <ul className={styles.dropdown_menu}>
//                 <li className={styles.dropdown_item}>
//                 <Link to="#link_shortening" onClick={() => scrollToSection('link_shortening')}>URL Shortening</Link>
                  
//                 </li>
//                 <li className={styles.dropdown_item}>
//                   <Link to="#custom_codes" onClick={() => scrollToSection('custom_codes')}>Custom URLs</Link>
//                 </li>
//                 <li className={styles.dropdown_item}>
//                 <Link to="#qr_codes" onClick={() => scrollToSection('qr_codes')}>QR Codes</Link>
//                 </li>
//                 <li className={styles.dropdown_item}>
//                 <Link to="#data_analytics" onClick={() => scrollToSection('data_analytics')}>Data Analytics</Link>
//                 </li>
//               </ul>
//               )}
//               </div>
//         </li>

//         <li className={styles.nav_item}>
//           <a href='#pricing' onClick={() => scrollToSection('pricing')}>Pricing</a>
//         </li>
//         <li className={styles.nav_item}>
//           <Link to="#analytics">Analytics</Link>
//         </li>
//         <li className={styles.nav_item}>
//           <a href="#faqs" onClick={() => scrollToSection('faqs')}>FAQs</a>
//         </li>

//         <div className={styles.right_navbar}>
//           <li className={styles.right_navbar_item_login}>
//             <Link to="/login">Login</Link>
//           </li>
//           <li className={styles.right_navbar_item}>
//             <button className={styles.nav_button}>Try for free</button>
//           </li>
//         </div>
//       </ul>
//     </header>
//   );
// };

// export default Navbar;
