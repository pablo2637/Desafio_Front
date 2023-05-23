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

    <article className="gcardContainer mt-10">

      <div className='gCard centerDiv text-center'>

        {
          (qrValue) &&
          <div>
            <h3>Este es tu QR</h3>
            <p>¡Gana puntos y protege el agua!
              Muestra tu código QR cuando lleves tu aceite usado al establecimiento.</p>
            <QRCode value={JSON.stringify(qrValue)} className="qrContainer" />
            <p className='ganaPuntos qrContainer whiteColor'>GANA PUNTOS</p>
          </div>
        }

      </div>
    </article>

  );
};