import React, { useState } from 'react';
import { FormLitros, QRCodeReader } from '../Components/';

export const RecycleQRpage = () => {

  const [qrCode, setQRCode] = useState('');

  return (
    <section>

      <div className="flex flex-col items-center" >
        <h3>Escanea el QR</h3>

        {
          (qrCode === '') &&
          <QRCodeReader qrCode={qrCode} setQRCode={setQRCode} className="camara" />
        }

        <FormLitros setQRCode={setQRCode} qrCode={qrCode} />
      </div>

    </section>

  );
};
