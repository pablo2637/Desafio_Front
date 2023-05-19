
const deg2rad = grados => grados * (Math.PI / 180);


export const calcDistance = (lat1, lon1, lat2, lon2) => {

    const earthRadius = 6371; // Radio de la Tierra en kilómetros
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;

    const rslt = distance <= 3 ? `${(distance * 1000).toFixed(2)} mts.` : `${distance.toFixed(2)} kms.`

    return rslt;

};
