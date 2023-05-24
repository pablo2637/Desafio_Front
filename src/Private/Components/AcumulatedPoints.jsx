export const AcumulatedPoints = ({ recycle }) => {


    const rows = recycle.map((recycle) => (

        <tr key={recycle.rec_id} >
           
            <td className="text-base font-bold grid grid-cols-2 gap-2 mt-12">
                <p>
                {recycle.place_name}
                </p>
                <p className="text-green-700 text-right">
                +{recycle.reward}</p>
                </td>
                
                <td className="text-sm text-gray-500 grid grid-cols-2 gap-2">

                <p > 
                {new Date(recycle.register_date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}
                </p>
           
        <p className="text-right">
         {recycle.sum}</p> 
         </td>
        </tr>

    ));

    return <>{rows}</>;
};