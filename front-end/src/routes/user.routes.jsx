import { Routes, Route, Navigate} from 'react-router-dom'

import {Home} from '../pages/Home'
import {Plate} from '../pages/Plate'

export function UserRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dish/:id" element={<Plate/>} />

      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}