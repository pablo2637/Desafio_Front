import { useSelector } from 'react-redux';
import { calcDistance } from '../helpers/calcDistance';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


export const Info = ({ name, rating, address, image_url, url, phone, price, coords: pCoords, isNearest = false }) => {

    const [display, setDisplay] = useState(false);
    // const [hours, setHours] = useState(false);

    const { coords } = useSelector((state) => state.user);


    const handleOnClickDisplay = () => setDisplay(!display);
    // const handleOnClickHours = () => setHours(!hours);


    return (

        <article className="artInfoPlace">

            <button className='flex w-full justify-center h-4' onClick={handleOnClickDisplay}>
                <img src={(!display) ? "../assets/arrow-up.png" : "../assets/arrow-down.png"} />
            </button>

            <div className='container'>
                <div className='divImg'>
                    {/* <img src="../assets/placeIMG.jpg" alt={`Imagen de ${place_name}`} /> */}
                    <img src={image_url} alt={`Imagen de ${name}`} />
                </div>
                <div>
                    <h3 className='text-ms'>{name}</h3>
                    <p className='m-0 text-[0.6rem]'>{calcDistance(coords.lat, coords.long, pCoords[0], pCoords[1])}</p >
                    {
                        (isNearest) &&
                        <p className='isNearest m-0 text-[0.6rem] pb-1'>Es el más cercano!</p >
                    }
                </div>
            </div>

            {
                (display) &&
                <div >

                    <div className='grid contPopup border-b border-gray-200'>
                        <div className='w-3 h-3 self-center'>
                            <img src="../assets/location.png" />
                        </div>
                        {/* <p className='text-[0.5rem] py-1'>{`${address}, ${pCoords[0].toFixed(4)},${pCoords[1].toFixed(4)}`}</p> */}
                        <p className='text-[0.6rem] py-1'>{address}</p>
                    </div>

                    <div className='grid contPopup border-b border-gray-200'>
                        <div className='w-3 h-3 self-center'>
                            <img src="../assets/web.png" />
                        </div>
                        {
                            (url) ?
                                <NavLink className='text-[0.6rem] py-1 underline' to={url} target='_blank' >web: {name}</NavLink>
                                :
                                <p className='text-[0.6rem] py-1'>--</p>
                        }

                    </div>

                    <div className='grid contPopup border-b border-gray-200'>
                        <div className='w-3 h-3 self-center'>
                            <img src="../assets/contact.png" />
                        </div>
                        <p className='text-[0.6rem] py-1'>{(phone) ? parseInt(phone) : '--'}</p>
                    </div>

                    <div className='grid contPopup border-b border-gray-200'>
                        <div className='w-3 h-3 self-center'>
                            <img src="../assets/star.png" />
                        </div>
                        <p className='text-[0.6rem] py-1'>Rating: {parseFloat(rating)}</p>
                    </div>

                    <div className='grid contPopup'>
                        <div className='w-3 h-3 self-center'>
                            <img src="../assets/coins.png" />
                        </div>
                        <p className='text-[0.6rem] py-1'>{(price) ? `Precio: ${price}` : '--'}</p>
                    </div>

                </div>
            }
        </article >
    )

}
