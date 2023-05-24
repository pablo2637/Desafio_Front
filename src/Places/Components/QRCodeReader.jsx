import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export const QRCodeReader = ({ setQRCode, qrCode }) => {



  const [delayScan, setDelayScan] = useState(500);

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
    <div className='mx-auto my-5 rounded-xl border-gray-800 bg-slate-100 border-2  p-1 w-4/5 h-3/4 max-h-[480px] max-w-[480px]'>
      <QrReader
        className='w-full h-full'
        scanDelay={delayScan}
        onResult={(result, error) => {
          if (!!result) {
            console.info('data', result?.text);
            setDelayScan(false)
            setQRCode(JSON.parse(result?.text));

          }

          if (!!error) {
            console.info('error');
          }
        }}
        // delay={300}
        // onError={handleError}
        // onScan={handleScan}
        // facingMode="environment"
        // style={{ width: '50%' }}
      />      
    </div>
  );
};

