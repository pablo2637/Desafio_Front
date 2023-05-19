import React, { useState } from 'react';
import {QrReader} from 'react-qr-reader';

export const QRCodeReader = () => {
  const [qrCode, setQRCode] = useState('');

  const handleScan = (data) => {
    if (data) {
      setQRCode(data);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        //facingMode="environment"
        style={{ width: '100%' }}
      />
      <p>QR Code: {qrCode}</p>
    </div>
  );
};

