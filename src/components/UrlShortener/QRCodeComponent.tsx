import React from "react";
import QRCode from "react-qr-code";

import styles from "./UrlShortener.module.css";

interface QRCodeProps {
  value: string;
}

const QRCodeComponent: React.FC<QRCodeProps> = ({ value }) => {
  return <QRCode value={value} className={styles.qrcode} />;
};

export default QRCodeComponent;
