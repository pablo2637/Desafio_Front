import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export const QRCodeReader = ({ setQRCode, qrCode }) => {

  const handleScan = (data) => {
    console.log('data', data)
    if (data) {
      setQRCode(data);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div className='camara'>
      <p>result: {qrCode}</p>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            console.info('data', result?.text);
            setQRCode(result?.text);

          }

          if (!!error) {
            console.info('error');
          }
        }}
        // delay={300}
        // onError={handleError}
        // onScan={handleScan}
        // facingMode="environment"
        style={{ width: '50%' }}
      />
      <p>QR Code: {qrCode}</p>
    </div>
  );
};

