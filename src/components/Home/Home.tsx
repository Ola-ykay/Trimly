import Nav from "../Nav/Navbar";
import styles from "./Home.module.css";
import FAQs from "../FAQs/Faqs";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import UrlShortener from "../UrlShortener/UrlShortener";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <>
      <Nav />

      <div className={styles.hero_section}>
        <motion.h1 className={styles.heading} initial={{y:-60}} whileInView={{y:0}} 
      transition={{duration:1,ease:"easeOut"}}>
          Optimize Your Online Experience with Our
          Advanced <span>URL Shortening</span> Solution
        </motion.h1>
        <img src="./assets/underline.png" className={styles.underline} alt="" />
      <motion.p className={styles.heading_details} initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 2, ease: "easeOut" }}>
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options
          to reinforce your brand presence and enhance user engagement.
        </motion.p>
        <div className={styles.btns}>
          <button className={styles.signup_btn}><Link to='/signup'>Sign Up</Link></button>
          <button className={styles.more_btn}>Learn more</button>
        </div>
      </div>
      <div className={styles.image_1}>
        <img src="./assets/triangle.png" alt="" />
      </div>
      <div className={styles.image_2}>
        <img src="./assets/home_frame.png" alt="" />
      </div>
      <div className={styles.image_sec2}>
        <img
          src="./assets/rectangle.png"
          alt=""
          className={styles.rectangle_img}
        />
        <img src="./assets/ellipse.png" alt="" className={styles.ellipse_img} />
      </div>
      <section className={styles.data_section}>
        <div>
          <h2 className={styles.sec_heading}>
            One Stop.<br></br> Four <span>Possibilities</span>
          </h2>
        </div>
        <div className={styles.section_data} >
          <motion.div className={styles.data_box} initial={{y:60}} whileInView={{y:0}} 
      transition={{duration:1,ease:"easeOut"}}>
            <h3 className={styles.data_heading}>3M</h3>
            <p className={styles.data_details}>Active users</p>
          </motion.div>
          <motion.div className={styles.data_box} initial={{y:60}} whileInView={{y:0}} 
      transition={{duration:1,ease:"easeOut"}}>
            <h3 className={styles.data_heading}>60M</h3>
            <p className={styles.data_details}>
              Links & QR<br></br> codes created
            </p>
          </motion.div>
          <motion.div className={styles.data_box} initial={{y:60}} whileInView={{y:0}} 
      transition={{duration:1,ease:"easeOut"}}>
            <h3 className={styles.data_heading}>1B</h3>
            <p className={styles.data_details}>
              Clicked & Scanned <br></br>connections
            </p>
          </motion.div>
          <motion.div className={styles.data_box} initial={{y:60}} whileInView={{y:0}} 
      transition={{duration:1,ease:"easeOut"}}>
            <h3 className={styles.data_heading}>300K</h3>
            <p className={styles.data_details}>App Integrations</p>
          </motion.div>
        </div>
      </section>

      <div className={styles.features} id={styles.features}>
        <motion.div className={styles.features_section} initial={{x:-50}}
            whileInView={{x:0}}
            transition={{duration: 1, ease:"easeOut"}}>
          <div>
            <img src="./assets/line_2.png" alt="" className={styles.line_2} />
          </div>
          <h3 className={styles.feature_heading}>
            Why Choose <span>Scissors</span>
          </h3>
          <p className={styles.features_details}>
            Scissors is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you creating custom ones for
            your personal, business, event usage. Our swift QR code creation,
            management and usage tracking with advance analytics for all of
            these is second to none.
          </p>
        </motion.div>

        <div className={styles.features_list}>
          <motion.div className={styles.list_details} id='link_shortening' initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}>
            <img src="./assets/icon_1.png" alt="" className={styles.icon} />
            <h2 className={styles.feature_list_heading}>URL Shortening</h2>
            <p className={styles.feature_list_details}>
              Scissor allows you to shorten URLs of your business, events.
              Shorten your URL at scale, URL redirects.
            </p>
          </motion.div>
          <motion.div className={styles.list_details} id="custom_codes" initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}>
            <img src="./assets/icon_2.png" alt="" className={styles.icon} />
            <h2 className={styles.feature_list_heading}>Custom URLs</h2>
            <p className={styles.feature_list_details}>
              With Scissor, you can create custom URLs, with the length you
              want! A solution for socials and businesses.
            </p>
          </motion.div>
          <motion.div className={styles.list_details} id="qr_codes" initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}>
            <img src="./assets/icon_3.png" alt="" className={styles.icon} />
            <h2 className={styles.feature_list_heading}>QR Codes</h2>
            <p className={styles.feature_list_details}>
              Generate QR codes to your business, events. Bring your audience
              and customers to your doorstep with this scan and go solution.
            </p>
          </motion.div>
          <motion.div className={styles.list_details} id="data_analytics" initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}>
            <img src="./assets/icon_4.png" alt="" className={styles.icon} />
            <h2 className={styles.feature_list_heading}>Data Analytics</h2>
            <p className={styles.feature_list_details}>
              Receive data on the usage of either your shortened URL, custom
              URLs or generated QR codes. Embedded to monitor progress.
            </p>
          </motion.div>
        </div>
      </div>
      <section className={styles.pricing} id='pricing'>
        <motion.div className={styles.pricing_heading_sec} initial={{x:50}} whileInView={{x:0}}
            transition={{duration: 1, ease:"easeOut"}}>
          <img src="./assets/line_2.png" alt="" className={styles.line_} />
          <h2 className={styles.pricing_title}>
            A <span>Price Perfect</span> For Your Needs.
          </h2>
          <p className={styles.pricing_details}>
            From catering for your personal, business, event, socials needs, you
            can be rest assured we have you in mind in our pricing.
          </p>
        </motion.div>
        <div className={styles.pricing_cards}>
          <img
            src="./assets/card_1.png"
            alt=""
            className={styles.price_card_1}
          />
          <img
            src="./assets/card_2.png"
            alt=""
            className={styles.price_card_2}
          />
          <img
            src="./assets/card_3.png"
            alt=""
            className={styles.price_card_3}
          />
        </div>
        <div className={styles.pricing_btns}>
          <button className={styles.price_btn_1}>Get Custom Pricing</button>
          <button className={styles.price_btn_2}>Select Pricing</button>
        </div>
      </section>
      <div>
        <UrlShortener />
      </div>


      <div>
        <FAQs />
      </div>

      <div className={styles.url_container}>
        <div className={styles.url_sec}>
          <h2 className={styles.url_heading}>
            Revolutionizing Link Optimization
          </h2>
          <button className={styles.url_button}>
            <Link to="/signup">Get Started</Link>
          </button>
          <img src="./assets/bg_vector1.png" alt="" className={styles.bg_vec1} />
          <img src="./assets/bg_vector2.png" alt="" className={styles.bg_vec2} />
          
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
