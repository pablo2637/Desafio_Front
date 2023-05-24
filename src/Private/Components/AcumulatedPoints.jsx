
export const AcumulatedPoints = ({recycle}) => {


  return (

    <>

        <table key={recycle.rec_id} className="mx-auto mt-12 w-11/12">

        <tbody className='text-left'>
            <tr>
                <td className="text-base font-bold ">
                    {recycle.place_name}
                </td>
                <td className="text-2xl text-green-700 text-right">
                    +{recycle.reward}
                </td>
            </tr>
            <tr>
                <td className="text-sm text-gray-500 ">
                    {new Date(recycle.register_date).toLocaleDateString('es-ES', {year: "numeric", month: "long", day: "numeric"})}
                </td>
                <td className="text-right">
                    {recycle.sum}
                </td>
            </tr>
        </tbody>

        </table>

    </>
  )
}
