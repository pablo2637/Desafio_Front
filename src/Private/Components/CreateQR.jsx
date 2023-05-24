import { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import { useSelector } from 'react-redux';


export const CreateQR = ({ setQr }) => {

  const { user } = useSelector(state => state.user);
  const [qrValue, setQrValue] = useState(null);

  const handleClose = () => {
    setQr(false);
  }


  useEffect(() => {

    if (user.user_id)
      setQrValue({
        user_id: user.user_id,
        name: user.name,
        email: user.email
      })

  }, [user]);

  return (

    <article className="gcardContainer mt-10 position2">

      <div className='gCard centerDiv flex-col text-center'>

        {
          (qrValue) &&
          <>
            <div className="absolute text-right w-full top-1 right-1">
              <button onClick={handleClose} className="">
                <img
                  src="\assets\close.png"
                  alt="botón salir"
                  className=" cursor-pointer" />
              </button>
            </div>

            <h3>Este es tu QR</h3>
            <p>¡Gana puntos y protege el agua!</p>
            <p>Muestra tu código QR cuando lleves tu aceite usado al establecimiento.</p>
            <div className=' qrContainer'>
              <div className='bg-[#f89a16]'>
                <QRCode value={JSON.stringify(qrValue)} className="p-5 bg-[#fafafa] rounded-lg" />
              </div>
              <p className='mt-5 ganaPuntos'>GANA PUNTOS</p>
            </div>
          </>
        }

      </div>
    </article>

  );
};