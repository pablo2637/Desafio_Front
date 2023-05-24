import React, { useEffect, useState } from 'react';
import { FormLitros, QRCodeReader } from '../Components/';
import { useValidateToken } from '../../Hooks/useValidateToken';

export const RecycleQRpage = () => {

  const [qrCode, setQRCode] = useState('');
  const { checkToken } = useValidateToken();

  useEffect(() => {
    checkToken();

  }, []);

  return (

    <section className='mt-8'>

      <div className="" >
        <h3 className='text-center font-bold text-2xl'>Escanea el QR</h3>

        {
          (qrCode === '') &&
          <QRCodeReader qrCode={qrCode} setQRCode={setQRCode} className="" />
        }

        <FormLitros setQRCode={setQRCode} qrCode={qrCode} />
      </div>

    </section>

  );
};
