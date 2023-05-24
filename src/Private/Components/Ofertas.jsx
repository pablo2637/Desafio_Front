import React from 'react';

export const Ofertas = () => {
  const offers = [
    {
      id: 1,
      image: '../../assets/hamburguesa.png',
      restaurant: 'McDonals',
      discount: 20,
      points: 50,
    },
    {
      id: 2,
      image: '../../assets/benAndJerrys.webp',
      restaurant: 'BEN & JERRYS',
      discount: 10,
      points: 500,
    },
    {
        id: 3,
        image: '../../assets/wok.png',
        restaurant: 'Padthaiwok',
        discount: 30,
        points: 200,
    },
    {
        id: 4,
        image: '../../assets/kfc.png',
        restaurant: 'KFC',
        discount: 50,
        points: 1000,
    },
    {
        id: 5,
        image: '../../assets/tacobell.png',
        restaurant: 'Taco Bell ',
        discount: 30,
        points: 600,
    },
    {
        id: 6,
        image: '../../assets/kebab.png',
        restaurant: 'Kebab',
        discount: 25,
        points: 200,
    },
  
  ];

  return (
    <div className="flex justify-center">
    <div className="grid grid-cols-2 gap-4">
      {offers.map((offer) => (
        <div
          key={offer.id}
          className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-b from-orange-400 to-white mt-8 mb-8"
        >
        
          <div
            className="w-full h-20 bg-cover bg-center max-w-32 max-h-32"
            style={{ backgroundImage: `url(${offer.image})`,
            maskImage: 'linear-gradient(to buttom, white)',
            WebkitMaskImage: 'linear-gradient(to buttom, white)',
            opacity: 0.9, 
            }}/>
            
          <div className="p-4 text-center">
            <p className="text-lg mb-1">{offer.restaurant}</p>
            <p className="text-sm text-gray-500 mb-1">{offer.discount}%</p>
            <p className="text-sm text-gray-500"> {offer.points} Puntos</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};


