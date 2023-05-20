import { useSelector } from 'react-redux';
import { calcDistance } from '../helpers/calcDistance';
import { useState } from 'react';


export const Info = ({ place_name, address, coords: pCoords, isNearest = false }) => {

    const [display, setDisplay] = useState(false);
    const [hours, setHours] = useState(false);

    const { coords } = useSelector((state) => state.user);


    const handleOnClickDisplay = () => setDisplay(!display);
    const handleOnClickHours = () => setHours(!hours);


    return (

        <article className="artInfoPlace">

            <button className='flex w-full justify-center h-4' onClick={handleOnClickDisplay}>
                <img src={(!display) ? "../assets/arrow-up.png" : "../assets/arrow-down.png"} />
            </button>

            <div className='container'>
                <div className='w-12 h-12'>
                    <img src="../assets/placeIMG.jpg" alt={`Imagen de ${place_name}`} />
                </div>
                <div>
                    <h3 className='text-ms'>{place_name}</h3>
                    <p className='m-0 text-[0.6rem]'>{calcDistance(coords.lat, coords.long, pCoords[0], pCoords[1])}</p >
                    {
                        (isNearest) &&
                        <p className='m-0 text-[0.6rem] pb-1'>Es el más cercano!</p >
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
                        <p className='text-[0.5rem] py-1'>{`${address}, ${pCoords[0].toFixed(4)},${pCoords[1].toFixed(4)}`}</p>
                    </div>

                    <div className='grid contPopup border-b border-gray-200'>
                        <div className='w-3 h-3 self-center'>
                            <img src="../assets/clock.png" />
                        </div>

                        <div className='grid contClock'>
                            <p className='text-[0.5rem] py-1'>Horario: Domingo: de 15 a 23 hrs</p>

                            <button className='justify-self-end w-4 h-4' onClick={handleOnClickHours}>
                                <img src={(!hours) ? "../assets/arrow-up.png" : "../assets/arrow-down.png"} />
                            </button>

                            {
                                (hours) &&
                                <div>
                                    <div className='grid grid-cols-2'>
                                        <p className='text-[0.5rem] py-1'>Lunes:</p>
                                        <p className='text-[0.5rem] py-1'>de 15 a 23 hrs</p>
                                    </div>
                                    <div className='grid grid-cols-2'>
                                        <p className='text-[0.5rem] py-1'>Martes:</p>
                                        <p className='text-[0.5rem] py-1'>de 15 a 23 hrs</p>
                                    </div>
                                    <div className='grid grid-cols-2'>
                                        <p className='text-[0.5rem] py-1'>Miércoles:</p>
                                        <p className='text-[0.5rem] py-1'>de 15 a 23 hrs</p>
                                    </div>
                                    <div className='grid grid-cols-2'>
                                        <p className='text-[0.5rem] py-1'>Jueves:</p>
                                        <p className='text-[0.5rem] py-1'>de 15 a 23 hrs</p>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                    <div className='grid contPopup border-b border-gray-200'>
                        <div className='w-3 h-3 self-center'>
                            <img src="../assets/web.png" />
                        </div>
                        <p className='text-[0.6rem] py-1'>www.asdasda.com</p>
                    </div>

                    <div className='grid contPopup border-b border-gray-200'>
                        <div className='w-3 h-3 self-center'>
                            <img src="../assets/contact.png" />
                        </div>
                        <p className='text-[0.6rem] py-1'>914 123 456</p>
                    </div>

                    <div className='grid contPopup'>
                        <div className='w-3 h-3 self-center'>
                            <img src="../assets/coins.png" />
                        </div>
                        <p className='text-[0.6rem] py-1'>500 aquacoins</p>
                    </div>

                </div>
            }
        </article >
    )

}
