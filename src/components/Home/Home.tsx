import Nav from "../Nav/Navbar";
import styles from "./Home.module.css";
import FAQs from "../FAQs/Faqs";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import UrlShortener from "../UrlShortener/UrlShortener";


const Home = () => {
  return (
    <>
      <Nav />

      <div className={styles.hero_section}>
        <h1 className={styles.heading}>
          Optimize Your Online Experience with Our<br></br>
          Advanced <span>URL Shortening</span> Solution
        </h1>
        <img src="./assets/underline.png" className={styles.underline} alt="" />
        <p className={styles.heading_details}>
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options
          to reinforce your brand presence and enhance user engagement.
        </p>
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
        <div className={styles.section_data}>
          <div>
            <h3 className={styles.data_heading}>3M</h3>
            <p className={styles.data_details}>Active users</p>
          </div>
          <div>
            <h3 className={styles.data_heading}>60M</h3>
            <p className={styles.data_details}>
              Links & QR<br></br> codes created
            </p>
          </div>
          <div>
            <h3 className={styles.data_heading}>1B</h3>
            <p className={styles.data_details}>
              Clicked & Scanned <br></br>connections
            </p>
          </div>
          <div>
            <h3 className={styles.data_heading}>300K</h3>
            <p className={styles.data_details}>App Integrations</p>
          </div>
        </div>
      </section>

      <div className={styles.features} id={styles.features}>
        <div className={styles.features_section}>
          <div>
            <img src="./assets/line_2.png" alt="" className={styles.line_2} />
          </div>
          <h3 className={styles.feature_heading}>
            Why choose <span>Scissors</span>
          </h3>
          <p className={styles.features_details}>
            Scissors is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you creating custom ones for
            your personal, business, event usage. Our swift QR code creation,
            management and usage tracking with advance analytics for all of
            these is second to none.
          </p>
        </div>

        <div className={styles.features_list}>
          <div className={styles.list_details} id='link_shortening'>
            <img src="./assets/icon_1.png" alt="" className={styles.icon} />
            <h2 className={styles.feature_list_heading}>URL Shortening</h2>
            <p className={styles.feature_list_details}>
              Scissor allows you to shorten URLs of your business, events.
              Shorten your URL at scale, URL redirects.
            </p>
          </div>
          <div className={styles.list_details} id="custom_codes">
            <img src="./assets/icon_2.png" alt="" className={styles.icon} />
            <h2 className={styles.feature_list_heading}>Custom URLs</h2>
            <p className={styles.feature_list_details}>
              With Scissor, you can create custom URLs, with the length you
              want! A solution for socials and businesses.
            </p>
          </div>
          <div className={styles.list_details} id="qr_codes">
            <img src="./assets/icon_3.png" alt="" className={styles.icon} />
            <h2 className={styles.feature_list_heading}>QR Codes</h2>
            <p className={styles.feature_list_details}>
              Generate QR codes to your business, events. Bring your audience
              and customers to your doorstep with this scan and go solution.
            </p>
          </div>
          <div className={styles.list_details} id="data_analytics">
            <img src="./assets/icon_4.png" alt="" className={styles.icon} />
            <h2 className={styles.feature_list_heading}>Data Analytics</h2>
            <p className={styles.feature_list_details}>
              Receive data on the usage of either your shortened URL, custom
              URLs or generated QR codes. Embedded to monitor progress.
            </p>
          </div>
        </div>
      </div>
      <section className={styles.pricing} id='pricing'>
        <div className={styles.pricing_heading_sec}>
          <img src="./assets/line_2.png" alt="" className={styles.line_} />
          <h2 className={styles.pricing_title}>
            A <span>price perfect</span> for your needs.
          </h2>
          <p className={styles.pricing_details}>
            From catering for your personal, business, event, socials needs, you
            can be rest assured we have you in mind in our pricing.
          </p>
        </div>
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
          <img src="./assets/bg_vector1.png" alt="" className={styles.vec1} />
          <img src="./assets/bg_vector1.png" alt="" className={styles.vec2} />
          <img src="./assets/bg_vector1.png" alt="" className={styles.vec3} />
          <img src="./assets/bg_vector2.png" alt="" className={styles.vec_4} />
          <img src="./assets/bg_vector2.png" alt="" className={styles.vec_5} />
          <img src="./assets/bg_vector2.png" alt="" className={styles.vec_6} />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
