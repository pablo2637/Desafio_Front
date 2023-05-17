import {Routes, Route, Navigate} from 'react-router-dom'
import { RegisterPage } from '../Auth/Pages/RegisterPage'

export const AppRouters = () => {

  return (

    <div>

        <Routes>

            {/* <Route path='home' element={<HomePage />} /> */}
            {/* <Route path='login' element={<LoginPage />} /> */}
            <Route path='register' element={<RegisterPage />} />

            <Route path='/*' element={<Navigate to={'register'} />} />

        </Routes>
      
    </div>
  )
}