import { useState } from "react";
import QRCodeComponent from "./QRCodeComponent";
import { GiBoltCutter } from "react-icons/gi";
import styles from "./UrlShortener.module.css";
import { LuCopy } from "react-icons/lu";
import { HiOutlineShare } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";

type CustomDomain = "domain1" | "domain2" | "domain3" | "domain4";

interface FormState {
  url: string;
  customDomain: CustomDomain | "";
  alias: string;
}

const UrlShortener: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    url: "",
    customDomain: "",
    alias: "",
  });

  const [shortenedUrl, setShortenedUrl] = useState<string | null>(null);
  const [showQRCode, setShowQRCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showContainer, setShowContainer] = useState(false);

 
  const closeButton = () => {
setShortenedUrl(null);
setShowQRCode(false);
setShowContainer(false);
 
}
  

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTrimClick = () => {
    const { url, alias } = formState;
    if (url) {
      // Add your own URL shortening logic here
      const trimmedUrl = url.substring(0, 10) + ".lnk";
      const aliasUrl =  alias.substring(0, 8) + ".lnk";
      const shortUrl = alias ? aliasUrl : `${trimmedUrl}`;

      // Update state with the shortened URL
      setShortenedUrl(shortUrl);
      setShowQRCode(true);
      setShowContainer(true);
    }
  };

  const handleCopyClick = () => {
    if (shortenedUrl) {
      navigator.clipboard
        .writeText(shortenedUrl)
        .then(() => {
          console.log("Copied to clipboard");
          setCopied(true);
        })
        .catch((error) => {
          console.error("Error copying URL to clipboard:", error);
        });
        setTimeout(() => {
          setCopied(false);
        }, 1000);
        
    }
  };

  const handleShareClick = () => {
    // Implement your share functionality here
    // This can include sharing the URL through various channels like email, social media, etc.
    if (shortenedUrl) {
      console.log("Sharing URL:", shortenedUrl);
    }
  };

  return (
    <div className={styles.shortener_container} id='url'>
      <div>
        <img src="./assets/shortener_image1.png" alt="" className={styles.shortener_bg1} />
        <img src="./assets/shortener_image2.png" alt="" className={styles.shortener_bg2} />
      </div>
      <div className={`${styles.shortener_sec} ${showContainer ? styles.backdrop : ''}`}>
      <form className={styles.shortener_form}>
     
        <div>
          <input
            type="text"
            name="url"
            value={formState.url}
            onChange={handleInputChange}
            placeholder="Paste URL here ..."
          />
        </div>
        <div className={styles.two_inputs}>
        <div>
          <select
            name="customDomain"
            value={formState.customDomain}
            onChange={handleInputChange}
          >
            <option value="" className={styles.domain}>Choose Domain</option>
            <option value="domain1">Domain 1</option>
            <option value="domain2">Domain 2</option>
            <option value="domain3">Domain 3</option>
            <option value="domain4">Domain 4</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            name="alias"
            value={formState.alias}
            onChange={handleInputChange}
            placeholder="Type Alias here"
          />
        </div>
        </div>
        <button type="button" onClick={handleTrimClick} >
          Trim URL <GiBoltCutter />
        </button>
        <div className={styles.extras}>
          <p>
            By clicking TrimURL, I agree to the <span>Terms of Service</span>,
            <span>Privacy Policy</span> and
            <span> Use of Cookies</span>.
          </p>
        </div>
       
      </form>
      </div>
{showContainer && (
  <div className="overlay">

      {shortenedUrl && (
        <div className={styles.qrcode_container}>
          <div className={styles.qrcode_close_btn}>
            <AiOutlineCloseCircle onClick={closeButton} /></div>
          <p>{shortenedUrl}</p>
          {showQRCode && (
            <div>
              <QRCodeComponent value={shortenedUrl} />
              <div className={styles.qrcode_button}>
                <button type="button" onClick={handleCopyClick}>
                <LuCopy />
                </button>
                {copied && <span className={styles.copied_message}>Copied!</span>}

                <button type="button" onClick={handleShareClick}>
                <HiOutlineShare />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
     
      
    </div>
    )}
    </div> 
  );
};

export default UrlShortener;

