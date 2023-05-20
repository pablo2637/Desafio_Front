import { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import { useSelector } from 'react-redux';


export const CreateQR = () => {

  const { user } = useSelector(state => state.user);
  const [qrValue, setQrValue] = useState(null);
  

  useEffect(() => {

    if (user.user_id)
      setQrValue({
        user_id: user.user_id,
        name: user.name,
        email: user.email
      })

  }, [user])


  return (

    <div>
      {
        (qrValue) &&
        <QRCode value={JSON.stringify(qrValue)} />
      }
    </div>

  );
};