import React, { useState } from 'react';
import { FormLitros, QRCodeReader } from '../Components/';

export const RecycleQRpage = () => {
  const [showQRCodeReader, setShowQRCodeReader] = useState(true);


  const [qrCode, setQRCode] = useState('');

  const handleToggleComponent = () => {
    setShowQRCodeReader(!showQRCodeReader);
  };

  return (
    <>

      <div className="flex flex-col items-center" >
        <h3>Escanea el QR</h3>

        {/* {showQRCodeReader ? (
          <QRCodeReader className="camara" />
        ) : (
          <FormLitros />
        )} */}

        {
          (qrCode === '') &&
          <QRCodeReader qrCode={qrCode} setQRCode={setQRCode} className="camara" />
        }



        <FormLitros setQRCode={setQRCode} qrCode={qrCode} />

        {/* <button onClick={handleToggleComponent}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
          {showQRCodeReader ? 'Mostrar Formulario' : 'Mostrar Cámara'}
        </button> */}
      </div>
    </>
  );
};
