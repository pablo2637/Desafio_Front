import { useState } from 'react';
import { masterFetch } from '../../Api/fetch';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export const FormLitros = ({ setQRCode, qrCode }) => {

  const [quantity, setQuantity] = useState('');

  const { user } = useSelector(state => state.user);

  const navigate = useNavigate();


  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (quantity == '') return;
    if (e.target.userId.value = '') return;

    // Calculating reward segun la cantidad
    const rewardValue = parseFloat(quantity) * 100;

    // Creating the recycle object
    const recycleData = {
      user_id: qrCode.user_id,
      place_id: user.place_id,
      qty: parseFloat(quantity),
      reward: rewardValue,
    };

    try {
      const response = await masterFetch('api/recycle', 'POST', recycleData);

      if (response.ok)
        navigate('/')

      // setReward(rewardValue); // Actualizar el estado del reward con el valor calculado
    } catch (error) {
      console.error('Error saving recycle data:', error);

    }

  };


  const handleCamara = (ev) => {
    ev.preventDefault();

    setQRCode('');
  }

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} noValidate className="w-80 bg-gray-100 p-4 rounded-md">

        <div className="mb-4">
          <label htmlFor="userId" className="block mb-1">
            Usuario:
          </label>
          <input
            readOnly
            type="text"
            id="userId"
            name="userId"
            value={qrCode?.name}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <button onClick={handleCamara}><i class="fa-solid fa-camera"></i></button>
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block mb-1">
            Litros de aceite:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="placeId" className="block mb-1">
            Restaurant:
          </label>
          <input
            readOnly
            type="text"
            id="place_id"
            name="place_id"
            value={user?.name}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-[#f89a16] text-white px-4 py-2 w-full rounded-md"
        >
          Canjear
        </button>
      </form>

    </div>

  );
};


