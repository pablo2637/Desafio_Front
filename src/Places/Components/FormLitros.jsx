import { useState } from 'react';
import { masterFetch } from '../../Api/fetch';
import { useSelector } from 'react-redux';
import { Thanks } from './Thanks';


export const FormLitros = ({ setQRCode, qrCode }) => {

  const [quantity, setQuantity] = useState('');
  const [thanks, setThanks] = useState(false);

  const { user } = useSelector(state => state.user);


  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleOnChange = () => {


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
        setThanks(true);

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
    <>
      <section>

        <div className=" w-4/5 mx-auto mt-4 ">
          <form onSubmit={handleSubmit} noValidate className=" shadow-lg p-4 rounded-md">

            <div className="mb-4">
              <label htmlFor="userId" className="block mb-1">
                Usuario:
              </label>

              <div className='grid grid-flow-col'>
                <input
                  readOnly
                  type="text"
                  id="userId"
                  name="userId"
                  value={qrCode?.name ?? ''}
                  onChange={handleOnChange}
                  required
                  className="w-full border border-gray-300 text-cyan-400  rounded-md p-2"
                />

                <button className='hover:text-[#f89a16] hover:bg-gray-100 m-1 ' onClick={handleCamara}><i className="fa-solid fa-camera"></i></button>
              </div>

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
                className="w-full border border-gray-300 text-orange-500 rounded-md p-2"
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
                onChange={handleOnChange}
                required
                className="w-full border border-gray-300 text-gray-500 rounded-md p-2"
              />
            </div>


            {
              (!thanks) &&
              <button
                type="submit"
                className="bg-[#f89a16] text-white px-4 py-2 w-full rounded-md hover:bg-[#ff9c33]"
              >
                Canjear
              </button>
            }

          </form>

          {
            (thanks) &&
            <Thanks name={qrCode.name} points={quantity * 100} />
          }

        </div>
      </section>


    </>
  );
};


