import { Routes, Route, Navigate} from 'react-router-dom'

import {Home_admin} from '../pages/admin/Home_admin'
import {Plate_admin} from '../pages/admin/Plate_admin'
import {Add} from '../pages/admin/Add'
import {Edit} from '../pages/admin/Edit'

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home_admin/>} />
      <Route path="/add-dish" element={<Add/>} />
      <Route path="/edit-dish/:id" element={<Edit/>} />
      <Route path="/dish/:id" element={<Plate_admin/>} />

      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}