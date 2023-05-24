

export const AcumulatedPoints = ({ recycle }) => {

    return (

        <>
            {
                recycle.map(re =>

                    <tr key={re.rec_id} >

                        <td className="text-base font-bold grid grid-cols-2 gap-2 mt-12">
                            <p>
                                {re.place_name}
                            </p>
                            <p className="text-green-700 text-right">
                                +{re.reward}</p>
                        </td>

                        <td className="text-sm text-gray-500 grid grid-cols-2 gap-2">

                            <p >
                                {new Date(re.register_date).toLocaleDateString('es-ES', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </p>

                            <p className="text-right">
                                {re.sum}</p>
                        </td>
                    </tr>
                )
            }
        </>
    )
};
