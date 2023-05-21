import QRCode from 'react-qr-code';
import { useSelector } from 'react-redux';



export const CreateQR = () => {
    const isAuthenticated = useSelector(state => state.user.status === 'authenticated');
    const user = useSelector(state => state.user.user[0]);
    const qrValue = user ? JSON.stringify(user) : '';
    
    

  return  (
    <div>

    {isAuthenticated && <QRCode value={qrValue} />}

  </div>
  ) 
  
}
