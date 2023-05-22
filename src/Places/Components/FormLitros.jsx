import React, { useState } from 'react';
import { masterFetch } from '../../Api/fetch';
import { useSelector } from 'react-redux';

export const FormLitros = ({ user_id }) => {
  const [userId, setUserId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [placeId, setPlaceId] = useState('');
  const [reward, setReward] = useState(0);

  const { user } = useSelector(state => state.user)

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handlePlaceIdChange = (e) => {
    setPlaceId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Calculating reward segun la cantidad
    const rewardValue = parseFloat(quantity) * 100;

    // Creating the recycle object
    const recycleData = {
      user_id,
      place_id: user.place_id,
      qty: parseFloat(quantity),
      reward: rewardValue,
    };

    try {
      const response = await masterFetch('api/recycle', 'POST', recycleData);
      console.log('Recycle data saved:', response);

      setReward(rewardValue); // Actualizar el estado del reward con el valor calculado
    } catch (error) {
      console.error('Error saving recycle data:', error);

    }
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-80 bg-gray-100 p-4 rounded-md">
        <div className="mb-4">
          <label htmlFor="userId" className="block mb-1">
            User ID:
          </label>
          <input
            type="text"
            id="userId"
            value={user_id}
            onChange={handleUserIdChange}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block mb-1">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="placeId" className="block mb-1">
            Place ID:
          </label>
          <input
            readOnly
            type="text"
            id="place_id"
            value={user.place_id}
            onChange={handlePlaceIdChange}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>


      <div className="mt-4">
        <p className="mb-1">User ID: {userId}</p>
        <p className="mb-1">Quantity: {quantity}</p>
        <p className="mb-1">Place ID: {placeId}</p>
        <p className="mb-1">Reward: {reward}</p>
      </div>
    </div>

  );
};


