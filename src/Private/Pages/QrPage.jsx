import React from 'react'
import { CreateQR } from '../Components/CreateQR'
import { useSelector } from 'react-redux';
import { Allpuntos } from '../Components/Allpuntos';
//import { GenerateQR } from '../Components/GenerateQR'

export const QrPage = () => {

    const {user} = useSelector(state => state.user);

  return (

    <>
    <CreateQR/>

    <Allpuntos user_id = {user.user_id}/>

    </>
    //<div><GenerateQR/></div>
  )
}
