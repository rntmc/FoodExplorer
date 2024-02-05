import { Routes, Route, Navigate} from 'react-router-dom'

import {Home} from '../pages/Home'
import {Plate} from '../pages/Plate'
import {Add} from '../pages/Add'
import {Edit} from '../pages/Edit'

export function AdminRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add-dish" element={<Add/>} />
      <Route path="/edit-dish/:id" element={<Edit/>} />
      <Route path="/dish/:id" element={<Plate/>} />

      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}