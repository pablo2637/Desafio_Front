import React from 'react'
import { CreateQR } from '../../Public/Components/CreateQR'
import { Allpuntos } from '../../Public/Components/Allpuntos'
import { useSelector } from 'react-redux';
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
