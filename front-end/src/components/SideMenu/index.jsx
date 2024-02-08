import { Input } from '../Input'
import {IoIosSearch} from 'react-icons/io'
import {X} from "@phosphor-icons/react"

import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import {Container} from './styles'

export function SideMenu({menuIsOpen, onCloseMenu, onSearch}) {
  const {signOut, user} = useAuth();

  const handleSearch = (e) => {
    onSearch(e.target.value);
  };
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  function handleNavigateToAddDish() {
    navigate("/add-dish")
  }

  return(
    <Container data-menu-is-open={menuIsOpen}>
      <div className='header'>
        <button onClick={onCloseMenu}>
          <X/>
        </button>
        <h1>Menu</h1>
      </div>

      <div className='dropDown'>
      {
        user.role === "admin" ?
        (
          <>
            <Input
              className="input"
              icon={IoIosSearch}
              placeholder="Busque por pratos ou ingredientes"
              onChange={handleSearch}
            />
            <button onClick={handleNavigateToAddDish}>Novo Prato</button>
            <button onClick={handleSignOut}>Sair</button>
          </>
        ) : (
          <>
            <Input
              className="input"
              icon={IoIosSearch}
              placeholder="Busque por pratos ou ingredientes"
              onChange={handleSearch}
            />
            <button onClick={handleSignOut}>Sair</button>
          </>
        )
      }
      </div>
    </Container>
  )
}