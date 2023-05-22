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
        <div>Pagina como si fueras una empresa para leer qr del usuario</div>

        {/* {showQRCodeReader ? (
          <QRCodeReader className="camara" />
        ) : (
          <FormLitros />
        )} */}

        {
          (qrCode === '') &&
          <QRCodeReader qrCode={qrCode} setQRCode={setQRCode} className="camara" />
        }



        <FormLitros user_id={qrCode.user_id} />

        {/* <button onClick={handleToggleComponent}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
          {showQRCodeReader ? 'Mostrar Formulario' : 'Mostrar Cámara'}
        </button> */}
      </div>
    </>
  );
};
