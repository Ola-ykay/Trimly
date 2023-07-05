import React, { useState } from "react";
import styles from "./faqs.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQs: FAQItem[] = [
  {
    question: "How does URL shortening work?",
    answer:
      "URL shortening works by taking a long URL and creating a shorter condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
  },

  {
    question:
      "Is it necessary to create an account to use the URL shortening service?",
    answer:
      "No, you can use the URL shortening service without creating an account. However, creating an account will allow you to manage your links and track their performance.",
  },
  {
    question: "Are the shortened links permanent? Will they expire?",
    answer:
      "The shortened links are permanent and will not expire unless you choose to delete them. However, if you are using a custom domain, you will need to renew your domain registration periodically.",
  },
  {
    question: "Are there any limitations on the number of URLs I can shorten?",
    answer:
      "No, there are no limitations on the number of URLs you can shorten.",
  },
  {
    question:
      "Can I customize the shortened URLs to reflect my brand or content?",
    answer:
      "Yes, you can customize the shortened URLs to reflect your brand or content. You can use custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement.",
  },
  {
    question: "Can I track the performance of my shortened URLs?",
    answer:
      "Yes, you can track the performance of your shortened URLs. You can view the number of clicks, location of clicks, and other metrics to measure the performance of your links.",
  },
  {
    question:
      "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
    answer:
      "Yes, the URL shortening service is secure and the shortened links are protected against spam or malicious activity. The service uses advanced security measures to protect your links and ensure that they are not used for malicious purposes.",
  },
  {
    question: "What is a QR code and what can it do?",
    answer:
      "A QR code is a type of barcode that can be scanned by a smartphone or other mobile device. It can be used to store information such as a URL, contact details, or other data. QR codes are often used in marketing campaigns to provide additional information about a product or service.",
  },
  {
    question:
      "Is there an API available for integrating the URL shortening service into my own applications or websites?",
    answer:
      "Yes, there is an API available for integrating the URL shortening service into your own applications or websites. You can use the API to create, manage, and track your links programmatically.",
  },
];

const FAQSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
   <>
<div className={styles.faqs} id='faqs'>
    <div className={styles.faq_section}>
      <div>
        <img src="./assets/line_2.png" alt="" className={styles.faq_line} />
      </div>
      <h2 className={styles.faq_heading}>FAQs</h2>
      {FAQs.map((faq, index) => (
        <div key={index} className={styles.faq_item}>
          <div onClick={() => toggleFAQ(index)} className={styles.faq_details}>
            <div className={styles.question}>{faq.question}</div>
            <div className={styles.icon}>
              {expandedIndex === index ? "—" : "+"}
            </div>
          </div>

          {expandedIndex === index && (
            <div className={styles.answer}>{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
    <div className={styles.faq_bg_images}>
        <img src="./assets/faq_vec1.png" alt="" className={styles.faq_vec1} />
        <img src="./assets/faq_vec2.png" alt="" className={styles.faq_vec2} />
        
    </div>
    </div>
    </>
  );
};

export default FAQSection;
